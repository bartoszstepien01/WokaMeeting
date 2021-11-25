<script lang="ts">
	let promiseResolve: (value: string) => void;
	let username: string;

	export const promise: Promise<string> = new Promise((resolve) => {
		promiseResolve = resolve;
	});
</script>

<div class="flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10 justify-center items-center">
	<div class="bg-white rounded-xl text-black px-5 py-4">
		<h1 class="text-4xl font-bold mb-2">Meeting</h1>
		<hr>
		<form on:submit|preventDefault={() => promiseResolve(username)}>
			<input type="text" class="bg-gray-100 rounded-md focus:outline-none px-2 py-2 w-full mt-2" placeholder="Enter your username..." bind:value={username} autofocus>
			<button class="bg-green-500 focus:outline-none text-white rounded-md w-full py-1 mt-2">Join</button>
		</form>
	</div>
</div>