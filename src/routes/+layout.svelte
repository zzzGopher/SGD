<script lang="ts">
	import './app.css';
	import Icon from '@iconify/svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import type { indexReference } from '$lib/types/indexReference.js';

	let hider = false;
	//toggles the nav bar.

	function navDisplay() {
		hider = !hider;
	}

	export const indexRefs: indexReference = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<nav style:visibility="visible">
	<div class="m-auto max-w-7xl px-8">
		<MobileNav {hider} {indexRefs} />

		<nav class="m-auto pt-8" aria-label="Site Navigation">
			<div
				class="min-w-full sm:justify-between flex h-20 justify-start sm:gap-0 gap-4 items-center pb-4"
			>
				<button on:click={navDisplay} class="w-10 h-auto sm:hidden self-start text-primary">
					<div class=" relative mt-1.5 z-10 self-start">
						<Icon class="" height={28} icon="ci:hamburger" />
					</div>
				</button>
				<a class="z-10" href="/">
					<header class="text-white z-20 text-Clg uppercase whitespace-nowrap font-extralight">
						Tulsa | Sapulpa
						<br class="lg:hidden" /> Garage Doors
					</header>
				</a>
				<ul
					class="invisible sm:visible z-50 text-white text-Cxs sm:flex w-min justify-around gap-4"
				>
					{#each indexRefs as index}
						<li>
							<a class="hover:text-primary rounded transition-all ease-in-out" href={index.href}
								>{index.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</div>
</nav>

<slot />

<Footer />

<style>
</style>
