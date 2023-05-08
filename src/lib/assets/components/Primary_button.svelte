<script lang="ts">
	export let text: string = 'default';
	export let radius: string = 'sm';
	export let textSize: string = 'Cxs';
	export let width: number | string = 'auto';
</script>

<button
	class="bg-primary w-{width} p-2 rounded-{radius} text-{textSize} hover:bg-sky-600 transition-all ease-in-out text-white"
	>{text}</button
>
