<script lang="ts">
	import LeftArrowIcon from './LeftArrowIcon.svelte';
	import RightArrowIcon from './RightArrowIcon.svelte';
	import type { svg_size } from './svg_size';
	import { alterable, doorOptions, images, currentIndex } from '../../../Stores/ImageStore';

	export let data: any;

	console.log(data);

	$: $alterable = data[$doorOptions].fields[$doorOptions];

	$: $images = $alterable.map((img: any) => img.fields.file?.url);

	$: console.log($images);

	let initialPos = 0,
		prevTranslate = 0,
		currentTranslate = 0,
		isMoving = false,
		animationID: number,
		grab = true,
		grabbing = false,
		picWidth = 0,
		currentElement;

	const stopWeird = (e: any) => e.preventDefault();

	const initialized = (e: any) => {
		return () => {
			e.preventDefault();
			window.oncontextmenu = (e: any) => {
				e.preventDefault();
				e.stopPropagation();
			};

			picWidth = e.target.getBoundingClientRect().width;
			grab = !grab;
			grabbing = !grabbing;

			isMoving = !isMoving;
			initialPos = currentPositionX(e);

			animationID = requestAnimationFrame(animation);
		};
	};

	const moving = (e: any) => {
		if (isMoving) {
			const currentPos = e.clientX;

			currentTranslate = prevTranslate + currentPos - initialPos;
		}
	};

	const concluded = (e: any) => {
		e.preventDefault();
		cancelAnimationFrame(animationID);

		isMoving = !isMoving;
		grab = !grab;
		grabbing = !grabbing;

		const movedBy: number = currentTranslate - prevTranslate;

		if (movedBy < -100 && $currentIndex < $images.length - 1) $currentIndex += 1;

		if (movedBy > 100 && $currentIndex > 0) $currentIndex -= 1;

		setPositionByIndex();
	};

	const currentPositionX = (e: any) => {
		isMoving = true;

		return (initialPos = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
	};

	function animation() {
		setSliderPos();

		if (isMoving) {
			requestAnimationFrame(animation);
		}
	}

	function setPositionByIndex() {
		currentTranslate = $currentIndex * -picWidth;
		prevTranslate = currentTranslate;
		setSliderPos();
	}

	const setSliderPos = () => {
		$images.forEach((sl: any) => {
			sl.style.transform = `translateX(${currentTranslate}px)`;
		});
	};

	const svg: svg_size = {
		height: 45,
		width: 45
	};

	const handleButtons = (direction: any) => {
		currentElement = $images[$currentIndex];
		const slideWidth = currentElement.getBoundingClientRect().width;
		let newTranslate = $currentIndex * -slideWidth;
		prevTranslate = newTranslate;
		const numSlides = $images.length;

		if (direction === 'left' && $currentIndex > 0) {
			$currentIndex--;
		} else if (direction === 'right' && $currentIndex < numSlides - 1) {
			$currentIndex++;
		}

		$images.forEach((el: any) => {
			el.style.transform = `translateX(${$currentIndex * -slideWidth}px)`;
		});
	};
</script>

<!-- markup (zero or more items) goes here -->

<div class="flex md:hidden items-center relative justify-center w-full">
	<LeftArrowIcon on:click={() => handleButtons('left')} size={svg} color={'#ffff'} />
	<ul class="slider-container" class:grabbing class:grab on:drag={stopWeird}>
		<li class="slide rounded-xl">
			{#await $images}
				<p class="min-h-[600px] w-full text-4xl text-white flex justify-center items-center">
					loading...
				</p>
			{:then Images}
				{#each Images as door, i (door)}
					{#key Images}
						<img
							src={door}
							alt=""
							class="slider-images max-h-[450px] min-h-[450px] sm:h-[950px] touch-pan-x"
							bind:this={door}
							on:mousemove={moving}
							on:mouseup={concluded}
							on:mousedown={(e) => initialized(e)()}
						/>
					{/key}
				{/each}
			{/await}
		</li>
	</ul>
	<RightArrowIcon on:click={() => handleButtons('right')} size={svg} color={'#ffff'} />
</div>

<!-- </ul> -->
<style>
	* {
		box-sizing: border-box;
	}
	.slider-images {
		@apply relative rounded-xl min-w-[100%] w-[full] object-cover;
		transform: translateX(0);
		will-change: transform;
		scrollbar-width: none;
		transition: transform 0.4s ease-out;
		user-select: none;
	}

	.slider-container {
		@apply h-full m-auto w-full  inline-flex items-center justify-center;
	}
	.slide {
		@apply items-center h-full w-full flex-row inline-flex relative overflow-hidden m-auto;
	}
	.grab {
		cursor: grab;
	}
	.grabbing {
		cursor: grabbing;
	}
</style>
