<script lang="ts">
	import QuoteBox from './QuoteBox.svelte';
	import LeftArrowButton from '../assets/Left-Arrow-Button.svelte';
	const size = {
		height: 32,
		width: 32
	};
</script>

<QuoteBox>
	<a
		href="tel:918-752-7705"
		class="bg-black absolute bottom-0 right-0 w-40 h-12 flex p-4 gap-4 justify-start items-center lg:rounded-br-3xl font-bold"
		>Call Now!<LeftArrowButton {size} color={'white'} /></a
	>
	<div class="Quote-Box-Parent invisible lg:visible" />
</QuoteBox>

<style>
	.Quote-Box-Parent::after {
		content: '`';
		@apply w-screen right-0 h-56 -z-10 absolute bg-primary text-primary rounded-br-3xl rounded-tr-3xl;
	}

	/* TODO fix shimmer effect on call now button and make sure all call nows auto dial phone number */
</style>
