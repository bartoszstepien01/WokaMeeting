<script lang="ts">
	import Fa from "svelte-fa";
	import { faVideoSlash, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

	export let width: number;
	export let height: number;
	export let stream: {username: string, stream: MediaStream};
	export let muted: boolean = false;

	function srcObject(node, stream: MediaStream) {
		node.srcObject = stream;
		return {
			destroy() {}
		};
  	};

	$: video = stream.stream.getVideoTracks().reduce<boolean>((prev, track) => prev || track.enabled, false);
	$: audio = stream.stream.getAudioTracks().reduce<boolean>((prev, track) => prev || track.enabled, false);
</script>

<div class="video-container bg-gray-700 rounded-xl relative" style="--width: { width }px; --height: { height }px;">
	<video autoplay muted={ muted } class="w-full h-full rounded-xl" use:srcObject={ stream.stream }>
		<track kind="captions">
	</video>
	<p class="text-white absolute bottom-5 left-5 text-xl bg-gray-700 bg-opacity-70 px-2 py-1 rounded-md">{ stream.username}</p>
	<div class="absolute bottom-5 right-5 flex mx-2 my-1 gap-5">
		{#if !video}
			<Fa icon={ faVideoSlash } color="#b91c1c" scale={1.5}/>
		{/if}
		{#if !audio}
			<Fa icon={ faMicrophoneSlash } color="#b91c1c" scale={1.5}/>
		{/if}
	</div>
</div>

<style>
	.video-container {
		width: var(--width);
		height: var(--height);
	}
</style>