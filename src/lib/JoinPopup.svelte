<script lang="ts">
	import { onMount } from "svelte";

	let promiseResolve: (value: { username: string, stream: MediaStream, video: boolean, audio: boolean }) => void;
	let mediaDevicesPromise: Promise<MediaDeviceInfo[]>;

	let username: string;
	let videoDevice: string;
	let audioDevice: string;

	export const promise: Promise<{ username: string, stream: MediaStream, video: boolean, audio: boolean }> = new Promise((resolve) => {
		promiseResolve = resolve;
	});

	onMount(() => {
		mediaDevicesPromise = navigator.mediaDevices.enumerateDevices();
	});
</script>

<div class="flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10 justify-center items-center">
	<div class="bg-white rounded-xl text-black px-5 py-4">
		<h1 class="text-4xl font-bold mb-2">Meeting</h1>
		<hr>
		<form class="flex flex-col gap-2 mt-2" on:submit|preventDefault={async () => {
			if(videoDevice == undefined || audioDevice == undefined) return;

			let stream = await navigator.mediaDevices.getUserMedia({ 
				video: videoDevice == "" ? true : { deviceId: videoDevice }, 
				audio: audioDevice == "" ? true : { deviceId: audioDevice } 
			});

			if(videoDevice == "") stream.getVideoTracks().forEach(track => track.enabled = false);
			if(audioDevice == "") stream.getAudioTracks().forEach(track => track.enabled = false);

			promiseResolve({
				username: username,
				stream: stream,
				video: videoDevice != "",
				audio: audioDevice != ""
			});
		}}>
			<input type="text" class="bg-gray-100 rounded-md focus:outline-none p-2 w-full" placeholder="Enter your username..." bind:value={username} autofocus>
			<select class="bg-gray-100 rounded-md focus:outline-none p-2 w-full appearance-none { videoDevice == undefined ? "text-gray-400" : "" }" bind:value={videoDevice}>
				<option disabled hidden selected value={undefined}>Select video input...</option>
				<option value="">Disabled</option>
				{#if mediaDevicesPromise}
					{#await mediaDevicesPromise then devices}
						{#each devices as device}
							{#if device.kind == "videoinput"}
								<option value={device.deviceId}>{device.label}</option>
							{/if}
						{/each}
					{/await}
				{/if}
			</select>
			<select class="bg-gray-100 rounded-md focus:outline-none p-2 w-full appearance-none { audioDevice == undefined ? "text-gray-400" : "" }" bind:value={audioDevice}>
				<option disabled hidden selected value={undefined}>Select audio input...</option>
				<option value="">Disabled</option>
				{#if mediaDevicesPromise}
					{#await mediaDevicesPromise then devices}
						{#each devices as device}
							{#if device.kind == "audioinput"}
								<option value={device.deviceId}>{device.label}</option>
							{/if}
						{/each}
					{/await}
				{/if}
			</select>
			<button class="bg-green-500 focus:outline-none text-white rounded-md w-full py-1">Join</button>
		</form>
	</div>
</div>