import { type Writable, writable } from 'svelte/store';

export const doorOptions: Writable<string> = writable('all');

export const alterable: Writable<any> = writable();

export const images: Writable<any> = writable();

export const doorColors: Writable<any> = writable();

export const currentIndex: Writable<number> = writable(0);

export const currentElement: Writable<any> = writable(0);

export const i: Writable<any> = writable(0);
