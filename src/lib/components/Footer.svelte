<script>
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-16 flex-col gap-2 bg-footer_color justify-center items-center">
	<div class="flex w-full flex-row items-center justify-center gap-8 lg:gap-20">
		<a
			href="https://www.facebook.com/SapulpaGarageDoors"
			class="hover:text-black w-min text-gray-500"
		>
			<Icon
				class="hover:scale-110"
				alt="link to facebook"
				color="black"
				icon="akar-icons:facebook-fill"
				width={28}
			/>
		</a>

		<a class="sm:text-xl text-black hover:text-black" href="/">Developed by &#169 Frogip</a>

		<a
			href="https://www.yelp.com/biz/sapulpa-garage-doors-sapulpa"
			class="text-black hover_footer text-xs sm:text-lg"
		>
			<img
				src="Yelp.png"
				alt="link to yelp page"
				height="80px"
				width="80px"
				class="w-14 sm:w-[80px] hover:scale-110"
			/></a
		>
	</div>
</div>

<style>
</style>
