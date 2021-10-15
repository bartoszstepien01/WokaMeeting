<script lang="ts">
	import { onMount } from "svelte";

	let video;

	onMount(async() => {
		window.dispatchEvent(new Event('resize'));

		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let peer = new Peer();
		let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

		video.srcObject = stream;
	});
</script>

<svelte:head>
	<title>Home</title>
	<link rel="stylesheet" href="/css/grid.css">
	<script>
		let parcelRequire;
	</script>
</svelte:head>

<div id="gallery">
	<div class="video-container">
		<video autoplay muted bind:this={video}></video>
	</div>
</div>