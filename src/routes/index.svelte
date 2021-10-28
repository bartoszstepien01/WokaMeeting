<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import type Peer from 'peerjs';
	import Navbar from "$lib/Navbar.svelte";
	import { Source } from "$lib/Navbar.svelte";
	import Chat from "$lib/Chat.svelte";

	let streams: {username: string, stream: MediaStream}[] = [];
	let peers: Array<string> = [];
	let time: number = 0;
	let calls: Array<Peer.MediaConnection> = [];
	let chatVisible: boolean = false;

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let username: string = /*window.prompt("Enter username: ")*/ "DeathGuard12";
		let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
		streams = [{ username: username, stream: stream }];

		let connections: Array<Peer.DataConnection> = [];

		let peer = new Peer(undefined, {config: {
			iceServers: [
				{urls: 'stun:stun.l.google.com:19302'},
				{urls: "turn:numb.viagenie.ca", credential: "muazkh", username: "webrtc@live.com"}
			]
		}});

		peer.on("open", (id) => {
			console.log(id);
			peers = [id];

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

		peer.on("connection", (conn) => {
			conn.on("open", () => {
				connections.forEach((arrConn) => {
					arrConn.send({
						type: "connect",
						data: {
							peerId: conn.peer,
							username: conn.metadata.username
						}
					});
				});

				conn.send({
					type: "username",
					data: {
						username: username
					}
				})

				connections.push(conn);
			});

			conn.on("close", () => {
				connections = connections.filter((arrConn) => arrConn != conn);
				streams = streams.filter((stream, index) => peers[index] != conn.peer);
				peers = peers.filter((peer) => peer != conn.peer);
				calls = calls.filter((call) => call.peer != conn.peer);

				connections.forEach((arrConn) => {
					arrConn.send({
						type: "disconnect",
						data: {
							peerId: conn.peer
						}
					});
				});
			});

			window.onunload = window.onbeforeunload = () => {
				conn.close();
			}
		});
	});
</script>

<svelte:head>
	<link rel="icon" href="{ base }/favicon.png" />
	<link rel="manifest" href="{ base }/manifest.json">
	<title>Home</title>
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

<Chat visible={chatVisible} on:close={() => chatVisible = false} messages={[]}/>