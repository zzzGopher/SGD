<script lang="ts">
	import { quintInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let myImages;


	$: images = myImages;

	// console.log(myImages);

	let testArr:any[] = [];

	const makeImagesArr = (arr:string[]) => {
		let limit = 0;

		for (let start = 0; start < arr.length; start++) {
			if (start < arr.length) {
				testArr[limit] = arr[start]

				if (start === 6) {
					limit++;
				}
			}


		}

	};
 async function turtle(){
	 const response = await fetch('./api/contentful-api',{
		 method:'POST',
		 body: JSON.stringify({ ff:'this',triangle:45 }),
		 headers: {
			 'content-type':'application/json'
		 }
	 }).then((res) => res.json());

	 console.log(response);
 }

 onMount(()=>
 turtle()
 );



	makeImagesArr(myImages);

	console.log(testArr);

	//TODO add a way to load more images and optimize all web image sizes.


</script>

<div
	class="hidden min-w-full m-auto large-slider-container w-full justify-center md:flex gap-2 p-2"
>
	{#await images}
		<p class="min-h-[600px] text-4xl text-white flex items-center">loading...</p>
	{:then Images}
		{#each Images as pic, i (pic)}
			{#if i === 0}
				<div class="large-slider-image-container">
					<img
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
						on:mousedown={() => {
							return (Images = [...Images.splice(i), ...Images]);
						}}
						src={pic}
						alt=""
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
