<script lang="ts">
	export let text: string = 'default';
	export let radius: string = 'sm';
	export let textSize: string = 'Cxs';
	export let width: number | string = 'auto';
	export let weight: string = 'default';
	export let hidden: string = 'visible';
</script>

<button
	class="bg-primary w-{width} {hidden} sm:block font-{weight} p-2 rounded-{radius} text-{textSize} hover:bg-sky-600 transition-all ease-in-out text-white"
	>{text}</button
>
