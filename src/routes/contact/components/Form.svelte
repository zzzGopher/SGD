<script lang="ts">
	import Button from '$lib/components/Primary_button.svelte';
</script>

<form action="submit">
	<div class="flex flex-col w-min gap-10 items-start">
		<h1 class=" text-Clg text-white text-start w-full md:mt-28 uppercase">Contact Us</h1>
		<input class="custom_outline w-2/3" type="text" placeholder="First Name" />
		<input class="custom_outline w-2/3" type="text" placeholder="Last Name" />
		<textarea class="custom_outline h-28" placeholder="Reason for Contacting" />
		<input class="custom_outline w-3/5" type="text" placeholder="Phone Number" />
		<Button width="28" text="Submit" radius="lg" />
	</div>
</form>

<!-- markup (zero or more items) goes here -->

<style>
	input,
	textarea {
		@apply rounded-lg p-2;
		@media screen and (width: 768px) {
			height: 40px;
		}
	}
	.custom_outline:focus {
		@apply outline-primary outline;
	}
</style>
