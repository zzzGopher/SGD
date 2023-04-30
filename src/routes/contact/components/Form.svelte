<script>
	// your script goes here
</script>

<form action="submit">
	<div class="flex flex-col w-min gap-10 md:mt-40 items-start">
		<h1 class="text-Clg text-white text-start w-full uppercase">Contact Us</h1>
		<input class="w-2/3" type="text" placeholder="First Name" />
		<input type="text" placeholder="Last Name" />
		<input type="text" placeholder="Reason for Contacting" />
		<input type="text" placeholder="Phone Number" />
	</div>
</form>

<!-- markup (zero or more items) goes here -->

<style>
	input {
		@apply rounded-lg p-2;
		@media screen and (width: 768px) {
			height: 40px;
		}
	}
</style>
