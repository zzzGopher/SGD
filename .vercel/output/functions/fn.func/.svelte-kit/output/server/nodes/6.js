import * as server from '../entries/pages/gallery/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/+page.server.js";
export const imports = ["_app/immutable/nodes/6.fa8b3587.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/index.929bb2b5.js","_app/immutable/chunks/index.85b4e345.js"];
export const stylesheets = ["_app/immutable/assets/6.dcfbd508.css"];
export const fonts = [];
