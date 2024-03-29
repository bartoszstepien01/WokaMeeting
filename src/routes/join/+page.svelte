<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { Source } from "$lib/Navbar.svelte";
	import Chat from "$lib/Chat.svelte";
	import Members from "$lib/Members.svelte";
	import type Peer from "$lib/Peer";
	import JoinPopup from "$lib/JoinPopup.svelte";

	let peer: Peer;
	let chatVisible: boolean = false;
	let membersVisible: boolean = false;
	let streams: {id: string, username: string, stream: MediaStream, video: boolean, audio: boolean}[] = [];
	let time: number = 0;
	let messages: { author: string, message: string, id: string, me: boolean }[] = [];
	let username: string;
	let promise: Promise<{ username: string, stream: MediaStream, video: boolean, audio: boolean }>;

	onMount(async() => {
		const peerf = await import("$lib/Peer");
		const Peer = peerf.default;

		let result = await promise;

		username = result.username;
		let stream = result.stream;

		let url = new URL(window.location.href);
		peer = new Peer(username, stream, url.searchParams.get("room"));
		peer.toggleMedia(result.video, result.audio);

		peer.on("peer", peer => {
			if(streams.map(stream => stream.stream.id).includes(peer.stream.id)) return;
			streams = [...streams, peer];
		});

		peer.on("open", id => {
			streams = [{ id: id, username: username, stream: stream, video: result.video, audio: result.audio }];
			setInterval(() => time++, 1000);
		});

		peer.on("disconnect", id => {
			streams = streams.filter(stream => stream.id != id);
		});

		peer.on("message", msg => {
			messages = [...messages, msg];
		});

		peer.on("toggle", data => {
			let stream = streams.find(stream => stream.id == data.id);

			stream.video = data.video;
			stream.audio = data.audio;

			streams = streams;
		});
	});
</script>

<svelte:head>
	<link rel="icon" href="{ base }/favicon.png" />
	<link rel="manifest" href="{ base }/manifest.json">
	<title>WokaMeeting</title>
	<script>
		let parcelRequire;
	</script>
</svelte:head>

{#if username == undefined}
	<JoinPopup bind:promise={promise}/>
{/if}

<div class="{ chatVisible || membersVisible ? "hidden" : "flex" } md:flex flex-col h-screen w-full items-center">
	<Navbar 
		time={time}
		on:videoswitch={() => {
			streams[0].stream.getVideoTracks().forEach((track) => track.enabled = !track.enabled);
			streams[0].video = !streams[0].video;
			peer.toggleMedia(!peer.videoEnabled);
		}}
		on:muteswitch={() => {
			streams[0].stream.getAudioTracks().forEach((track) => track.enabled = !track.enabled);
			streams[0].audio = !streams[0].audio;
			peer.toggleMedia(undefined, !peer.audioEnabled);
		}}
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