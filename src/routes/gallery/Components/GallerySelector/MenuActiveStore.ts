import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
export const active: Writable<boolean> = writable(false);
