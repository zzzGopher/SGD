<script lang="ts">
	import LeftArrowIcon from './LeftArrowIcon.svelte';
	import RightArrowIcon from './RightArrowIcon.svelte';
	import type { svg_size } from './svg_size';

	let Images = [
		{ id: 0, pic: 'door1.jpg' },
		{ id: 1, pic: 'local_beach_door.jpg' },
		{ id: 2, pic: 'neighborhood_door.jpg' },
		{ id: 3, pic: 'small-house.jpg' },
		{ id: 4, pic: 'house_image.jpg' }
	];

	let initialPos: number = 0,
		prevTranslate: number = 0,
		currentTranslate: number = 0,
		isMoving: boolean = false,
		animationID: number,
		slideArr: any[] = [],
		grab = true,
		grabbing = false,
		currentIndex: number = 0,
		picWidth: number = 0;

	const stopWeird = (e: any) => e.preventDefault();

	const initialized = (e: any, i: any) => {
		return () => {
			e.preventDefault();
			window.oncontextmenu = (e: any) => {
				e.preventDefault();
				e.stopPropagation();
			};
			console.log(e);

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
			console.log(`our current position is : ${currentPos}`);

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

		console.log(`
		our event type is ${e.type},
		our amount we move by is : ${movedBy} \n
		our prevTranslate is : ${prevTranslate} \n
		our currentTranslate is : ${currentTranslate} \n
		our initialPos is : ${initialPos} \n
		our currentIndex is : ${currentIndex}\n
		our inner window width is ${window.innerWidth}`);
		console.log(picWidth);

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

		console.log(slideWidth);

		if (direction === 'left' && currentIndex > 0) {
			currentIndex--;
		} else if (direction === 'right' && currentIndex < numSlides - 1) {
			currentIndex++;
		}

		slideArr.forEach((el) => (el.style.transform = `translateX(${currentIndex * -slideWidth}px)`));
	};
</script>

<!-- markup (zero or more items) goes here -->

<div class="flex items-center relative justify-center w-full">
	<LeftArrowIcon on:click={() => handleButtons('left')} size={svg} color={'#ffff'} />
	<ul class="slider-container" class:grabbing class:grab on:drag={stopWeird}>
		<li class="slide">
			{#each Images as door, i (door.id)}
				<img
					src={door.pic}
					alt=""
					class="slider-images max-h-[450px] min-h-[450px] sm:min-h-[700px] sm:h-[950px]"
					bind:this={slideArr[i]}
					id={door.id.toString()}
					on:mousedown={(event) => initialized(event, i)()}
					on:mousemove={moving}
					on:mouseup={concluded}
				/>
			{/each}
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
		@apply items-center h-full w-full flex-row inline-flex relative  overflow-hidden m-auto;
	}
	.grab {
		cursor: grab;
	}
	.grabbing {
		cursor: grabbing;
	}
</style>
