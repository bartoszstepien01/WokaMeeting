import Peer from "peerjs";
import { EventEmitter } from "eventemitter3";

export default class Host extends EventEmitter {
	peer: Peer;
	peers: { [ id: string ]: { username: string, media: Peer.MediaConnection, conn: Peer.DataConnection } } = {};

	username: string;
	id: string;
	stream: MediaStream;

	videoEnabled: boolean = true;
	audioEnabled: boolean = true;

	constructor(username: string, stream: MediaStream) {
		super();

		this.username = username;
		this.stream = stream;
		this.peer = new Peer(undefined, {config: {
			iceServers: [
				{urls: 'stun:stun.l.google.com:19302'},
				{urls: "turn:numb.viagenie.ca", credential: "muazkh", username: "webrtc@live.com"}
			]
		}});

		this.peer.on("open", id => {
			this.id = id;
			this.emit("open", id);
		});

		this.peer.on("call", call => {
			if(!(call.peer in this.peers))
				this.peers[call.peer] = {
					username: call.metadata.username,
					media: call,
					conn: undefined
				};
			else
				this.peers[call.peer].media = call;
			
			call.answer(stream);

			call.on("stream", peerStream => {
				this.emit("peer", { id: call.peer, username: call.metadata.username, stream: peerStream, video: call.metadata.video, audio: call.metadata.audio });
			});
		});

		this.peer.on("connection", conn => {
			if(!(conn.peer in this.peers))
				this.peers[conn.peer] = {
					username: conn.metadata.username,
					media: undefined,
					conn: conn
				}
			else
				this.peers[conn.peer].conn = conn;

			conn.on("open", () => {
				Object.values(this.peers).map(peer => peer.conn).forEach(peerConn => {
					if(peerConn.peer == conn.peer) return;

					peerConn.send({
						type: "connect",
						data: {
							peerId: conn.peer,
							username: this.peers[conn.peer].username
						}
					});
				});

				conn.send({
					type: "initialization",
					data: {
						username: username,
						video: this.videoEnabled,
						audio: this.audioEnabled
					}
				});
			});

			conn.on("close", () => {
				delete this.peers[conn.peer];

				Object.values(this.peers).map(peer => peer.conn).forEach(peerConn => {
					peerConn.send({
						type: "disconnect",
						data: {
							peerId: conn.peer
						}
					});
				});

				this.emit("disconnect", conn.peer);
			});

			conn.on("data", data => {
				switch(data.type) {
					case "message":
						this.emit("message", {
							author: this.peers[conn.peer].username,
							message: data.data.message,
							id: conn.peer,
							me: false
						});

						Object.values(this.peers).map(peer => peer.conn).forEach(peerConn => {
							if(peerConn.peer == conn.peer) return;

							peerConn.send({
								type: "message",
								data: {
									author: this.peers[conn.peer].username,
									message: data.data.message,
									id: conn.peer
								}
							});
						});
						break;
					case "toggle":
						this.emit("toggle", {
							id: conn.peer,
							video: data.data.video,
							audio: data.data.audio
						});


						Object.values(this.peers).map(peer => peer.conn).forEach(peerConn => {
							if(peerConn.peer == conn.peer) return;

							peerConn.send({
								type: "toggle",
								data: {
									id: conn.peer,
									video: data.data.video,
									audio: data.data.audio
								}
							});
						});
						break;
				}
			});

			window.onunload = window.onbeforeunload = () => {
				conn.close();
			};
		});
	}

	send(message: string) {
		this.emit("message", {
			author: this.username,
			message: message,
			id: this.id,
			me: true
		});

		Object.values(this.peers).map(peer => peer.conn).forEach(peerConn => {
			peerConn.send({
				type: "message",
				data: {
					author: this.username,
					message: message,
					id: this.id
				}
			});
		});
	}

	replaceStream(stream: MediaStream) {
		let track = stream.getVideoTracks()[0];

		this.stream.getVideoTracks().forEach(track => {
			track.stop(); 
			this.stream.removeTrack(track);
		});

		this.stream.addTrack(track);

		Object.values(this.peers).map(peer => peer.media).forEach(call => {
			call.peerConnection.getSenders().filter((sender) => sender.track.kind == "video").forEach((sender) => sender.replaceTrack(track));
		});
	}

	toggleMedia(video: boolean = this.videoEnabled, audio: boolean = this.audioEnabled) {
		this.videoEnabled = video;
		this.audioEnabled = audio;

		Object.values(this.peers).map(peer => peer.conn).forEach(conn => {
			conn.send({
				type: "toggle",
				data: {
					id: this.peer.id,
					video: video,
					audio: audio
				}
			});
		});
	}
}