<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Gallery from "$lib/Gallery.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { Source } from "$lib/Navbar.svelte";
	import Chat from "$lib/Chat.svelte";
	import Members from "$lib/Members.svelte";
	import Share from "$lib/Share.svelte";
	import type Host from "$lib/Host";
	import JoinPopup from "$lib/JoinPopup.svelte";
	
	let host: Host;
	let streams: {id: string, username: string, stream: MediaStream, video: boolean, audio: boolean}[] = [];
	let time: number = 0;
	let messages: { author: string, message: string, id: string, me: boolean }[] = [];
	let chatVisible: boolean = false;
	let membersVisible: boolean = false;
	let shareVisible: boolean = false;
	let username: string = undefined;
	let hostId: string = "";
	let promise: Promise<string>;

	onMount(async() => {
		const hostf = await import("$lib/Host");
		const Host = hostf.default;

		username = await promise;
		let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
		
		host = new Host(username, stream);

		host.on("peer", peer => {
			if(streams.map(stream => stream.stream.id).includes(peer.stream.id)) return;
			streams = [...streams, peer];
		});

		host.on("open", id => {
			streams = [{ id: id, username: username, stream: stream, video: true, audio: true }];
			hostId = id;

			setInterval(() => time++, 1000);
		});

		host.on("disconnect", id => {
			streams = streams.filter(stream => stream.id != id);
		});

		host.on("message", msg => {
			messages = [...messages, msg];
		});

		host.on("toggle", data => {
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
	<title>Home</title>
	<script>
		let parcelRequire;
	</script>
</svelte:head>

{#if username == undefined}
	<JoinPopup bind:promise={promise}/>
{/if}

<div class="{ chatVisible || membersVisible || shareVisible ? "hidden" : "flex" } md:flex flex-col h-screen w-full items-center">
	<Navbar 
		time={time}
		on:videoswitch={() => {
			streams[0].stream.getVideoTracks().forEach((track) => track.enabled = !track.enabled);
			streams[0].video = !streams[0].video;
			host.toggleMedia(!host.videoEnabled);
		}}
		on:muteswitch={() => {
			streams[0].stream.getAudioTracks().forEach((track) => track.enabled = !track.enabled);
			streams[0].audio = !streams[0].audio;
			host.toggleMedia(undefined, !host.audioEnabled);
		}}
		on:sourceswitch={async(event) => {
			let stream = event.detail.source == Source.Screen ? await navigator.mediaDevices.getDisplayMedia({video: true}) : await navigator.mediaDevices.getUserMedia({video: true});
			
			host.replaceStream(stream);
		}}
		on:chatswitch={() => {
			chatVisible = !chatVisible;
			membersVisible = false;
			shareVisible = false;
		}}
		on:membersswitch={() => {
			membersVisible = !membersVisible;
			chatVisible = false;
			shareVisible = false;
		}}
		on:shareswitch={() => {
			shareVisible = !shareVisible;
			chatVisible = false;
			membersVisible = false;
		}}
	/>

	{#if streams.length !== 0}
		<Gallery streams={streams} sidePanelVisible={chatVisible || membersVisible || shareVisible}/>
	{/if}	
</div>

<Chat visible={chatVisible} on:close={() => chatVisible = false} messages={messages} on:messagesend={(event) => host.send(event.detail.message)}/>

<Members visible={membersVisible} on:close={() => membersVisible = false} users={streams}/>
<Share visible={shareVisible} on:close={() => shareVisible = false} id={hostId}/>