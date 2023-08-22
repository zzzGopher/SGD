<script lang="ts">
	import { messageSent } from '../../../Stores/ImageStore';
	import { slide } from 'svelte/transition';
</script>

{#if $messageSent}
	<div
		class="w-full md:left-0 m-auto z-[100] top-0 flex items-center justify-center md:justify-end h-min absolute"
	>
		<div
			transition:slide
			class="modal w-min p-2 h-min bg-black bg-opacity-40 text-primary text-center whitespace-nowrap text-Csm lg:text-Cbase 2xl:text-Clg md:rounded-tr-lg relative"
		>
			Message Sent! Redirecting...
		</div>
	</div>
{/if}

<style>
</style>
