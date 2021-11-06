<script lang="ts">
	import Panel from "$lib/Panel.svelte";

	export let visible: boolean;
	export let users: { username: string }[];
</script>

<Panel title="Members" visible={visible} on:close>
	<div class="flex flex-col h-auto flex-1 gap-4 mt-2">
		{#each users as user}
			<div class="flex gap-2 flex-row items-center">
				<img src="https://avatars.dicebear.com/api/initials/{user.username}.svg" alt={user.username} class="rounded-md w-12 h-12 mt-auto">
				<p class="text-white">{user.username}</p>
			</div>
		{/each}
	</div>
</Panel>