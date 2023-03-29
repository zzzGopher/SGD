<script lang="ts">
	import type { svg_size } from '../svg_size';
	export let size: svg_size;
	export let color: string;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size.width}
	height={size.height}
	fill={color}
	viewBox="0 0 256 256"
	><path
		d="M213.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35A8,8,0,0,1,213.66,122.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,116.69,53.66,42.34A8,8,0,0,0,42.34,53.66Z"
	/></svg
>

<style>
</style>
