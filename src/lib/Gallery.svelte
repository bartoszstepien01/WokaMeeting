<script lang="ts">
	import { largestRect } from "rect-scaler";
  import { onMount } from "svelte";
  import { to_number } from "svelte/internal";
  import Video from "./Video.svelte";

  export let sidePanelVisible: boolean = false;
	export let streams: {username: string, stream: MediaStream}[] = [];
  $: { 
    sidePanelVisible;
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
      document.body.clientWidth - 64 - 16 * (videoCount - 1) - document.body.clientWidth * 0.2 * to_number(sidePanelVisible),
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

<div id="gallery" class="flex justify-center items-center flex-wrap flex-1 px-8 py-8 gap-4" bind:this={ gallery }>
  {#each streams as stream, i}
    <Video width={ videoWidth } height={ videoHeight } stream={ stream } muted={i == 0}/>
  {/each}
</div>