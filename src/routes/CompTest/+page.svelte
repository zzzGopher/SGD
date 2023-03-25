<script lang="ts">
	type ImageType = {
		id: number;
		pic: string;
	};
	const Images: ImageType[] = [
		{ id: 0, pic: 'door1.jpg' },
		{ id: 1, pic: 'local_beach_door.jpg' },
		{ id: 2, pic: 'neighborhood_door.jpg' },
		{ id: 3, pic: 'small-house.jpg' },
		{ id: 4, pic: 'house_image.jpg' }
	];
</script>

<section class="flex flex-col w-full items-center p-4">
	<ul>
		{#each Images as { id, pic }, i (id)}
			<li>
				<img class="h-full" src={pic} alt="" />
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		@apply flex overflow-x-auto gap-6 snap-x snap-mandatory;
	}
	li {
		@apply shrink-0 w-full snap-center;
	}
	li img {
		object-fit: cover;
	}
</style>
