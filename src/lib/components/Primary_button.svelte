<script lang="ts">
	export let text = 'default';
	export let radius = 'sm';
	export let textSize = 'Cxs';
	export let width: number | string = 'auto';
	export let weight = 'default';
	export let hidden = 'visible';
</script>

<button
	class="bg-primary w-{width} {hidden} sm:block font-{weight} p-2 rounded-{radius} text-{textSize} hover:bg-sky-600 transition-all ease-in-out text-white"
	>{text}</button
>
