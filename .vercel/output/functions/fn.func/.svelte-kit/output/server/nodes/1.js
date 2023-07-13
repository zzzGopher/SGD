

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1c0df2e7.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/singletons.d233689f.js","_app/immutable/chunks/index.85b4e345.js"];
export const stylesheets = [];
export const fonts = [];
