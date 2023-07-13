

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5b707cd6.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/Primary_button.ca9beb6b.js"];
export const stylesheets = ["_app/immutable/assets/5.38529473.css"];
export const fonts = [];
