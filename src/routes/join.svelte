<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Gallery from "$lib/Gallery.svelte";

	let room = $page.query.get("room");
	let streams: Array<MediaStream> = [];

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let peer = new Peer();
		let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

		streams = [stream];

		let call = peer.call(room, stream);

		call.on("stream", (stream) => {
			if(streams.map(stream => stream.id).includes(stream.id)) return;
			streams = [...streams, stream];
		});
	});
</script>

<svelte:head>
	<title>Join</title>
	<script>
		let parcelRequire;
	</script>
</svelte:head>

{#if streams.length !== 0}
	<Gallery streams={streams}/>
{/if}

<style>
	:global(body) {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;

		background-color: #1c1c1e;
	}
</style>