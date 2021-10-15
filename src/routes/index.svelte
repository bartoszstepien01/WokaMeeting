<script lang="ts">
	import { onMount } from "svelte";
	import Gallery from "$lib/Gallery.svelte";

	let streams = [];

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let peer = new Peer();
		let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

		streams = [stream];
	});
</script>

<svelte:head>
	<title>Home</title>
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