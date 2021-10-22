<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import type Peer from 'peerjs';

	import Fa from "svelte-fa";
	import { faVideo, faMicrophone, faDesktop, faComment, faUsers, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

	const zeroPad = (num, places) => String(num).padStart(places, '0');

	let streams: Array<MediaStream> = [];
	let peers: Array<string> = [];
	let secondsSinceStart: number = 0;

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
		streams = [stream];

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

			setInterval(() => secondsSinceStart++, 1000);
		});

		peer.on("call", (call) => {
			peers = [...peers, call.peer];
			call.answer(stream);

			call.on("stream", (stream) => {
				if(streams.map(stream => stream.id).includes(stream.id)) return;
				streams = [...streams, stream];
			});
		});

		peer.on("connection", (conn) => {
			conn.on("open", () => {
				connections.forEach((arrConn) => {
					arrConn.send({
						type: "connect",
						data: {
							peerId: conn.peer
						}
					});
				});

				connections.push(conn);
			});

			conn.on("close", () => {
				connections = connections.filter((arrConn) => arrConn != conn);
				streams = streams.filter((stream, index) => peers[index] != conn.peer);
				peers = peers.filter((peer) => peer != conn.peer);

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


<div class="flex w-screen bg-gray-700 h-16 px-8 items-center">
	<p class="text-white">{#if Math.floor(secondsSinceStart / 60) >= 60}{ zeroPad(Math.floor(secondsSinceStart / 3600), 2) }:{/if}{ zeroPad(Math.floor(secondsSinceStart / 60) % 60, 2) }:{ zeroPad(secondsSinceStart % 60, 2) }</p>
	<div class="flex ml-auto gap-4">
		<button>
			<Fa icon={faVideo} color="#ffffff" size="lg"/>
		</button>
		<button>
			<Fa icon={faMicrophone} color="#ffffff" size="lg"/>
		</button>
		<button>
			<Fa icon={faDesktop} color="#ffffff" size="lg"/>
		</button>
		<div class="border border-gray-500"/>
		<button>
			<Fa icon={faComment} color="#ffffff" size="lg"/>
		</button>
		<button>
			<Fa icon={faUsers} color="#ffffff" size="lg"/>
		</button>
		<div class="border border-gray-500"/>
		<button>
			<Fa icon={faEllipsisV} color="#ffffff" size="lg"/>
		</button>
	</div>
</div>

{#if streams.length !== 0}
	<Gallery streams={streams}/>
{/if}