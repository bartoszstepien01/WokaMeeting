<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";

	let streams: Array<MediaStream> = [];

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let peer = new Peer();
		let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

		streams = [stream];

		let url = new URL(window.location.href);

		peer.on("open", () => {
			let call = peer.call(url.searchParams.get("room"), stream);

			call.on("stream", (stream) => {
				if(streams.map(stream => stream.id).includes(stream.id)) return;
				streams = [...streams, stream];
			});
		});
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