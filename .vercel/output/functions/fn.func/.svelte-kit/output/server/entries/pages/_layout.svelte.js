import { c as create_ssr_component, a as add_styles, v as validate_component, e as each, b as add_attribute, d as escape } from "../../chunks/index3.js";
import { I as Icon } from "../../chunks/Icon.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hover_footer.svelte-paf1vi.svelte-paf1vi:hover{color:black;transform:scale(1.2)}.nav_slide.svelte-paf1vi>a.svelte-paf1vi:hover{transform:scale(1.3);font-weight:700;color:black}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let indexRefs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];
  $$result.css.add(css);
  return `<nav${add_styles({ "visibility": `visible` })}><div class="m-auto max-w-7xl px-8">
		${``}

		
		<nav class="m-auto pt-8"><div class="min-w-full sm:justify-between flex h-20 justify-start sm:gap-0 gap-4 items-center">
                
                <button class="w-10 h-auto sm:hidden self-start text-primary"><div class="relative mt-1.5 z-10 self-start">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "",
      height: 28,
      icon: "ci:hamburger"
    },
    {},
    {}
  )}</div></button>
				<a class="z-10" href="/"><header class="text-white z-20 text-Clg uppercase whitespace-nowrap font-extralight">Tulsa | Sapulpa
						<br class="lg:hidden"> Garage Doors
					</header></a>
				<ul class="invisible sm:visible z-50 text-white text-Cxs sm:flex w-min justify-around gap-4">${each(indexRefs, (index) => {
    return `<li><a class="hover:text-primary rounded transition-all ease-in-out"${add_attribute("href", index.href, 0)}>${escape(index.name)}</a>
						</li>`;
  })}</ul></div>

			

			

			</nav></div></nav>

${slots.default ? slots.default({}) : ``}


<div class="flex h-24 flex-col gap-2 py-8 bg-footer_color justify-center items-center"><a href="/" class="hover:text-black text-gray-500">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      color: "black",
      icon: "akar-icons:facebook-fill",
      width: 28
    },
    {},
    {}
  )}</a>

	<div class="flex w-full flex-row items-center justify-around"><a href="/" class="text-black hover_footer text-xs sm:text-lg svelte-paf1vi">Facebook</a>

		<a class="sm:text-2xl text-black hover:text-black" href="/">Developed by © Frogip</a>

		<a href="/" class="text-black hover_footer text-xs sm:text-lg svelte-paf1vi">Yelp</a></div>
</div>`;
});
export {
  Layout as default
};
