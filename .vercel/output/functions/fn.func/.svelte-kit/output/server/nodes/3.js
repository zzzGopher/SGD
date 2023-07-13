

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/CompTest/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ad62939e.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/Left-Arrow-Button.c6c22ce4.js"];
export const stylesheets = ["_app/immutable/assets/Left-Arrow-Button.38e87415.css"];
export const fonts = [];
