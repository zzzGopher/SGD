<script lang="ts">
	import Slider from './Components/Slider.svelte';
	import GalleryHeader from './Components/GalleryHeader/GalleryHeader.svelte';
	import rectangleBG from '$lib/assets/Rectangle59.svg';
	import PhoneIcon from '$lib/assets/Phone.svelte';
	import DoorTypes from './Components/DoorTypes.svelte/DoorTypes.svelte';
	import type { colors } from './Components/DoorTypes.svelte/types';
	import LargeSlider from './Components/LargeSlider.svelte';
	import Selector from './Components/GallerySelector/Selector.svelte';
	import { active } from './Components/GallerySelector/MenuActiveStore';

	const doorColors: colors = [{ color: 'ffff' }, { color: '02bf54' }, { color: 'bfa002' }];

	function CloseMenu(e: MouseEvent | KeyboardEvent) {
		e.preventDefault();
		if (e.target !== document.querySelector('.drop-down-button')) $active = false;
	}
</script>

<html lang="UTF-8" id="gallery" on:keydown={CloseMenu} on:click={CloseMenu}>
	<section class="m-auto min-h-min sm:min-h-screen max-w-7xl  py-8 wrapper">
		<div class=" flex gap-8 p-4 flex-col items-start  justify-center w-full py-8">
			<GalleryHeader />
			<Selector />
			<Slider />
			<LargeSlider />
			<DoorTypes colors={doorColors} />

			<button class="text-accent flex w-full items-center justify-center text-Cxs font-black"
				><PhoneIcon height={20} width={20} /> Call For Pricing & Availability</button
			>
		</div>
		<img class="absolute h-auto bottom-0 -z-10 right-0" src={'rectangleBG'} alt="" />
	</section></html
>

<style>
</style>
