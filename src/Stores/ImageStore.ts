import { type Writable, writable } from 'svelte/store';

export const doorOptions: Writable<string> = writable('all');

export const allImages: Writable<[]> = writable();
