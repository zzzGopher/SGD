<script lang="ts">
	import QuoteBox from './QuoteBox.svelte';
	import LeftArrowButton from './Left-Arrow-Button.svelte';
	const size = {
		height: 32,
		width: 32
	};
</script>

<QuoteBox>
	<button
		class="bg-black absolute bottom-0 right-0 w-40 h-12 flex p-4 gap-4 justify-start items-center lg:rounded-br-3xl font-bold"
		>Call Now!<LeftArrowButton {size} color={'white'} /></button
	>
	<div class="Quote-Box-Parent invisible lg:visible" />
</QuoteBox>

<style>
	.Quote-Box-Parent::after {
		content: '`';
		@apply w-screen right-0 h-56 -z-10 absolute bg-primary text-primary rounded-br-3xl rounded-tr-3xl;
	}
</style>
