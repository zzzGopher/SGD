<script>
	import image1 from '$lib/assets/small-house.jpg';
	import rectangleBG from '$lib/assets/Rectangle59.svg';
	import ArrowIcon from '$lib/assets/arrow.svelte';
	import ArrowIcon2 from '$lib/assets/arrow2.svelte';
	import PhoneIcon from '$lib/assets/Phone.svelte';
</script>

<section class="relative h-full">
	<div class="flex gap-8 flex-col items-center justify-center w-full py-8">
		<h1 class="text-C2xl font-bold text-white">Our Gallery</h1>

		<p class=" text-accent font-bold text-center">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas assumenda maiores enim
			consequuntur id sit. Vero quam maxime reprehenderit adipisci, vel itaque in sapiente non.
			Dolore quos nemo vel ab!
		</p>
		<div class="flex justify-center gap-10 h-20 w-full">
			<ArrowIcon2 height={'fill'} />
			<ArrowIcon height={'fill'} />
		</div>

		<img class="w-full object-contain " src={image1} alt="" />

		<h2 class="text-white text-Cbase font-normal">Door-Type : steel on steel</h2>
		<p class="text-white text-Cxs">Avaiable Colors</p>
		<ul class="flex gap-4">
			<li class="bg-neutral-600 w-10 h-10 block" />
			<li class="bg-orange-900 w-10 h-10 block" />
			<li class="bg-zinc-500 w-10 h-10 block" />
			<li class="bg-white w-10 h-10 block" />
		</ul>
		<button class="text-accent flex w-full items-center justify-center text-Cxs font-black"
			><PhoneIcon height={20} width={20} /> Call For Pricing & Availability</button
		>
	</div>
	<img class="absolute h-auto bottom-0 -z-10 right-0" src={rectangleBG} alt="" />
</section>

<style>
</style>
