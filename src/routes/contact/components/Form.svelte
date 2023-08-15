<script lang="ts">
	import Button from '$lib/components/Primary_button.svelte';
	import emailjs from '@emailjs/browser';
	import myRedirect from '../../../lib/utils/myRedirect';

	let success = false;

	function sendEmail(e: any) {
		try {
			emailjs
				.sendForm('service_taqk7tr', 'template_vod9j69', e.target, 'XhZg51U-UDQ8Vdv0u')
				.then((res) => {
					success = true;
					console.log('SUCCESS:', res.text);
				})
				.then(() => myRedirect(4000));
		} catch (e: any) {
			success = false;
			console.log('Email Failed:', e.text);
		}
	}

	//TODO adjust modal width and position with shared state presumably.
</script>

{#if success}
	<div class="modal -mt-14 mr-14 sm:m-auto text-primary text-center text-Clg absolute">
		Message Sent
	</div>
{/if}
<form on:submit|preventDefault={sendEmail}>
	<div class="flex flex-col whitespace-nowrap w-min gap-10 items-start">
		<h1 class="text-Clg text-white text-start w-full md:mt-28 uppercase">Contact Us</h1>
		<input
			required
			name="FirstName"
			class="custom_outline w-2/3"
			type="text"
			placeholder="First Name"
		/>
		<input
			required
			name="LastName"
			class="custom_outline w-2/3"
			type="text"
			placeholder="Last Name"
		/>
		<textarea
			required
			name="message"
			class="custom_outline h-28"
			placeholder="Reason for Contacting"
		/>
		<input
			required
			name="phone"
			class="custom_outline w-3/5"
			type="text"
			placeholder="Phone Number"
		/>
		<Button type="submit" value="Submit" width="28" text="Submit" radius="lg" />
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
