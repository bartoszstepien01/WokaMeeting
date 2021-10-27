<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import type Peer from 'peerjs';
	import Navbar from "$lib/Navbar.svelte";
	import { Source } from "$lib/Navbar.svelte";

	let streams: {username: string, stream: MediaStream}[] = [];
	let peers: Array<string> = [];
	let time: number = 0;
	let calls: Array<Peer.MediaConnection> = [];

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

<div class="flex w-screen">
	<div class="flex flex-col h-screen w-screen items-center">
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
		/>

		{#if streams.length !== 0}
			<Gallery streams={streams}/>
		{/if}
	</div>
	<div class="flex flex-col w-1/3 h-screen bg-gray-800 border-l-2 border-gray-700 px-4 pt-3 pb-8">
		<h1 class="text-3xl text-white font-semibold mb-3">Chat</h1>
		<div class="h-auto flex-1">
			<div class="flex gap-2">
				<img src="https://avatars.dicebear.com/api/initials/death guard.svg" alt="death guard" class="rounded-md w-12 h-12 mt-auto">
				<div class="flex flex-col flex-1 gap-1">
					<p class="text-gray-400 text-xs">death guard</p>
					<div class="flex items-center bg-gray-600 text-white rounded-b-md rounded-tr-md flex-1 px-2 py-2">
						<p class="">Hello!</p>
					</div>
					<div class="flex items-center bg-gray-600 text-white rounded-b-md rounded-tr-md flex-1 px-2 py-2">
						<p class="">How are you?</p>
					</div>
					<!-- <p class=" px-4 table-cell align-middle">Hallo!</p> -->
				</div>
			</div>
		</div>
		<div class="flex gap-2">
			<input type="text" class="w-full bg-gray-700 text-white focus:outline-none h-9 px-4 rounded-md" placeholder="Aa">
			<button class="text-white bg-blue-600 px-4 rounded-md">Send</button>
		</div>
	</div>
</div>
