<script type="ts">
	import { onMount } from 'svelte';

	let val: number = '';

	let el: any;

	function Person(element: any, options: any) {
		this.element = element;
		this.data = [this.element.dataset.typewriter.split('')];
		this.speed = options?.speed || 150;
		this.delay = options?.delay || 1500;
		this.repeat = options?.repeat;

		this.wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

		this.typeWrite = async function typeWrite(data) {
			for (const letter of data) {
				this.element.textContent += letter;
				await this.wait(this.speed);
			}
		};

		this.initTyping = function initTyping() {
			for (const data of this.data) {
				this.typeWrite(data);
			}
		};
	}

	onMount(() => {
		const newTyper = new Person(el, { speed: 80, repeat: true });
		newTyper.initTyping();
	});

	export let TypeWriter = undefined;
	export let yourText = 'fast';
</script>

<h1 data-typewriter={yourText} bind:this={el}>{val}</h1>

<style>
	h1 {
		display: flex;
		width: 5rem;
		margin-inline: auto;
		justify-content: center;
		align-items: center;
		height: 100px;
	}

	@keyframes blink-cursor {
		0%,
		100% {
			border-color: transparent;
		}

		50% {
			border-color: orange;
		}
	}
</style>
