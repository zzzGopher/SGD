<script>
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-24 flex-col gap-2 py-8 bg-footer_color justify-center items-center">
	<a href="/" class="hover:text-black text-gray-500 w-0">
		<Icon color="black" icon="akar-icons:facebook-fill" width={28} />
	</a>

	<div class="flex w-full flex-row items-center justify-around">
		<a href="/" class="text-black hover_footer text-xs sm:text-lg">Facebook</a>

		<a class="sm:text-2xl text-black hover:text-black" href="/">Developed by &#169 Frogip</a>

		<a href="/" class="text-black hover_footer text-xs sm:text-lg">Yelp</a>
	</div>
</div>

<style>
	.hover_footer:hover {
		color: black;
		transform: scale(1.2);
	}
</style>
