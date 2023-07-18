<script lang="ts">
	import { quintInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { groupImagesIntoSixArr, splitStringArr } from '$lib/functions/arraySorters';

	export let myImages = [];

	$: images = myImages;

	let emptyArr: any[] = [[]];

	let buildingArr = splitStringArr(emptyArr, myImages);

	let finalImageArr = groupImagesIntoSixArr(buildingArr);

	let selected = 'one';

	let firstImages = finalImageArr[0];

	function slideToNextImages(e, arr: string[]): string[] {
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
</script>

<div
	class="hidden min-w-full m-auto large-slider-container w-full justify-center relative md:flex gap-2 p-2"
>
	<div class="flex w-full -bottom-14 p-4 justify-center absolute">
		<div class="flex text-white font-medium gap-8">
			<button
				class:selected={selected === 'one'}
				id={0}
				on:click={(e) => slideToNextImages(e, finalImageArr)}
				class="hover:text-primary transition-all ease-in-out underline">1</button
			>
			<button
				class:selected={selected === 'two'}
				id={1}
				on:click={(e) => slideToNextImages(e, finalImageArr)}
				class="hover:text-primary transition-all ease-in-out underline">2</button
			>
			<button
				class:selected={selected === 'three'}
				id={2}
				on:click={(e) => slideToNextImages(e, finalImageArr)}
				class="hover:text-primary transition-all ease-in-out underline">3</button
			>
		</div>
	</div>
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
						loading="lazy"
						draggable="false"
						in:slide={{ duration: 1500, easing: quintInOut, axis: 'x' }}
						on:click={() => {
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
	.selected {
		@apply text-primary;
	}
</style>
