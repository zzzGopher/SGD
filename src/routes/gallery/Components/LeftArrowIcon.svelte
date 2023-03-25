<script lang="ts">
	import type { svg_size } from './svg_size';

	export let color: string;
	export let size: svg_size;
</script>

<button on:click class="absolute z-10 left-0">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={`${size.width}px`}
		height={`${size.height}px`}
		fill={color}
		viewBox="0 0 256 256"
		><path
			d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM149.66,93.66,115.31,128l34.35,34.34a8,8,0,0,1-11.32,11.32l-40-40a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,11.32Z"
		/></svg
	></button
>

<style>
	button::after {
		content: '_';
		background-color: rgb(39, 39, 39);
		width: 75%;
		height: 75%;
		z-index: -1;
		border-radius: 100%;
		color: transparent;
		position: absolute;
		inset: 0.4em;
	}
	button:hover::after {
		background-color: rgb(186, 186, 186);
		transition: all ease-in-out 0.3s;
	}
</style>
