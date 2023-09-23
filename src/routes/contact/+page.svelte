<script lang="ts">
	import Form from './components/Form.svelte';
	import Map from './components/Map.svelte';
	import MessageModal from './components/MessageModal.svelte';
</script>

<svelte:head>
	<title>Contact</title>
	<meta
		name="description"
		content="To get in touch with us, you can either call or email us. We'll promptly provide you with free quotes and estimates. Our skilled technicians will address any concerns you may have and offer you comprehensive solutions."
	/>
</svelte:head>

<div class="contact-wrapper md:mt-20 mt-10 w-screen min-h-screen grid">
	<div class="contact-form-container grid w-screen gap-4 grid-flow-row md:grid-flow-col">
		<div
			class="form-container relative md:rounded-r-lg flex items-start justify-center md:justify-end md:pr-12 w-full h-min md:h-full p-4 py-20"
		>
			<MessageModal />
			<Form />
		</div>
		<div class="information-map-container w-full h-full p-4 py-10 text-center md:text-left">
			<h2 class="door-info text-C2xl text-white font-custom">Get In Touch</h2>
			<br />
			<p class="door-info-paragraph text-accent font-custom text-Cbase font-bold">
				To get in touch with us, you can either call or email us. We'll promptly provide you with
				free quotes and estimates. Our skilled technicians will address any concerns you may have
				and offer you comprehensive solutions.
			</p>
			<br />
			<Map />
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	.form-container {
		background-color: rgba(0, 0, 0, 0.25);
	}
</style>
