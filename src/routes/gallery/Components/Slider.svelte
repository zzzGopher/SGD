<script lang="ts">
	import LeftArrowIcon from './LeftArrowIcon.svelte';
	import RightArrowIcon from './RightArrowIcon.svelte';
	import type { svg_size } from './svg_size';

	export let myImages;

	let initialPos = 0,
		prevTranslate = 0,
		currentTranslate = 0,
		isMoving = false,
		animationID: number,
		slideArr: any[] = [],
		grab = true,
		grabbing = false,
		currentIndex = 0,
		picWidth = 0;

	const stopWeird = (e: any) => e.preventDefault();

	const initialized = (e: any, i: any) => {
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

		if (movedBy < -100 && currentIndex < slideArr.length - 1) currentIndex += 1;

		if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

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
		currentTranslate = currentIndex * -picWidth;
		prevTranslate = currentTranslate;
		setSliderPos();
	}

	const setSliderPos = () => {
		slideArr.forEach((sl) => (sl.style.transform = `translateX(${currentTranslate}px`));
	};

	const svg: svg_size = {
		height: 45,
		width: 45
	};

	const handleButtons = (direction: any) => {
		const currentElement = slideArr[currentIndex];
		const slideWidth = currentElement.getBoundingClientRect().width;
		let newTranslate = currentIndex * -slideWidth;
		prevTranslate = newTranslate;
		const numSlides = slideArr.length;

		if (direction === 'left' && currentIndex > 0) {
			currentIndex--;
		} else if (direction === 'right' && currentIndex < numSlides - 1) {
			currentIndex++;
		}

		slideArr.forEach((el) => (el.style.transform = `translateX(${currentIndex * -slideWidth}px)`));
	};
</script>

<!-- markup (zero or more items) goes here -->

<div class="flex md:hidden items-center relative justify-center w-full">
	<LeftArrowIcon on:click={() => handleButtons('left')} size={svg} color={'#ffff'} />
	<ul class="slider-container" class:grabbing class:grab on:drag={stopWeird}>
		<li class="slide rounded-xl">
			{#await myImages}
				<p class="min-h-[600px] text-4xl text-white flex items-center">loading...</p>
			{:then Images}
				{#each Images as door, i (door)}
					<img
						loading="lazy"
						src={door}
						alt=""
						class="slider-images max-h-[450px] min-h-[450px] sm:h-[950px] touch-pan-x"
						bind:this={slideArr[i]}
						id={door.id}
						on:mousemove={moving}
						on:mouseup={concluded}
						on:mousedown={(e) => initialized(e, i)()}
					/>
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
