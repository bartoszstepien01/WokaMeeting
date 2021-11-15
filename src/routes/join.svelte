<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { Source } from "$lib/Navbar.svelte";
	import Chat from "$lib/Chat.svelte";
	import Members from "$lib/Members.svelte";
	import type Peer from "$lib/Peer";

	let peer: Peer;
	let chatVisible: boolean = false;
	let membersVisible: boolean = false;
	let streams: {id: string, username: string, stream: MediaStream}[] = [];
	let time: number = 0;
	let messages: { author: string, message: string, id: string, me: boolean }[] = [];
	let username: string = "";

	onMount(async() => {
		const peerf = await import("$lib/Peer");
		const Peer = peerf.default;

		username = window.prompt("Enter username: ");
		let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});

		let url = new URL(window.location.href);
		peer = new Peer(username, stream, url.searchParams.get("room"));

		peer.on("peer", peer => {
			if(streams.map(stream => stream.stream.id).includes(peer.stream.id)) return;
			streams = [...streams, peer];
		});

		peer.on("open", id => {
			streams = [{ id: id, username: username, stream: stream }];
			setInterval(() => time++, 1000);
		});

		peer.on("disconnect", id => {
			streams = streams.filter(stream => stream.id != id);
		});

		peer.on("message", msg => {
			messages = [...messages, msg];
		});
	});
</script>

<svelte:head>
	<link rel="icon" href="{ base }/favicon.png" />
	<link rel="manifest" href="{ base }/manifest.json">
	<title>Join</title>
	<script>
		let parcelRequire;
	</script>
</svelte:head>

<div class="{ chatVisible || membersVisible ? "hidden" : "flex" } md:flex flex-col h-screen w-full items-center">
	<Navbar 
		time={time}
		on:videoswitch={() => streams[0].stream.getVideoTracks().forEach((track) => track.enabled = !track.enabled)}
		on:muteswitch={() => streams[0].stream.getAudioTracks().forEach((track) => track.enabled = !track.enabled)}
		on:sourceswitch={async(event) => {
			let stream = event.detail.source == Source.Screen ? await navigator.mediaDevices.getDisplayMedia({video: true}) : await navigator.mediaDevices.getUserMedia({video: true});
			
			peer.replaceStream(stream);
		}}
		on:chatswitch={() => {
			chatVisible = !chatVisible;
			membersVisible = false;
		}}
		on:membersswitch={() => {
			membersVisible = !membersVisible;
			chatVisible = false;
		}}
		peer={true}
	/>

	{#if streams.length !== 0}
		<Gallery streams={streams} sidePanelVisible={chatVisible || membersVisible}/>
	{/if}
</div>

<Chat visible={chatVisible} on:close={() => chatVisible = false} messages={messages} on:messagesend={(event) => peer.send(event.detail.message)}/>

<Members visible={membersVisible} on:close={() => membersVisible = false} users={streams}/>