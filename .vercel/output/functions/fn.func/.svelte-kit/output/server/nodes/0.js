

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ca28ca9c.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/Icon.654037f6.js","_app/immutable/chunks/index.929bb2b5.js"];
export const stylesheets = ["_app/immutable/assets/0.f22cb7ab.css"];
export const fonts = [];
