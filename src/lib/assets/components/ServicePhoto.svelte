<script lang="ts">
	import ServiceSvg from './ServiceSvg.svelte';
</script>

<div
	class="services-container-anchor inline-block lg:mt-28 mt-10 h-56 sm:h-[290px] md:h-[340px] lg:h-[400px] xl:h-[500px] 2xl:h-[800px] relative w-screen"
>
	<div class="absolute right-0 h-full">
		<div class="relative w-full h-full flex items-center justify-center">
			<ServiceSvg />
			<img
				class="h-full lg:w-full inline-block house-image-main rounded-tl-3xl"
				src="/main-house-photo.jpg"
				alt=""
			/>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
