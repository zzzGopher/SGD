<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import Distributor from '../lib/assets/components/DistributorsBanner.svelte';
	import Testimonials from '../lib/assets/components/Testimonials.svelte';

	const REVIEW_NUMBER: number = 0;
	let el: any;

	function numberCounter(this: any, element: any, speed: number): void {
		this.element = element;
		this.speed = speed;

		this.prom = () => new Promise((res) => setTimeout(res, speed));

		this.runCount = async function runCount() {
			for (let i = 0; i <= 84; i++) {
				element.textContent = i;
				await this.prom(this.speed);
			}
		};
	}

	onMount(() => {
		const newCounter = new (numberCounter as any)(el, 50);
		newCounter.runCount();
	});
</script>

<!--Oklahoma Box-->
<div class="absolute top-64 w-0 left-0">
	<div
		class="hidden relative 2xl:w-20 2xl:h-[22em] sm:flex flex-col justify-center items-center w-12 h-40  md:w-16 md:h-72 bg-primary"
	>
		<span class="uppercase 2xl:text-C2xl md:text-C2xl text-Cmd rotate-90 font-thin">Oklahoma</span>
	</div>
</div>
<!--Oklahoma Box End-->
<section class="m-auto min-h-min sm:min-h-screen max-w-7xl  py-8 sm:my-20 md:my-40 wrapper">
	<!--Vector mid-->
	<div class="hidden -z-10 opacity-50 2xl:block top-0 left-[50%] fixed w-auto h-auto">
		<img class="h-[800px]" src="vector 3.svg" alt="" />
	</div>
	<!--Vector mid-->
	<!--Vector first-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 left-[10%] fixed w-auto h-auto">
		<img class="h-[400px]" src="vector 3.svg" alt="" />
	</div>
	<!--Vector first-->
	<!--Vector Second-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 right-[30%] fixed w-auto h-auto">
		<img class="h-[400px]" src="vector 3.svg" alt="" />
	</div>
	<!--Vector Second-->
	<!--Vector 4th-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 left-[30%] absolute w-auto h-auto">
		<img class="h-[600px]" src="vector 3.svg" alt="" />
	</div>
	<!--Vector 4th-->
	<!--Vector 5th-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 right-[10%] absolute w-auto h-auto">
		<img class="h-[600px]" src="vector 3.svg" alt="" />
	</div>
	<!--Vector 5th-->
	<div class="flex  relative flex-col sm:gap-4 px-2 items-end sm:items-center justify-center  ">
		<h1
			class="text-white relative text-C5xl text-center leading-[1.1] sm:text-C2xl sm:w-max font-bold "
		>
			Serving All Of Green Country
		</h1>
		<h2
			class="text-Cxs sm:text-Cbase pt-4 sm:pt-0 text-center font-custom2 font-bold text-accent max-w-prose"
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, ac at faucibus in tellus
			egestas tincidunt gravida ultrices.
		</h2>

		<button
			class="hidden sm:flex h-11 bg-primary rounded w-32 items-center justify-center text-white font-medium text-Cmd"
			>Call Us!</button
		>
	</div>

	<div class="flex sm:hidden relative sm:h-min justify-center px-8 sm:items-center">
		<button class="h-11 sm:hidden text-Cmd text-white font-medium bg-primary rounded w-32"
			><a href="/contact">Call Us</a></button
		>

		<!--Buttton  -->
		<div class="absolute right-0 sm:top-[-15rem]  top-[-23px]  self-start w-20 h-20 sm:w-32">
			<div class="flex  items-center flex-col ">
				<div class="reviews sm:text-Cbase text-smallest uppercase text-primary font-bold">
					reviews
				</div>
				<div
					class="flex sm:h-28 pt-2 flex-col items-center  justify-center bg-accent rounded w-full h-full"
				>
					<Icon class="sm:h-10" icon="ant-design:star-filled" height={34} color="white" />
					<div
						bind:this={el}
						class="text-Cbase text-white font-extrabold z-[5] select-none transition-colors duration-100 ease-in-ot"
					>
						{REVIEW_NUMBER}
					</div>
				</div>
			</div>
		</div>
		<!--Buttton End -->
	</div>
	<div
		class="grid sm:h-[500px] sm:items-end sm:justify-items-center sm:grid-rows-1 relative grid-flow-row sm:grid-cols-3 sm:pt-0  gap-4 text-white"
	>
		<h2
			class="sm:hidden sm:col-span-1 sm:z-10 sm:items-center sm:justify-center sm:bg-primary sm:h-12 sm:w-32 sm:rounded text-center  font-light text-Cxl sm:text-Cbase sm:col-start-2 sm:row-start-1 col-span-2"
		>
			Gallery
		</h2>

		<p
			class="w-full col-span-2 text-center font-light text-sm sm:hidden sm:text-Csm place-self-center "
		>
			Lorem ipsum dolor dawdwa dwa sit amet consectetur adipisicing elit. Necessitatibus quas
			aliquam maxime Necessitatibus quas aliquam maxime
		</p>

		<div
			class="flex h-72 w-full p-4 sm:p-0 sm:col-span-1 col-span-2 sm:col-start-2 sm:row-start-1 relative sm:h-full sm:w-full flex-col justify-end items-center"
		>
			<div class="hidden sm:flex justify-center w-full  h-10">
				<button
					class="hidden sm:block bg-primary text-Csm w-28 justify-self-center h-10 rounded  absolute mt-5 "
					>Gallery</button
				>
			</div>
			<img
				class="object-cover rounded-md  sm:rounded-none sm:col-start-2 sm:row-start-1 justify-self-end sm:min-h-[400px] w-full h-full sm:h-picW sm:w-picW"
				src="neighborhood_door.jpg"
				alt=""
			/>
		</div>

		<h2
			class="sm:hidden float-right z-10 font-light text-Cxl sm:col-span-1 col-span-2 text-center sm:col-start-1 sm:row-start-1"
		>
			About Us
		</h2>
		<p
			class="w-full place-self-center text-center col-span-2 sm:hidden font-light text-sm sm:text-Csm"
		>
			Lorem ipsum dolor dawdwa dwa sit amet consectetur adipisicing elit. Necessitatibus quas
			aliquam maxime Necessitatibus quas aliquam maxime
		</p>

		<div
			class="flex h-72 relative p-4 sm:p-0 sm:col-span-1 col-span-2 sm:h-full sm:w-full flex-col justify-end items-center"
		>
			<div class="hidden z-10 sm:flex justify-center w-full  h-10">
				<button
					class="hidden sm:block bg-primary text-Csm w-28 justify-self-center h-10 rounded  absolute mt-5 "
					>About Us</button
				>
			</div>

			<img
				class="w-full h-full relative sm:rounded-none rounded-md picCenter sm:col-start-1 sm:row-start-1  sm:w-picW sm:object-bottom sm:h-3/4  object-cover "
				src="door1.jpg"
				alt=""
			/>
		</div>

		<h2
			class=" sm:items-center sm:justify-center sm:text-Csm sm:bg-primary sm:rounded sm:h-10 sm:w-28 float-right  font-light text-Cxl sm:col-span-1 z-10 col-span-2 text-center sm:col-start-3 sm:hidden  sm:row-start-1 "
		>
			Services
		</h2>

		<p
			class="w-full place-self-center col-span-2 text-center pl-2 sm:hidden font-light text-sm sm:text-Csm "
		>
			Lorem ipsum dolor dawdwa dwa sit amet consectetur adipisicing elit. Necessitatibus quas
			aliquam maxime Necessitatibus quas aliquam maxime
		</p>
		<div
			class="flex h-72 sm:p-0 p-4 col-span-2 sm:col-span-1 relative sm:h-full sm:w-full flex-col justify-end items-center"
		>
			<div class="hidden z-10 sm:flex justify-center w-full  h-10">
				<button
					class="hidden sm:block bg-primary text-Csm w-28 justify-self-center h-10 rounded  absolute mt-5 "
					>Services</button
				>
			</div>
			<img
				class=" relative rounded-md sm:rounded-none h-full object-cover sm:self-end sm:col-start-3 sm:row-start-1  justify-self-center w-full sm:h-3/4  sm:w-picW"
				src="local_beach_door.jpg"
				alt=""
			/>
		</div>
	</div>
	<Distributor />
	<Testimonials />
</section>

<!--  

	LARGE SCREEN SECTION!

  -->

<!--  

	END OF LARGE SCREEN SECTION!

  -->
<style>
	.picCenter {
		object-position: 0 70%;
	}
</style>
