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

	/* TODO fix shimmer effect on call now button and make sure all call nows auto dial phone number */

	button::after{
			position: absolute;
			z-index: 99;
			content: '-';
			color: red;
			background-color: red;
			height: 100%;
			width: 4%;
			left: 0;
			opacity: 0;
	}

 button:hover:after{
      animation: shimmer linear 3s;
			transition: ease-in-out;

  }

	
	@keyframes shimmer {
			0% {color: #ffffff;background-color: #fefefe;opacity: 10%; translate: 10% }
			25% {color: #fcfcfc;background-color: #fcfcfc;opacity: 30%; translate: 25%  }
			50% {color: #ffffff;background-color: #ffffff;opacity: 55%; translate: 50%  }
			75% {color: #ffffff;background-color: #ffffff; opacity: 75%; translate: 75% }
			100% {color: #ffffff;background-color: #ffffff; opacity: 100%; translate: 100%}

  }

</style>
