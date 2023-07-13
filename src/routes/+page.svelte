<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import Distributor from '../lib/assets/components/DistributorsBanner.svelte';
	import Testimonials from '../lib/assets/components/Testimonials.svelte';
	import Button from '../lib/assets/components/Primary_button.svelte';
	import Anchor from '../lib/assets/components/Anchor.svelte';
	import FreeToQuote from '$lib/assets/components/FreeToQuote.svelte';
	import ServicePhoto from '$lib/assets/components/ServicePhoto.svelte';

	const REVIEW_NUMBER = 0;
	let el: any;

	function numberCounter(this: any, element: any, speed: number): void {
		this.element = element;
		this.speed = speed;

		this.prom = () => new Promise((res) => setTimeout(res, speed));

		this.runCount = async function runCount() {
			for (let i = 0; i <= 88; i++) {
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


<svelte:head>
    <title>Home</title>
    <meta name="description" content="The Tulsa and Sapulpa Garage Doors company offers garage door installations and spring repairs to various areas in and around Tulsa, Oklahoma, and Sapulpa, Oklahoma. Our services extend to local areas such as Mannford, Mounds, Jenks, Sand Springs, Bixby, Owasso, Beggs, Okmulgee, Broken Arrow, Jennings, and many others."/>
</svelte:head>

<!--Oklahoma Box-->
<div class="absolute invisible 2xl:visible top-0 w-0 left-0">
	<div
		class="hidden relative 2xl:w-20 2xl:h-[22em] sm:flex flex-col justify-center items-center w-12 h-40 md:w-16 md:h-[88mm] bg-primary"
	>
		<span class="uppercase 2xl:text-C2xl md:text-C2xl text-Cmd rotate-90 font-thin text-white"
			>Oklahoma</span
		>
	</div>
</div>

<!--Middle svg Line-->
<div class="absolute flex items-center justify-center w-full top-0 m-auto">
	<div class="hidden -z-10 opacity-50 2xl:block top-0 w-auto relative h-auto m-auto">
		<img class="h-[600px]" src="Vector 3.svg" alt="" />
	</div>
</div>

<!--Oklahoma Box End-->
<section class="m-auto min-h-min sm:min-h-screen max-w-7xl pt-8 sm:mt-20 md:mt-40 wrapper">
	<!--Vector mid-->

	<!--Vector mid-->
	<!--Vector first-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 left-[10%] absolute w-auto h-auto">
		<img class="h-[400px]" src="Vector 3.svg" alt="" />
	</div>
	<!--Vector first-->
	<!--Vector Second-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 right-[30%] absolute w-auto h-auto">
		<img class="h-[400px]" src="Vector 3.svg" alt="" />
	</div>
	<!--Vector Second-->
	<!--Vector 4th-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 left-[30%] absolute w-auto h-auto">
		<img class="h-[600px]" src="Vector 3.svg" alt="" />
	</div>
	<!--Vector 4th-->
	<!--Vector 5th-->
	<div class="hidden 2xl:block opacity-50 top-0 -z-10 right-[10%] absolute w-auto h-auto">
		<img class="h-[600px]" src="Vector 3.svg" alt="" />
	</div>
	<!--Vector 5th-->
	<div class="flex relative flex-col sm:gap-4 px-2 items-end sm:items-center justify-center">
		<h1
			class="text-white relative text-C5xl text-center leading-[1.1] sm:text-C2xl sm:w-max font-bold"
		>
			Serving All Of Green Country
		</h1>
		<h2
			class="text-Cxs sm:text-Cbase pt-4 sm:pt-0 text-center font-custom2 font-bold text-accent max-w-prose sm:px-12"
		>
            Rest assured that you will receive fair treatment and get all your questions answered when you request a free estimate from us!
		</h2>

		<Button
			hidden="hidden"
			width="28"
			weight={'bold'}
			text="Call Us!"
			radius="lg"
			textSize="Cbase"
		/>

		<img class="h-20 hidden 2xl:block" src="arrows_down.svg" alt="" />
	</div>

	<div class="flex sm:hidden relative sm:h-min justify-center px-8 sm:items-center">
		<button class="h-11 sm:hidden text-Cmd text-white font-medium bg-primary rounded w-32"
			><a href="/contact">Call Us</a></button
		>

		<!--Button  -->
		<div class="absolute right-0 sm:top-[-15rem] top-[-25px] self-start w-20 h-20 sm:w-32">
			<div class="flex items-center flex-col">
				<div class="reviews sm:text-Cbase text-smallest uppercase text-primary font-bold">
					reviews
				</div>
				<div
					class="flex sm:h-28 pt-2 flex-col items-center justify-center bg-accent rounded w-full h-full"
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
		<!--Button End -->
	</div>
	<div
		class="grid m-auto sm:h-[500px] sm:items-end sm:justify-items-center sm:grid-rows-1 relative grid-flow-row sm:grid-cols-3 sm:pt-0 gap-4 text-white px-2"
	>
		<h2
			class="sm:hidden sm:col-span-1 sm:z-10 sm:items-center sm:justify-center sm:bg-primary sm:h-12 sm:w-32 sm:rounded text-center font-light text-Cxl sm:text-Cbase sm:col-start-2 sm:row-start-1 col-span-2"
		>
			Gallery
		</h2>

		<p
			class="w-full col-span-2 text-center font-light text-sm sm:hidden sm:text-Csm place-self-center"
		>
            Take a look at our gallery featuring a wide variety of door installations and repairs. Our collection includes residential and carriage doors with various styles to choose from. We have popular options for you to explore at your convenience. Thank you for considering us.
		</p>

		<div
			class="flex h-72 w-full p-4 sm:p-0 sm:col-span-1 col-span-2 sm:col-start-2 sm:row-start-1 relative sm:h-full sm:w-full flex-col justify-end items-center"
		>
			<div class="hidden sm:flex justify-center w-full h-10">
				<Anchor href="/gallery" text="Gallery" padding={2} textSize="Csm" />
			</div>
			<img
				class="object-cover rounded-md sm:col-start-2 sm:row-start-1 justify-self-end sm:min-h-[400px] w-full h-full sm:h-picW sm:w-picW"
				src="neighborhood_door.webp"
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
            We are a local, family-owned, and operated garage door company with over 28 years of experience. We offer quality commercial and residential installation and repairs for doors and openers at competitive prices. We take great pride in our work and our customer's satisfaction.
		</p>

		<div
			class="flex h-72 relative p-4 sm:p-0 sm:col-span-1 col-span-2 sm:h-full sm:w-full flex-col justify-end items-center"
		>
			<div class="hidden z-10 sm:flex justify-center w-full h-10">
				<Anchor href="/about" text="About" padding={2} />
			</div>

			<img
				class="w-full h-full relative rounded-md picCenter sm:col-start-1 sm:row-start-1 sm:w-picW sm:object-bottom sm:h-3/4 object-cover"
				src="door1.webp"
				alt=""
			/>
		</div>

		<h2
			class=" sm:items-center sm:justify-center sm:text-Csm sm:bg-primary sm:rounded sm:h-10 sm:w-28 float-right font-light text-Cxl sm:col-span-1 z-10 col-span-2 text-center sm:col-start-3 sm:hidden sm:row-start-1"
		>
			Services
		</h2>

		<p
			class="w-full place-self-center col-span-2 text-center pl-2 sm:hidden font-light text-sm sm:text-Csm"
		>
            Our team specializes in providing a range of services to cater to your garage door needs. From repairing and installing to maintaining, we have got you covered. Additionally, we are adept at replacing and maintaining torsion springs, which is a frequent issue.
		</p>
		<div
			class="flex h-72 sm:p-0 p-4 col-span-2 sm:col-span-1 relative sm:h-full sm:w-full flex-col justify-end items-center"
		>
			<div class="hidden z-10 sm:flex justify-center w-full h-10">
				<Anchor href="/contact" text="Location" padding={2} />
			</div>
			<img
				class="w-full h-full relative rounded-md picCenter sm:col-start-1 sm:row-start-1 sm:w-picW sm:object-bottom sm:h-3/4 object-cover"
				src="local_beach_door.webp"
				alt=""
			/>
		</div>
	</div>
	<Distributor />
	<Testimonials />
	<FreeToQuote />
	<ServicePhoto />
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
