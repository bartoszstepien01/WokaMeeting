import PeerJS from "peerjs";
import { EventEmitter } from "eventemitter3";

export default class Peer extends EventEmitter {
	peer: PeerJS;
	peers: { [ id: string ]: { username: string, media: PeerJS.MediaConnection } } = {};
	hostStream: MediaStream;
	hostConnection: PeerJS.DataConnection;

	username: string;
	id: string;
	stream: MediaStream;

	videoEnabled: boolean = true;
	audioEnabled: boolean = true;

	constructor(username: string, stream: MediaStream, room: string) {
		super();

		this.username = username;
		this.stream = stream;
		this.peer = new PeerJS(undefined, {config: {
			iceServers: [
				{urls: 'stun:stun.l.google.com:19302'},
				{urls: process.env.TURN_SERVER, credential: process.env.TURN_CREDENTIAL, username: process.env.TURN_USERNAME}
			]
		}});

		this.peer.on("open", id => {
			this.id = id;
			this.emit("open", id);

			let call = this.peer.call(room, stream, { metadata: { username: username, video: this.videoEnabled, audio: this.audioEnabled } });

			this.peers[room] = {
				username: "",
				media: call
			};

			call.on("stream", stream => {
				this.hostStream = stream;
			});

			this.hostConnection = this.peer.connect(room, { metadata: { username: username, video: this.videoEnabled, audio: this.audioEnabled } });

			this.hostConnection.on("data", data => {
				switch(data.type) {
					case "connect":
						let call = this.peer.call(data.data.peerId, stream, { metadata: { username: username, video: this.videoEnabled, audio: this.audioEnabled } });
	
						this.peers[data.data.peerId] = {
							username: data.data.username,
							media: call
						};
	
						call.on("stream", stream => {
							this.emit("peer", { id: call.peer, username: data.data.username, stream: stream, video: this.videoEnabled, audio: this.audioEnabled });
						});
						break;
					case "disconnect":
						delete this.peers[data.data.peerId];
						this.emit("disconnect", data.data.peerId);
						break;
					case "initialization":
						this.peers[this.hostConnection.peer].username = data.data.username;
						this.emit("peer", { id: this.hostConnection.peer, username: data.data.username, stream: this.hostStream, video: data.data.video, audio: data.data.audio });
						break;
					case "message":
						this.emit("message", {
							author: data.data.author,
							message: data.data.message,
							id: data.data.id,
							me: false
						});
						break;
					case "toggle":
						this.emit("toggle", { id: data.data.id, video: data.data.video, audio: data.data.audio });
						break;
					default:
						break;
				}
			});
	
			this.hostConnection.on("close", () => {
				delete this.peers[this.hostConnection.peer];
				this.emit("disconnect", this.hostConnection.peer);
			});
		});

		this.peer.on("call", call => {
			this.peers[call.peer] = {
				username: call.metadata.username,
				media: call
			};
			
			call.answer(stream);

			call.on("stream", peerStream => {
				this.emit("peer", { id: call.peer, username: call.metadata.username, stream: peerStream, video: this.videoEnabled, audio: this.audioEnabled });
			});
		});

		this.peer.on("connection", conn => conn.close());

		window.onunload = window.onbeforeunload = () => {
			this.hostConnection.close();
		};
	}

	send(message: string) {
		this.emit("message", {
			author: this.username,
			message: message,
			id: this.id,
			me: true
		});

		this.hostConnection.send({
			type: "message",
			data: {
				message: message
			}
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

		if(!this.hostConnection) return;

		this.hostConnection.send({
			type: "toggle",
			data: {
				id: this.peer.id,
				video: video,
				audio: audio
			}
		});
	}
}