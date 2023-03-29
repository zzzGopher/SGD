<script lang="ts" context="module">
	const testimonials = [
		{
			body: 'Damaged my overhead shop door by accidentally backing into it.  Sapulpa Garage Door quickly replaced it.  Friendly service, fair price, and great work. They clean up the area and haul away the debris.  These are the guys to call.',
			author: {
				name: 'Doug Jones',
				handle: 'Doug Jones',
				imagePath: 'src/lib/assets/DougJonesSGD_customer.png'
			}
		},
		{
			body: 'My garage door imploded over the weekend (cable broke, track twisted and pulled out of wall, door was stuck half open, etc.) and I needed help big time.  Instead of automatically calling big company in Tulsa who actually installed my door a few years ago - I tried local Sapulpa Google search and saw Sapulpa Garage Doors with 5 star ratings.  I called first thing Monday morning and they were at my house by lunch time.  Super nice team and they did an outstanding job not only getting my door back operational but took the time to fix all the shortcuts the big Tulsa company did when installing my door including not securing the tracks into solid wood, improper spring tension, and my auto door opener was so out of whack calibration wise I had to unhook it about six months ago and manually open and close my door.  My door is working better now than the day it was originally installed.  Price was totally fair and I would highly recommend calling Sapulpa Garage Doors for your overhead door needs be it service or new door installation.  A+ experience!!',
			author: {
				name: 'quickhay',
				handle: 'quickhay',
				imagePath: 'src/lib/assets/quickhaySGD_customer.png'
			}
		},
		{
			body: 'Came and repaired our door same day that we called and they had great communication about when they would arrive.  Highly recommended.',
			author: {
				name: 'Alex Houdashelt',
				handle: 'Alex Houdashelt',
				imagePath: 'src/lib/assets/AlexSGD_customer.png'
			}
		}
	];
</script>

<section>
	<div class="">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-xl text-center">
				<h2 class="font-custom2 text-lg font-semibold leading-8 tracking-tight p-4 text-primary">
					Google Reviews
				</h2>
				<p class="font-custom2 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					We have worked with thousands of amazing people
				</p>
			</div>
			<div class="mx-auto mt-16 grid lg:grid-flow-col max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
				<div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-0 lg:columns-3" />
				{#each testimonials as testimonial (testimonial.author.handle)}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6 ">
							<blockquote class=" text-gray-900">
								<p>
									<span class="font-custom font-medium text-Cbase">"</span>{testimonial.body}<span
										class="font-custom font-medium text-Cbase">"</span
									>
								</p>
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
	</div>
</section>

<style>
	/* your styles go here */
</style>
