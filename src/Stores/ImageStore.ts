import { type Writable, writable } from 'svelte/store';

export const doorOptions: Writable<string> = writable('all');

export const alterable: Writable<any> = writable();

export const images: Writable<any> = writable();

export const doorColors: Writable<any> = writable();
