<script>
	import '../app.css';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let hider = false;

	function navDisplay() {
		hider = !hider;
		console.log(hider);
	}

	let indexRefs = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/About' },
		{ name: 'Gallery', href: '/Gallery' },
		{ name: 'Contact', href: '/Contact' }
	];
</script>

<nav style:visibility="visible">
	<div class="m-auto max-w-7xl px-8">
		<!-- Slider
		
		-->
		{#if hider}
			<div
				transition:fly={{ x: 500, duration: 1000 }}
				class="nav_slide flex flex-col items-center pt-40 text-2xl justify-start gap-40 z-10 transition-all bg-primary h-screen right-0 absolute w-1/2"
			>
				{#each indexRefs as index, i}
					<a
						class="font-black text-white"
						transition:fly={{ x: 500, duration: i * 800 }}
						href={index.href}>{index.name}</a
					>
				{/each}
			</div>{/if}

		<!-- Slider End
		
		-->
		<nav class="m-auto py-8">
			<div
				class="min-w-full sm:justify-between flex h-20 justify-start sm:gap-0 gap-4 items-center"
			>
				<!--  

	Icon

  -->

				<button on:click={navDisplay} class="w-10  h-auto sm:hidden self-start text-primary"
					><div label="Nav Toggle" class=" relative z-10 self-start">
						<Icon class="" height={28} icon="ci:hamburger" />
					</div></button
				><a href="/">
					<header class="text-white text-medium_small uppercase font-extralight ">
						Sapulpa Garage <br class="sm:hidden" /> Doors
					</header></a
				>
				<ul class="hidden sm:visible text-white text-smallest sm:flex w-52 justify-between">
					{#each indexRefs as index, i}
						<li>{index.name}</li>
					{/each}
				</ul>
			</div>

			<!--  

End Icon
-->

			<!-- Border SVG-->

			<!-- Border SVG End-->
		</nav>
	</div>
</nav>

<slot />

<div class="flex h-24 flex-col gap-2 py-8 bg-accent  justify-center items-center">
	<a href="/" class="hover:text-black text-gray-500">
		<Icon color="white" icon="akar-icons:facebook-fill" width={28} /></a
	>
	<div class="flex w-full flex-row items-center justify-around">
		<a href="/" class="text-white hover_footer text-xs sm:text-lg">Instagram</a>
		<a class="sm:text-2xl text-white hover:text-black" href="/">Developed by &#169 Frogip</a><a
			href="/"
			class="text-white hover_footer text-xs sm:text-lg">Instagram</a
		>
	</div>
</div>

<style>
	.hover_footer:hover {
		color: black;
		transform: scale(1.2);
	}
	.nav_slide > a:hover {
		transform: scale(1.3);
		font-weight: 700;
		color: black;
	}

	.hider {
		visibility: visible;
		transform: translateX(100%);
		transition: transform 2s ease-in;
		opacity: 1;
	}
</style>
