<script lang="ts">
</script>

<div
	class="w-full relative lg:w-2/3 bg-primary text-white lg:rounded-tr-3xl lg:rounded-br-3xl h-56 flex flex-col justify-evenly lg:flex-row px-4"
>
	<div class="flex flex-col justify-center lg:flex-row h-auto">
		<h4 class="lg:self-center text-C2xl font-bold leading-tight lg:w-64">Free To Quote</h4>
		<p
			class="lg:self-center lg:leading-loose lg:w-2/3 w-full lg:text-Cbase sm:text-Csm pb-8 lg:pb-0"
		>
			Just Give us A call and one of our technicians will arrive and give you a quote free of
			charge!
		</p>
		<slot>slot for button</slot>
	</div>
</div>

<style>
	h3 {
		text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.385);
	}
	div p {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.385);
	}
</style>
