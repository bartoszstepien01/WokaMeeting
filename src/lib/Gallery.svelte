<script lang="ts">
	import { largestRect } from "rect-scaler";
  import { onMount } from "svelte";
  import Video from "./Video.svelte";

  export let streams: Array<MediaStream>;
  $: { 
    streams; 
    recalculateLayout(); 
  }

  let gallery: HTMLDivElement;
  let videoWidth: number;
  let videoHeight: number;
  let galleryColumns: number;

	function recalculateLayout() {
    const aspectRatio = [16, 9];
    const videoCount = streams.length;

    const { width, height, cols } = largestRect(
      document.body.clientWidth,
      document.body.clientHeight,
      videoCount,
      ...aspectRatio
    );

    videoWidth = width;
    videoHeight = height;
    galleryColumns = cols;
  }

  onMount(recalculateLayout);
</script>

<svelte:window on:resize={ recalculateLayout }/>

<div bind:this={ gallery } id="gallery" style="--width: { videoWidth }px; --cols: { galleryColumns };">
  {#each streams as stream, i}
    <Video width={ videoWidth } height={ videoHeight } stream={ stream } muted={i == 0}/>
  {/each}
</div>

<style>
  #gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: calc(var(--width) * var(--cols));
  }
</style>