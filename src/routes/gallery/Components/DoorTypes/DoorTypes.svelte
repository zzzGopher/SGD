<script lang="ts">
	import { doorColors } from '../../../../Stores/ImageStore';

	let dcArr = [];
	let i = 0;
	for (let dc in $doorColors) {
		dcArr[i] = dc;
		i++;
	}
</script>

<div class="door-types-container justify-between gap-4 flex flex-row w-full md:w-auto md:gap-20">
	<h2 class="flex flex-col w-auto h-full items-start justify-center">
		<span class="available text-Clg md:text-Cbase text-accent font-extrabold text-left"
			>Available</span
		>
		<span
			class="colors-h4 text-left sm:leading-[4rem] sm:text-C4xl text-C6xl md:text-Cxl leading-10 text-white font-extrabold"
		>
			Colors
		</span>
	</h2>
	<div class="color-box flex flex-row w-auto gap-2 h-full items-center">
		{#await dcArr}
			<p class="text-white">loading...</p>
		{:then Door}
			{#each Door as DC}
				<span style="background-color:{DC}" />
			{/each}
		{/await}
	</div>
</div>

<style>
	/* .color-box span::after {
		content: '___';
		width: 60px;
		height: 60px;
		background-color: red;
		border-radius: 50px;
		color: transparent;
		z-index: 20;
	} */
	.available {
		letter-spacing: 0.15em;
	}
	.colors-h4 {
		letter-spacing: 0.15em;
	}

	.color-box span {
		border-radius: 50%;
		width: 30px;
		height: 30px;
	}
</style>
