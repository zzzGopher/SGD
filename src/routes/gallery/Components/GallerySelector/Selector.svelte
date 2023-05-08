<script lang="ts">
	import DropDownIcon from './DropDownIcon.svelte';
	import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { active } from './MenuActiveStore';

	function Toggle(e: MouseEvent | KeyboardEvent) {
		e.preventDefault();
		$active = !$active;
		console.log(active);
	}
</script>

<div class="selector-container w-full">
	<ul
		class="hidden list-container h-auto pt-4 md:flex justify-start gap-2 text-center items-center whitespace-nowrap"
	>
		<li class="list-items">Popular</li>
		<li class="list-items">Steel on Steel</li>
		<li class="list-items">Residential</li>
		<li class="list-items">Decorative</li>
	</ul>
</div>

<div class="drop-down-container flex w-full justify-center items-center">
	<button
		class:b-active={$active}
		on:click={Toggle}
		on:keydown={Toggle}
		class="drop-down-button font-medium flex items-center justify-center gap-2 md:hidden w-auto bg-white rounded-xl px-4 py-2 hover:bg-opacity-40"
		>Door Types
		<DropDownIcon size={{ width: 20, height: 20 }} color="black" />
	</button>
	{#if $active}
		<ul
			class:active
			transition:fade={{ duration: 500, easing: quintInOut }}
			class="dropdown-list-container flex-col hidden w-52 h-40 rounded-xl bg-white text-center mt-60 absolute z-10 items-center justify-center shadow-xl"
		>
			<li class="dropdown-list-items rounded-t-xl"><span>Popular</span></li>
			<li class="dropdown-list-items"><span>Steel on steel</span></li>
			<li class="dropdown-list-items"><span>Residential</span></li>
			<li class="dropdown-list-items rounded-b-xl"><span>Decorative</span></li>
		</ul>{/if}
</div>

<style>
	.active {
		display: flex;
	}
	.b-active {
		@apply bg-opacity-40;
	}
	.list-items {
		@apply bg-accent w-auto p-2 rounded-md shadow-sm shadow-black;
	}
	.dropdown-list-items {
		@apply w-full h-12 flex items-center justify-center;
	}
	.dropdown-list-items:hover {
		color: white;
		cursor: pointer;
		transition: all ease-in-out 0.3s;
		@apply bg-primary;
	}
	.dropdown-list-items span:hover {
		scale: 1.1;
		transition: all ease-in-out 0.3s;
	}
</style>
