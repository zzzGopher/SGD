<script lang="ts">
	export let href: string = '/';
	export let text: string = 'default';
	export let textSize: string = 'Csm';
	export let padding: number = 2;
</script>

<a
	class="anchor_style rounded text-{textSize} p-{padding} hidden w-28 h-10 sm:block mt-5 z-50 bg-primary hover:bg-sky-600 transition-all ease-in-out"
	{href}>{text}</a
>

<style>
	.anchor_style {
		@apply flex items-center justify-center;
	}
</style>
