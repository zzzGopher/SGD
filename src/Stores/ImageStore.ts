import { type Writable, writable } from 'svelte/store';

export const doorOptions: Writable<any> = writable('all');

export const alterable: Writable<any> = writable();

export const images: Writable<any> = writable();

export const doorColors: Writable<string> = writable();

export const currentIndex: Writable<number> = writable(0);
