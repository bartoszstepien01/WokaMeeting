<script lang="ts">
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
</script>

<div class="video-container bg-gray-700 rounded-xl relative" style="--width: { width }px; --height: { height }px;">
	<video autoplay muted={ muted } class="w-full h-full rounded-xl" use:srcObject={ stream.stream }>
		<track kind="captions">
	</video>
	<p class="text-white absolute top-0 left-0 text-xl">{ stream.username}</p>
</div>

<style>
	.video-container {
		width: var(--width);
		height: var(--height);
	}
</style>