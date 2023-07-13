import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { Q as QuoteBox, L as Left_Arrow_Button } from "../../../chunks/Left-Arrow-Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const size = { height: 32, width: 32 };
  return `${validate_component(QuoteBox, "QuoteBox").$$render($$result, {}, {}, {
    button: () => {
      return `<button slot="button" class="bg-black absolute bottom-0 right-0 w-40 h-12 flex p-4 gap-4 justify-start items-center lg:rounded-br-3xl font-bold">Call Now!${validate_component(Left_Arrow_Button, "LeftArrowButton").$$render($$result, { size, color: "white" }, {}, {})}</button>`;
    }
  })}`;
});
export {
  Page as default
};
