<script lang="ts">
	import Slider from './Components/Slider.svelte';
	import GalleryHeader from './Components/GalleryHeader/GalleryHeader.svelte';
	import PhoneIcon from '$lib/assets/Phone.svelte';
	import DoorTypes from './Components/DoorTypes/DoorTypes.svelte';
	import LargeSlider from './Components/LargeSlider/LargeSlider.svelte';
	import Selector from './Components/GallerySelector/Selector.svelte';
	import { active } from './Components/GallerySelector/MenuActiveStore';
	import { doorColors, images, alterable, doorOptions } from '../../Stores/ImageStore';

	function CloseMenu(e: MouseEvent | KeyboardEvent) {
		e.preventDefault();
		if (e.target !== document.querySelector('.drop-down-button')) $active = false;
	}

	export let data: Record<string, any>;

	$: $alterable = data[$doorOptions].fields[$doorOptions];

	$: $images = $alterable.map((img: any) => img.fields.file.url);

	$doorColors = data.all.fields.colors;
</script>

<svelte:head>
	<title>Gallery</title>
	<meta
		name="Take a look at our gallery featuring a wide variety of door installations and repairs. Our collection includes residential and carriage doors with various styles to choose from. We have popular options for you to explore at your convenience. Thank you for considering us."
	/>
</svelte:head>

<div lang="en" id="gallery" on:keydown={CloseMenu} on:click={CloseMenu}>
	<section class="md:hidden m-auto min-h-min sm:min-h-screen max-w-7xl py-8 wrapper">
		<div class=" flex gap-8 p-4 flex-col items-start justify-center w-full py-8">
			<GalleryHeader />
			<Selector />
			<Slider {data} />
			<DoorTypes />

			<div class="flex w-full items-center justify-start gap-2">
				<PhoneIcon height={20} width={20} />

				<button class="text-accent text-Cxs font-semibold">
					<a href="tel:918-224-2323">Call For Pricing & Availability</a></button
				>
			</div>
		</div>
		<img
			loading="lazy"
			class="absolute h-auto bottom-0 -z-10 right-0"
			src={'rectangleBG.svg'}
			alt="ff"
		/>
	</section>
	<!--Large Screen Section-->
	<div class="hidden md:wrapper justify-center">
		<section class="hidden w-full md:grid grid-flow-row mt-32">
			<LargeSlider {data} />
			<div class="bottom-grid-container mt-4 p-2 grid grid-flow-col gap-4 min-w-full">
				<div class="flex w-auto flex-col gap-2 items-start">
					<h1 class="text-Cxl text-white">Gallery</h1>
					<p class="text-accent text-Cbase font-bold">
						Take a look at our gallery featuring a wide variety of door installations and repairs.
						Our collection includes residential and carriage doors with various styles to choose
						from. We have popular options for you to explore at your convenience. Thank you for
						considering us.
					</p>
				</div>
				<div class="flex flex-col items-start gap-6">
					<Selector />
					<DoorTypes />
				</div>
			</div>
		</section>
	</div>
</div>

<style>
</style>
