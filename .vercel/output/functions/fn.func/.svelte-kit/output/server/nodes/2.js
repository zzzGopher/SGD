

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.41ca10da.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/Icon.654037f6.js","_app/immutable/chunks/Primary_button.ca9beb6b.js","_app/immutable/chunks/Left-Arrow-Button.c6c22ce4.js"];
export const stylesheets = ["_app/immutable/assets/2.6b72d290.css","_app/immutable/assets/Left-Arrow-Button.38e87415.css"];
export const fonts = [];
