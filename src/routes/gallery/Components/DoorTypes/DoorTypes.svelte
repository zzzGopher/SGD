<script lang="ts">
	import type { colors as doorColors } from './types';
	export let colors: doorColors;
</script>

<div class="door-types-container justify-between gap-4 flex flex-row w-full md:w-auto md:gap-20">
	<div class="flex flex-col w-auto h-full items-start justify-center">
		<span class="available text-Clg md:text-Cbase text-accent font-extrabold text-left"
			>Available</span
		>
		<h4
			class="colors-h4 text-left sm:leading-[4rem] sm:text-C4xl text-C6xl md:text-Cxl leading-10 text-white font-extrabold"
		>
			Colors
		</h4>
	</div>
	<div class="color-box flex flex-row w-auto gap-2 h-full items-center">
		{#each colors as color, i}<span style="background-color:{`#${color.color}`}" />{/each}
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
