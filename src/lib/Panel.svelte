<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Fa from "svelte-fa";
	import { faTimes } from "@fortawesome/free-solid-svg-icons";

	export let title: string;
	export let visible: boolean;

	const dispatch = createEventDispatcher();
</script>


<div class="{ visible ? "flex" : "hidden" } flex-col w-full h-screen bg-gray-800 border-l-0 md:border-l-2 border-gray-700 px-4 pt-3 pb-8">
	<div class="flex mb-3">
		<h1 class="text-3xl text-white font-semibold">{ title }</h1>
		<button class="block md:hidden ml-auto" on:click={() => dispatch("close")}>
			<Fa icon={faTimes} color="#ffffff" scale={1.3}/>
		</button>
	</div>
	<slot></slot>
</div>