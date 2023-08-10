<script lang="ts">
	export let selected: number | string;
	export let slideFunction: any;
	export let text: any;
</script>

<button
	id={selected}
	on:click={slideFunction}
	class="hover:text-primary transition-all ease-in-out underline">{text}</button
>

<style>
	.selected {
		@apply text-primary;
	}
</style>
