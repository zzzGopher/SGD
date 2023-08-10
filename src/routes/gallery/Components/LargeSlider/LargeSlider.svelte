<script lang="ts">
	import { quintInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { groupImagesIntoSixArr } from '$lib/utils/arraySorters';
	import { doorOptions, images, alterable } from '../../../../Stores/ImageStore';
	import ImgArrNavButton from '$lib/components/imgArrNavButton.svelte';
	import { incrementIndexID } from '$lib/utils/incrementIndexID';

	export let data: any;

	$: $alterable = data[$doorOptions].fields[$doorOptions];

	$: $images = $alterable.map((img: any) => img.fields.file?.url);

	$: finalImageArr = groupImagesIntoSixArr($images);

	let selected = 'one';

	$: firstImages = finalImageArr[0];

	function slideToNextImages(e: any, arr: any): string[] {
		e.preventDefault();
		let id = e.currentTarget.id;
		switch (id) {
			case '0':
				selected = 'one';
				break;
			case '1':
				selected = 'two';
				break;
			case '2':
				selected = 'three';
				break;
			default:
				selected = 'one';
		}
		if (finalImageArr[id] !== arr) {
			firstImages = arr[id];
			return arr;
		}
		return arr;
	}

	//TODO optimize all web image sizes to pass lighthouse score. and fix layout shift.
	//TODO fix class selection on ImgArrNavButton
</script>

<div
	class="hidden min-w-full m-auto large-slider-container w-full justify-center relative md:flex gap-2 p-2"
>
	{#if finalImageArr.length > 1}
		<div class="flex w-full -bottom-14 p-4 justify-center absolute">
			<div class="flex text-white font-medium gap-8">
				{#each finalImageArr as fir, i}
					<ImgArrNavButton
						text={incrementIndexID(i)}
						selected={i}
						slideFunction={(e) => slideToNextImages(e, finalImageArr)}
					/>
				{/each}
			</div>
		</div>{/if}

	{#await firstImages}
		<p class="min-h-[600px] text-4xl text-white flex items-center">loading...</p>
	{:then Images}
		{#each Images as pic, i (pic)}
			{#if i === 0}
				<div class="large-slider-image-container">
					<img
						loading="lazy"
						draggable="false"
						in:fade={{ duration: 1500, easing: quintInOut }}
						src={pic}
						alt=""
						class="large-slider-image object-cover w-[800px] min-h-[600px] max-h-[600px]"
					/>
				</div>
			{:else}
				<div class="large-slider-image-container">
					<img
						draggable="false"
						in:slide={{ duration: 1500, easing: quintInOut, axis: 'x' }}
						on:click={() => {
							let cloneArr = Images.slice(0);

							Images = [...cloneArr.splice(i), ...cloneArr];
						}}
						on:keydown={() => {
							let cloneArr = Images.slice(0);

							Images = [...cloneArr.splice(i), ...cloneArr];
						}}
						src={pic}
						alt="carousel of images"
						class="large-slider-image2 object-cover w-40 min-h-[600px] max-h-[600px]
					hover:bg-accent transition-all duration-300 ease-in-out cursor-pointer"
					/>
				</div>
			{/if}
		{/each}
	{/await}
</div>

<style>
	.large-slider-image2:hover {
		scale: 0.9;
	}
</style>
