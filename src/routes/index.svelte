<script type="ts">
	import door1 from '$lib/assets/door1.jpg';
	import door2 from '$lib/assets/local_beach_door.jpg';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	const REVIEW_NUMBER: number = 0;
	let el: any;

	function numberCounter(element: any, speed: number) {
		this.element = element;
		this.speed = speed;

		this.prom = (ms) => new Promise((res) => setTimeout(res, speed));

		this.runCount = async function runCount() {
			for (let i = 0; i <= 77; i++) {
				element.textContent = i;
				await this.prom(this.speed);
			}
		};
	}

	onMount(() => {
		const newCounter = new numberCounter(el, 50);
		newCounter.runCount();
	});
</script>

<section class="m-auto max-w-7xl sm:py-[150px] py-8 wrapper">
	<div class="flex px-2 sm:justify-center justify-start ">
		<h1
			class="text-white relative text-center leading-[1.1] text-medium sm:text-medium sm:w-max font-bold "
		>
			Serving All Of Green Country
		</h1>
	</div>

	<div class="flex relative justify-center px-8 items-center">
		<button class="h-11 text-small text-white font-medium bg-primary rounded w-32"
			><a href="/contact">Call Us</a></button
		>

		<!--Buttton  -->
		<div class="absolute right-0 sm:top-[-24px]  top-[-23px]  self-start w-20 h-20 sm:w-32">
			<div class="flex  items-center flex-col ">
				<div class="reviews sm:text-small  text-smallest uppercase text-primary font-bold">
					reviews
				</div>
				<div
					class="flex pt-2 flex-col items-center  justify-center bg-accent rounded w-full h-full"
				>
					<Icon icon="ant-design:star-filled" height={34} color="white" />
					<div
						bind:this={el}
						class="text-medium_small text-white font-extrabold z-[5] select-none transition-colors duration-100 ease-in-ot"
					>
						{REVIEW_NUMBER}
					</div>
				</div>
			</div>
		</div>
		<!--Buttton End -->
	</div>
	<div class="grid relative grid-cols-2  gap-4 text-white">
		<h2 class=" text-center font-light text-medium col-span-2">View Our Work</h2>
		<p class="w-full font-light text-super_small pl-2 text-right">
			Lorem ipsum dolor dawdwa dwa sit amet consectetur adipisicing elit. Necessitatibus quas
			aliquam maxime Necessitatibus quas aliquam maxime
		</p>
		<img class="object-cover h-56 w-full" src="src/lib/assets/door1.jpg" alt="" />

		<h2 class=" float-right font-light text-medium col-span-2 text-center">About Us</h2>

		<img class=" h-56 object-cover w-full" src="src/lib/assets/local_beach_door.jpg" alt="" />
		<p class="w-full pr-2 font-light text-super_small text-left">
			Lorem ipsum dolor dawdwa dwa sit amet consectetur adipisicing elit. Necessitatibus quas
			aliquam maxime Necessitatibus quas aliquam maxime
		</p>

		<h2 class=" float-right font-light text-medium col-span-2 text-center">Services</h2>

		<p class="w-full pl-2 font-light text-super_small text-right">
			Lorem ipsum dolor dawdwa dwa sit amet consectetur adipisicing elit. Necessitatibus quas
			aliquam maxime Necessitatibus quas aliquam maxime
		</p>

		<img class="object-cover h-56 w-full" src="/src/lib/assets/neighborhood_door.jpg" alt="" />
	</div>
</section>

<!--  

	LARGE SCREEN SECTION!

  -->

<!--  

	END OF LARGE SCREEN SECTION!

  -->
<style>
</style>
