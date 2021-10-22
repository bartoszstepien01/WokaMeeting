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

	function recalculateLayout() {
    const aspectRatio = [16, 9];
    const videoCount = streams.length;

    const { width, height } = largestRect(
      document.body.clientWidth - 64 - 16 * (videoCount - 1),
      document.body.clientHeight - 64 - 64 - 16 * (videoCount - 1),
      videoCount,
      ...aspectRatio
    );

    videoWidth = width;
    videoHeight = height;
  }

  onMount(recalculateLayout);
</script>

<svelte:window on:resize={ recalculateLayout }/>

<div id="gallery" class="flex justify-center items-center flex-wrap w-full h-full px-8 py-8 gap-4" bind:this={ gallery }>
  {#each streams as stream, i}
    <Video width={ videoWidth } height={ videoHeight } stream={ stream } muted={i == 0}/>
  {/each}
</div>