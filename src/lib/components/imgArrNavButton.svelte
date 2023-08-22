<script lang="ts">
	export let id: string;
	export let slideFunction: any;
	export let text: any;
	export let selected: boolean;
</script>

<button
	{id}
	class:selected
	on:click={slideFunction}
	class="hover:text-primary transition-all ease-in-out underline">{text}</button
>

<style>
	.selected {
		@apply text-primary;
	}
</style>
