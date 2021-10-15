<script lang="ts">
	export let width: number;
	export let height: number;
	export let stream: MediaStream;

	function srcObject(node, stream) {
		node.srcObject = stream;
		return {
			destroy() {}
		};
  	};
</script>

<div class="video-container" style="--width: { width }px; --height: { height }px;">
	<video autoplay muted use:srcObject={ stream }>
		<track kind="captions">
	</video>
</div>

<style>
	.video-container {
		width: var(--width);
		height: var(--height);
		background-color: #3a3a3e;
	}

	video {
		height: 100%;
		width: 100%;
	}
</style>