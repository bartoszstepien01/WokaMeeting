<script lang="ts">
	import Panel from "$lib/Panel.svelte";
	import { onMount } from "svelte";

	export let visible: boolean;
	export let id: string;

	let baseURL: string = "";

	onMount(() => {
		let url = new URL(window.location.href);
		baseURL = url.origin + url.pathname + "join?room=";
	});

	$: joinURL = baseURL + id;
</script>

<Panel title="Share" visible={visible} on:close>
	<div class="flex flex-col h-auto flex-1 gap-9 mt-2">
		<div class="flex flex-col gap-2">
			<h1 class="text-white text-xl">Scan QR code</h1>
			<img class="p-2" src="http://api.qrserver.com/v1/create-qr-code/?data={joinURL}&format=svg&color=ffffff&bgcolor=1f2937" alt={joinURL}>
		</div>
		<div class="flex flex-col gap-2">
			<h1 class="text-white text-xl">Enter URL</h1>
			<p class="bg-gray-700 rounded-md text-white px-2 py-1">{joinURL}</p>
		</div>
	</div>
</Panel>