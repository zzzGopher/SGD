<script>
	import './app.css';
	import Icon from '@iconify/svelte';

	import { fly } from 'svelte/transition';

	let hider = false;

	function navDisplay() {
		hider = !hider;
		console.log(hider);
	}

	let indexRefs = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<nav style:visibility="visible">
	<div class="m-auto max-w-7xl px-8">
		<!-- Slider
		
		-->
		{#if hider}
			<div
				transition:fly={{ x: 500, duration: 1000 }}
				class="nav_slide fixed flex flex-col items-center py-40 text-2xl justify-around gap-40 z-20 transition-all bg-primary h-screen right-0  w-1/2"
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
		<nav class="m-auto pt-8">
			<div
				class="min-w-full sm:justify-between flex h-20 justify-start sm:gap-0 gap-4 items-center"
			>
				<!--  

	Icon

  -->

				<button on:click={navDisplay} class="w-10  h-auto sm:hidden self-start text-primary"
					><div class=" relative z-10 self-start">
						<Icon class="" height={28} icon="ci:hamburger" />
					</div></button
				><a href="/">
					<header class="text-white text-Clg uppercase font-extralight ">
						Sapulpa Garage <br class="sm:hidden" /> Doors
					</header></a
				>
				<ul class="hidden sm:visible text-white text-Cxs sm:flex w-52 justify-around gap-4 ">
					{#each indexRefs as index}
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

<div class="flex h-24 flex-col gap-2 py-8 bg-footer_color  justify-center items-center">
	<a href="/" class="hover:text-black text-gray-500">
		<Icon color="black" icon="akar-icons:facebook-fill" width={28} /></a
	>
	<div class="flex w-full flex-row items-center justify-around">
		<a href="/" class="text-black hover_footer text-xs sm:text-lg">Instagram</a>
		<a class="sm:text-2xl text-black hover:text-black" href="/">Developed by &#169 Frogip</a><a
			href="/"
			class="text-black hover_footer text-xs sm:text-lg">Instagram</a
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
</style>
