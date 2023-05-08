<script lang="ts">
	import Form from './components/Form.svelte';
	import Map from './components/Map.svelte';
</script>

<div class="contact-wrapper mt-20 w-screen min-h-screen grid">
	<div class="contact-form-container grid w-screen gap-4 grid-flow-row md:grid-flow-col">
		<div
			class="form-container rounded-r-lg flex items-start justify-center md:justify-end md:pr-12 w-full h-min md:h-full p-4 py-20"
		>
			<Form />
		</div>
		<div class="information-map-container w-full h-full p-4 py-20 text-center md:text-left">
			<h1 class="door-info text-C2xl text-white font-custom">Info About Door</h1>
			<br />
			<p class="door-info-paragraph text-accent font-custom text-Cbase font-bold">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error minus quod, atque unde
				earum, iure, officia pariatur a molestias necessitatibus cupiditate veritatis enim quam odit
				accusamus? Quia, dolorum fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Perspiciatis vitae sed magnam eos esse sequi veniam ipsum temporibus. Rerum, quos beatae
				sequi commodi voluptas repellendus reiciendis fugiat quasi earum exercitationem!
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
