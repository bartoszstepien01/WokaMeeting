<script lang="ts">
	import Panel from "$lib/Panel.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let visible: boolean = false;
	export let messages: { author: string, message: string, id: string, me: boolean }[] = [];
	let currentMessage: string = "";
	let processedMessages: [{ author: string, message: string, id: string, me: boolean }][] = [];

	$: {
		let ids = [];
		processedMessages = [];

		messages.forEach((message) => {
			if(ids.length == 0 || ids[ids.length - 1] != message.id) {
				ids.push(message.id);
				processedMessages.push([message]);
				return;
			}

			processedMessages[processedMessages.length - 1].push(message);
		});

		processedMessages = [...processedMessages];
	}
</script>

<Panel title="Chat" visible={visible} on:close>
	<div class="flex flex-col h-auto flex-1 gap-6">
		{#each processedMessages as messages}
			<div class="flex gap-2 {messages[0].me ? "flex-row-reverse": "flex-row"}">
				<img src="https://avatars.dicebear.com/api/initials/{messages[0].author}.svg" alt={messages[0].author} class="rounded-md w-12 h-12 mt-auto">
				<div class="flex flex-col flex-1 gap-1">
					<p class="text-gray-400 text-xs">{messages[0].author}</p>
					{#each messages as message}
						<div class="flex items-center bg-gray-600 text-white rounded-b-md {messages[0].me ? "rounded-tl-md" : "rounded-tr-md"} flex-1 px-2 py-2">
							<p>{message.message}</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<form class="flex gap-2" on:submit|preventDefault={() => {
		dispatch("messagesend", { message: currentMessage });
		currentMessage = "";
	}}>
		<input type="text" class="w-full bg-gray-700 text-white focus:outline-none h-9 px-4 rounded-md" placeholder="Aa" bind:value={currentMessage}>
		<button class="text-white bg-blue-600 px-4 rounded-md">Send</button>
	</form>
</Panel>