<script lang="ts" context="module">
	const start = false,
		second = false,
		middle = false;

	const testimonials = [
		{
			body: 'Damaged my overhead shop door by accidentally backing into it.  Sapulpa Garage Door quickly replaced it.  Friendly service, fair price, and great work. They clean up the area and haul away the debris.  These are the guys to call.',
			author: {
				name: 'Doug Jones',
				Key: 1,
				handle: 'Doug Jones',
				imagePath: './DougJonesSGD_customer.png'
			}
		},
		{
			body: 'My garage door imploded over the weekend (cable broke, track twisted and pulled out of wall, door was stuck half open, etc.) and I needed help big time.  Instead of automatically calling big company in Tulsa who actually installed my door a few years ago - I tried local Sapulpa Google search and saw Sapulpa Garage Doors with 5 star ratings.  I called first thing Monday morning and they were at my house by lunch time.  Super nice team and they did an outstanding job not only getting my door back operational but took the time to fix all the shortcuts the big Tulsa company did when installing my door including not securing the tracks into solid wood, improper spring tension, and my auto door opener was so out of whack calibration wise I had to unhook it about six months ago and manually open and close my door.  My door is working better now than the day it was originally installed.  Price was totally fair and I would highly recommend calling Sapulpa Garage Doors for your overhead door needs be it service or new door installation.  A+ experience!!',
			author: {
				name: 'quickhay',
				Key: 2,
				handle: 'quickhay',
				imagePath: '/quickhaySGD_customer.png'
			}
		},
		{
			body: 'Came and repaired our door same day that we called and they had great communication about when they would arrive.  Highly recommended.',
			author: {
				name: 'Alex Houdashelt',
				Key: 3,
				handle: 'Alex Houdashelt',
				imagePath: './AlexSGD_customer.png'
			}
		},
		{
			body: 'Justin insalled a new garage door for me today. He was very prompt giving an estimate and installing the new door. his rates are very reasonable. Modifications had to be made for my new door to fit. Justin did a great job and left the area very clean. Thanks Justin for a job well done. I would recommend Sapulpa Garage Door very highly!!',
			author: {
				name: 'Doris Mudgett',
				Key: 4,
				handle: 'Doris Mudgett',
				imagePath: '/Doriss_Mudgett_Customer.jpg'
			}
		},
		{
			body: 'I absolutely love my new garage door and opener. Plus it made my house look so much better. Justin Smith you do a great job!',
			author: {
				name: 'Keri Dunbar',
				Key: 5,
				handle: 'Keri Dunbar',
				imagePath: '/Keri_Dunbar_Customer.jpg'
			}
		}
	];
</script>

<section class="relative" aria-label="reviews">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<h3 class="font-custom2 text-lg font-semibold leading-8 tracking-tight pb-4 text-primary">
				Google Reviews
			</h3>
			<p class="font-custom2 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We have worked with thousands of amazing people
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid grid-flow-row lg:grid-cols-2 lg:justify-center max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
		>
			<div class="-mt-8 sm:-mx-4 sm:text-0" />
			{#each testimonials as testimonial (testimonial.author.Key)}
				<div
					class:start={testimonial.author.Key == 1}
					class:second={testimonial.author.Key == 3}
					class:middle={testimonial.author.Key == 2}
					class="pt-8 sm:inline-block sm:w-full sm:px-4"
				>
					<figure
						class="rounded-2xl h-full flex flex-col justify-center bg-gray-50 p-8 text-sm leading-6 shadow-black shadow-md drop-shadow-sm"
					>
						<blockquote class="text-gray-900">
							<span class="font-custom font-medium text-Cbase">"</span>{testimonial.body}
							<span class="font-custom font-medium text-Cbase">"</span>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src={testimonial.author.imagePath}
								alt=""
							/>
							<div>
								<div class="font-semibold text-gray-900">{testimonial.author.name}</div>
								<div class="text-gray-600">{`@${testimonial.author.handle}`}</div>
							</div>
						</figcaption>
					</figure>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@media screen and (min-width: 1024px) {
		.start {
			grid-row-start: 1;
		}
		.second {
			grid-row-start: 1;
		}
		.middle {
			grid-row-start: 2;
			grid-column-start: 1;
			grid-column-end: 2;
			column-span: 2;
			width: 200%;
		}
	}
</style>
