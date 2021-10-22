<script lang="ts">
	export let width: number;
	export let height: number;
	export let stream: MediaStream;
	export let muted: boolean = false;

	function srcObject(node, stream) {
		node.srcObject = stream;
		return {
			destroy() {}
		};
  	};
</script>

<div class="video-container bg-gray-700" style="--width: { width }px; --height: { height }px;">
	<video autoplay muted={ muted } class="w-full h-full" use:srcObject={ stream }>
		<track kind="captions">
	</video>
</div>

<style>
	.video-container {
		width: var(--width);
		height: var(--height);
	}
</style>