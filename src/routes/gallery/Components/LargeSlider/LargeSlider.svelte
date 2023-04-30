<script lang="ts">
	import { quintInOut } from 'svelte/easing';
	import { fade, slide, fly } from 'svelte/transition';
	let selected: boolean = false;

	let Images = [
		{ id: 0, pic: 'door1.jpg' },
		{ id: 1, pic: 'local_beach_door.jpg' },
		{ id: 2, pic: 'neighborhood_door.jpg' },
		{ id: 3, pic: 'small-house.jpg' },
		{ id: 4, pic: 'house_image.jpg' }
	];

	function chosenPic(e: any, i: number) {
		e.preventDefault();

		Images = [...Images.splice(i), ...Images];
	}
</script>

<div class="hidden m-auto large-slider-container w-full justify-center md:flex gap-2 p-2">
	{#each Images as pic, i (pic.id)}
		{#if i === 0}
			<div class="large-slider-image-container">
				<img
					in:fade={{ duration: 1500, easing: quintInOut }}
					on:mousedown={(e) => chosenPic(e, i)}
					src={pic.pic}
					alt=""
					class="large-slider-image object-cover w-[800px] min-h-[600px] max-h-[600px]"
				/>
			</div>
		{:else}
			<div class="large-slider-image-container">
				<img
					in:slide={{ duration: 1500, easing: quintInOut, axis: 'x' }}
					on:mousedown={(e) => chosenPic(e, i)}
					src={pic.pic}
					alt=""
					class="large-slider-image2 object-cover w-40 min-h-[600px] max-h-[600px]
					hover:bg-accent transition-all duration-300 ease-in-out cursor-pointer"
				/>
			</div>
		{/if}
	{/each}
</div>

<style>
	.large-slider-image2:hover {
		scale: 0.9;
	}
</style>
