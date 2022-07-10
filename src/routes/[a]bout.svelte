<script type="ts">
	import TypeWriter from './../lib/assets/components/TypeWriter.svelte';
	import { onMount } from 'svelte';
	import Animated, { hello } from '$lib/assets/components/Animated_Button.svelte';
	import { Motion } from 'svelte-motion';
	import { fly, draw, blur } from 'svelte/transition';

	let doIt = false;

	hello();

	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -500 }
	};

	let i = 1;
	let t = 360;
	let count = 0;

	$: v = ['hidden', 'visible'];
	const again = () => {
		i = i > 0 ? 0 : 1;
		console.log(i);
	};
</script>

<div class="wrapper">
	<Animated />

	<Motion initial="hidden" animate={i == 1 ? v[0] : v[1]} let:motion>
		<div use:motion>wowowoow</div>
	</Motion>
	<h1 on:click={again} class=" text-gray-300">lets try it</h1>
	<h1 class=" text-gray-300">lets try it</h1>
	<button on:click={() => (doIt = !doIt)}>on Click</button>
</div>

{#if doIt}
	<div transition:blur={{ duration: 1000 }}>hey there baby</div>
{/if}

<style>
</style>
