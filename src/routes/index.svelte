<script lang="ts">
	import { onMount } from "svelte";

	let video;

	onMount(async() => {
		const peerjs = await import("peerjs");
		const Peer = peerjs.default;

		let peer = new Peer();
		let stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

		video.srcObject = stream;
		video.play();
	});
</script>

<svelte:head>
	<title>Home</title>
	<script>
		let parcelRequire;
	</script>
</svelte:head>

<video bind:this={video}>
	<track kind="captions">
</video>
