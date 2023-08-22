<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { indexReference } from '$lib/types/indexReference.js';
	export let hider: boolean;
	export let indexRefs: indexReference;
	export let hiderFunc: (e: any) => void;
</script>

{#if hider}
	<div
		transition:fly={{ x: 500, duration: 1000 }}
		class="nav_slide fixed flex flex-col items-center py-40 text-2xl justify-around gap-10 z-20 transition-all bg-primary h-screen right-0 w-1/2"
	>
		<span on:click={hiderFunc} on:keydown={hiderFunc} class:closer-x={hider} />
		{#each indexRefs as index, i}
			<a
				on:click={hiderFunc}
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

	.closer-x {
		display: flex;
		justify-items: center;
		align-content: center;
		position: absolute;
		width: 28px;
		height: 28px;
		top: 3%;
		left: 20%;
	}

	.closer-x:hover {
		cursor: pointer;
	}

	.closer-x::before {
		content: '';
		position: absolute;
		border: 2px #3c4856 solid;
		border-radius: 4px;
		margin: 4px;
		top: 5%;
		left: 25%;
		background-color: black;
		width: 3px;
		height: 25px;
		transition: all ease-in-out;
		animation: animate 1s ease-in-out forwards;
	}
	.closer-x::after {
		content: '';
		position: absolute;
		border: 2px #3c4856 solid;
		border-radius: 4px;
		margin: 4px;
		top: 5%;
		left: 25%;
		background-color: black;
		width: 3px;
		height: 25px;
		transition: all ease-in-out;
		animation: animate2 1s ease-in-out forwards;
	}

	@keyframes animate {
		25% {
			transform: rotate(15deg);
		}
		50% {
			transform: rotate(30deg);
		}
		100% {
			transform: rotate(45deg);
		}
	}

	@keyframes animate2 {
		25% {
			transform: rotate(-15deg);
		}
		50% {
			transform: rotate(-30deg);
		}
		100% {
			transform: rotate(-45deg);
		}
	}
</style>
