<script lang="ts">
	import { onMount } from 'svelte';

	let reactive_img = {
		img1: '/house_image_mobile.webp',
		img2: '/house_image2_mobile.webp',
		img3: '/white_Image_mobile.webp'
	};

	let innerWidth: number;

	onMount(() => {
		if (innerWidth > 476) {
			reactive_img.img1 = '/house_image.webp';
			reactive_img.img2 = '/house_image2.webp';
			reactive_img.img3 = '/white_Image.webp';
		}
	});
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>About</title>
	<meta
		name="description"
		content="We are a local, family-owned, and operated garage door company with over 28 years of experience. We offer quality commercial and residential installation and repairs for doors and openers at competitive prices. We take great pride in our work and our customer's satisfaction."
	/>
</svelte:head>

<div class="grid grid-flow-row justify-items-center">
	<div class="row_2 h-min relative">
		<div class="pic_container relative h-1/2 w-screen">
			<img class="h-96 relative mx-auto w-full object-cover" src={reactive_img.img1} alt="" />
			<h1
				class="max-w-7xl absolute font-bold text-white right-0 pb-2 left-0 top-10 text-C3xl z-10 mx-auto px-8"
			>
				About Us
			</h1>
			<span class="max-w-7xl absolute right-0 left-0 top-32 text-Cxs z-10 mx-auto font-bold px-8"
				>Who We Are</span
			>
		</div>
		<div class="flex relative h-min py-8 text-Cbase leading-8 max-w-7xl mx-auto px-8">
			<p class="h-min text-Csm text-white">
				We are a local, family-owned, and operated garage door company with over 28 years of
				experience. We offer quality commercial and residential installation and repairs for doors
				and openers at competitive prices. We take great pride in our work and our customer's
				satisfaction.
			</p>
		</div>
	</div>
	<div class="row_2 relative">
		<div class="pic_container relative h-40 w-screen">
			<img class="h-40 pic_2 mx-auto w-full object-cover" src={reactive_img.img2} alt="" />
			<h2
				class=" absolute h-auto text-center md:right-0 left-0 top-14 md:top-10 text-Cxl font-bold text-white z-10 mx-auto px-8"
			>
				Our Goals
			</h2>
		</div>
		<div class="flex h-min py-8 text-Cbase leading-8 max-w-7xl mx-auto px-8">
			<p class="h-min text-Csm text-white">
				Our commitment is to provide prompt and reliable assistance to all our valued clients,
				creating a long-term partnership founded on confidence and reliability. Our aim is to meet
				the requirements of each person with the utmost professionalism.
			</p>
		</div>
	</div>
	<div class="row_2 relative">
		<div class="pic_container relative h-40 w-screen">
			<img class="h-40 mx-auto w-full object-cover" src={reactive_img.img3} alt="" />
			<h3
				class="max-w-7xl absolute left-0 right-0 top-14 md:top-10 font-bold text-Cxl z-10 mx-auto px-8"
			>
				Years in Business
			</h3>
		</div>
		<div class="flex h-min py-8 text-Cbase leading-8 max-w-7xl mx-auto px-8">
			<p class="h-min text-Csm text-white">
				Our Garage door business, founded by Justin Smith, has been running successfully for over 30
				years in Sapulpa, Oklahoma. We take immense pride in our work and prioritize building
				long-lasting relationships with our clients. Our commitment to family values is reflected in
				the way we operate and our reputation as leading experts in the field.
			</p>
		</div>
	</div>
</div>

<style>
	.pic_2 {
		object-position: 0 55%;
	}
</style>
