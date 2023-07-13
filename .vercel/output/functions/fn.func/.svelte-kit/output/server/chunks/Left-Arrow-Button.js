import { c as create_ssr_component, b as add_attribute } from "./index3.js";
const QuoteBox_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-1h8l91c.svelte-1h8l91c{text-shadow:4px 4px 3px rgba(0, 0, 0, 0.385)}div.svelte-1h8l91c p.svelte-1h8l91c{text-shadow:1px 1px 2px rgba(0, 0, 0, 0.385)}",
  map: null
};
const QuoteBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-full relative lg:w-2/3 bg-primary text-white lg:rounded-tr-3xl lg:rounded-br-3xl h-56 flex flex-col justify-evenly lg:flex-row px-4 svelte-1h8l91c"><div class="flex flex-col justify-center lg:flex-row h-auto svelte-1h8l91c"><h3 class="lg:self-center text-C2xl font-bold leading-tight lg:w-64 svelte-1h8l91c">Free To Quote</h3>
		<p class="lg:self-center lg:leading-loose lg:w-2/3 w-full lg:text-Cbase sm:text-Csm pb-8 lg:pb-0 svelte-1h8l91c">Just Give us A call and one of our technicians will arrive and give you a quote free of
			charge!
		</p>
		${slots.default ? slots.default({}) : `need button here`}</div>
</div>`;
});
const Left_Arrow_Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size } = $$props;
  let { color = "#000000" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size.width, 0)}${add_attribute("height", size.height, 0)}${add_attribute("fill", color, 0)} viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>`;
});
export {
  Left_Arrow_Button as L,
  QuoteBox as Q
};
