<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { indexReference } from '$lib/types/indexReference.js';
	export let hider: boolean;
	export let indexRefs: indexReference;
	//TODO build functionality to exit mobile navigation.
</script>

{#if hider}
	<div
		transition:fly={{ x: 500, duration: 1000 }}
		class="nav_slide fixed flex flex-col items-center py-40 text-2xl justify-around gap-40 z-20 transition-all bg-primary h-screen right-0 w-1/2"
	>
		{#each indexRefs as index, i}
			<a
				class="font-black text-white"
				transition:fly={{ x: 500, duration: i * 800 }}
				href={index.href}>{index.name}</a
			>
		{/each}
	</div>{/if}

<style>
	.nav_slide > a:hover {
		transform: scale(1.3);
		font-weight: 700;
		color: black;
	}
</style>
