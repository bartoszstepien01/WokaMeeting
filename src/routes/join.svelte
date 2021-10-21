<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import type Peer from "peerjs";

	let streams: Array<MediaStream> = [];
	let peers: Array<string> = [];

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
		streams = [stream];

		let url = new URL(window.location.href);
		let peer = new Peer(undefined, {config: {
			iceServers: [
				{urls: 'stun:stun.l.google.com:19302'},
				{urls: "turn:numb.viagenie.ca", credential: "muazkh", username: "webrtc@live.com"}
			]
		}});

		let connectTo = (peerId: string) => {
			let call = peer.call(peerId, stream);

			peers = [...peers, call.peer];

			call.on("stream", (stream) => {
				if(streams.map(stream => stream.id).includes(stream.id)) return;
				streams = [...streams, stream];
			});

			return call;
		};

		let closeConnection = (peerId: string) => {
			streams = streams.filter((stream, index) => peers[index] != peerId);
			peers = peers.filter((peer) => peer != peerId);
		};

		peer.on("open", (id) => {	
			peers = [id];

			connectTo(url.searchParams.get("room"));		

			let conn = peer.connect(url.searchParams.get("room"));

			conn.on("data", (data) => {
				switch(data.type) {
					case "connect":
						connectTo(data.data.peerId);
						break;
					case "disconnect":
						closeConnection(data.data.peerId);
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
		});

		peer.on("call", (call) => {
			peers = [...peers, call.peer];
			call.answer(stream);

			call.on("stream", (stream) => {
				if(streams.map(stream => stream.id).includes(stream.id)) return;
				streams = [...streams, stream];
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

{#if streams.length !== 0}
	<Gallery streams={streams}/>
{/if}

<!-- <style>
	:global(body) {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;

		background-color: #1c1c1e;
	}
</style> -->