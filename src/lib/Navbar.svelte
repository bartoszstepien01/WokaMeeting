<script context="module" lang="ts">
	export enum Source { Camera, Screen };
</script>

<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Fa from "svelte-fa";
	import { faVideo, faMicrophone, faDesktop, faComment, faUsers, faShareAlt, faVideoSlash, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

	let cameraOn: boolean = true;
	let audioOn: boolean = true;
	let currentSource: Source = Source.Camera;
	export let time: number = 0;
	export let peer: boolean = false;

	const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');
	const formatTime = (time) => (~~(time / 60) >= 60 ? `${zeroPad(~~(time / 3600), 2)}:` : ``) + `${zeroPad(~~(time / 60) % 60, 2)}:${zeroPad(time % 60, 2)}`

	const dispatch = createEventDispatcher();
</script>


<div class="flex w-full bg-gray-700 h-16 px-8 items-center">
	<p class="text-white">{formatTime(time)}</p>
	<div class="flex ml-auto gap-5">
		<button on:click={() => {
			cameraOn = !cameraOn;
			dispatch("videoswitch");
		}}>
			<Fa icon={cameraOn ? faVideo : faVideoSlash} color="#ffffff" scale={1.3}/>
		</button>
		<button on:click={() => {
			audioOn = !audioOn;
			dispatch("muteswitch");
		}}>
			<Fa icon={audioOn ? faMicrophone : faMicrophoneSlash} color="#ffffff" scale={1.3}/>
		</button>
		<button class="hidden sm:block" on:click={() => {
			currentSource = currentSource == Source.Camera ? Source.Screen : Source.Camera;
			dispatch("sourceswitch", { source: currentSource });
		}}>
			<Fa icon={faDesktop} color={currentSource == Source.Camera ? "#ffffff" : "#34d399"} scale={1.3}/>
		</button>
		<div class="border border-gray-500"/>
		<button on:click={() => dispatch("chatswitch")}>
			<Fa icon={faComment} color="#ffffff" scale={1.3}/>
		</button>
		<button on:click={() => dispatch("membersswitch")}>
			<Fa icon={faUsers} color="#ffffff" scale={1.3}/>
		</button>
		{#if !peer}
			<div class="border border-gray-500"/>
			<button on:click={() => dispatch("shareswitch")}>
				<Fa icon={faShareAlt} color="#ffffff" scale={1.2}/>
			</button>
		{/if}
	</div>
</div>