<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import type Peer from 'peerjs';
	import Navbar from "$lib/Navbar.svelte";
	import { Source } from "$lib/Navbar.svelte";
	import Chat from "$lib/Chat.svelte";

	let chatVisible: boolean = false;
	let streams: {username: string, stream: MediaStream}[] = [];
	let time: number = 0;
	let peers: Array<string> = [];
	let calls: Array<Peer.MediaConnection> = [];
	let messages: { author: string, message: string, id: string, me: boolean }[] = [];
	let connection: Peer.DataConnection;
	let username: string = "";

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		// let username: string = window.prompt("Enter username: ");
		username = "DeathGuard12";
		let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
		streams = [{ username: username, stream: stream }];

		let url = new URL(window.location.href);
		let peer = new Peer(undefined, {config: {
			iceServers: [
				{urls: 'stun:stun.l.google.com:19302'},
				{urls: "turn:numb.viagenie.ca", credential: "muazkh", username: "webrtc@live.com"}
			]
		}});

		let connectTo = (peerId: string, usernameParam: string = "") => {
			let call = peer.call(peerId, stream, {metadata: {username: username}});

			peers = [...peers, call.peer];
			calls = [...calls, call];

			call.on("stream", (stream) => {
				if(streams.map(stream => stream.stream.id).includes(stream.id)) return;
				streams = [...streams, { username: usernameParam, stream: stream }];
			});

			return call;
		};

		let closeConnection = (peerId: string) => {
			streams = streams.filter((stream, index) => peers[index] != peerId);
			peers = peers.filter((peer) => peer != peerId);
			calls = calls.filter((call) => call.peer != peerId);
		};

		peer.on("open", (id) => {	
			peers = [id];

			connectTo(url.searchParams.get("room"));		

			let conn = peer.connect(url.searchParams.get("room"), { metadata: { username: username } });

			conn.on("data", (data) => {
				switch(data.type) {
					case "connect":
						connectTo(data.data.peerId, data.data.username);
						break;
					case "disconnect":
						closeConnection(data.data.peerId);
						break;
					case "username":
						streams[1].username = data.data.username;
						break;
					case "message":
						messages = [...messages, { author: streams[1].username, message: data.data.message, id: conn.peer, me: false}];
						break;
					default:
						break;
				}
			});

			conn.on("close", () => {
				closeConnection(conn.peer);
			});

			window.onunload = window.onbeforeunload = () => {
				conn.close();
			}

			connection = conn;

			setInterval(() => time++, 1000);
		});

		peer.on("call", (call) => {
			peers = [...peers, call.peer];
			calls = [...calls, call];
			call.answer(stream);

			call.on("stream", (stream) => {
				if(streams.map(stream => stream.stream.id).includes(stream.id)) return;
				streams = [...streams, { username: call.metadata.username, stream: stream }];
			});
		});

		peer.on("connection", (conn) => conn.close());
	});
</script>

<svelte:head>
	<link rel="icon" href="{ base }/favicon.png" />
	<link rel="manifest" href="{ base }/manifest.json">
	<title>Join</title>
	<script>
		let parcelRequire;
	</script>
</svelte:head>

<div class="{ chatVisible ? "hidden" : "flex" } md:flex flex-col h-screen w-screen items-center">
	<Navbar 
		time={time}
		on:videoswitch={() => streams[0].stream.getVideoTracks().forEach((track) => track.enabled = !track.enabled)}
		on:muteswitch={() => streams[0].stream.getAudioTracks().forEach((track) => track.enabled = !track.enabled)}
		on:sourceswitch={async(event) => {
			let stream = event.detail.source == Source.Screen ? await navigator.mediaDevices.getDisplayMedia({video: true}) : await navigator.mediaDevices.getUserMedia({video: true});
			let streamTrack = stream.getVideoTracks()[0];

			streams[0].stream.getVideoTracks().forEach((track) => { 
				track.stop(); 
				streams[0].stream.removeTrack(track); 
			});

			streams[0].stream.addTrack(streamTrack);

			calls.forEach((call) => call.peerConnection.getSenders().filter((sender) => sender.track.kind == "video").forEach((sender) => sender.replaceTrack(streamTrack)));
		}}
		on:chatswitch={() => chatVisible = !chatVisible}
	/>

	{#if streams.length !== 0}
		<Gallery streams={streams} sidePanelVisible={chatVisible}/>
	{/if}
</div>

<Chat visible={chatVisible} on:close={() => chatVisible = false} messages={messages} on:messagesend={(event) => {
	connection.send({type: "message", data: { message: event.detail.message }});
	
	messages = [...messages, { author: username, message: event.detail.message, id: peers[0], me: true}];
}}/>