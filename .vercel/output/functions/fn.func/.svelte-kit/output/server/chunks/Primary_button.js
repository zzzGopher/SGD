import { c as create_ssr_component, d as escape } from "./index3.js";
const Primary_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "default" } = $$props;
  let { radius = "sm" } = $$props;
  let { textSize = "Cxs" } = $$props;
  let { width = "auto" } = $$props;
  let { weight = "default" } = $$props;
  let { hidden = "visible" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.textSize === void 0 && $$bindings.textSize && textSize !== void 0)
    $$bindings.textSize(textSize);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  return `<button class="${"bg-primary w-" + escape(width, true) + " " + escape(hidden, true) + " sm:block font-" + escape(weight, true) + " p-2 rounded-" + escape(radius, true) + " text-" + escape(textSize, true) + " hover:bg-sky-600 transition-all ease-in-out text-white"}">${escape(text)}</button>`;
});
export {
  Primary_button as P
};
