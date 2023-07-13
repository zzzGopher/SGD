import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { P as Primary_button } from "../../../chunks/Primary_button.js";
const Form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "input.svelte-5ekn6p,textarea.svelte-5ekn6p{@apply rounded-lg p-2;;@media screen and (width: 768px) {\n			height: 40px;\n		}}.custom_outline.svelte-5ekn6p:focus{@apply outline-primary outline;}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<form action="submit"><div class="flex flex-col w-min gap-10 items-start"><h1 class="text-Clg text-white text-start w-full md:mt-28 uppercase">Contact Us</h1>
		<input class="custom_outline w-2/3 svelte-5ekn6p" type="text" placeholder="First Name">
		<input class="custom_outline w-2/3 svelte-5ekn6p" type="text" placeholder="Last Name">
		<textarea class="custom_outline h-28 svelte-5ekn6p" placeholder="Reason for Contacting"></textarea>
		<input class="custom_outline w-3/5 svelte-5ekn6p" type="text" placeholder="Phone Number">
		${validate_component(Primary_button, "Button").$$render(
    $$result,
    {
      width: "28",
      text: "Submit",
      radius: "lg"
    },
    {},
    {}
  )}</div></form>

`;
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<figure class="max-w-4xl"><iframe class="rounded" title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103292.32524986395!2d-96.19673758209866!3d35.99867240730055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1682464432965!5m2!1sen!2sus" width="100%" height="450" style="border:0;" ${"allowfullscreen"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></figure>

`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-container.svelte-6rbqu{background-color:rgba(0, 0, 0, 0.25)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-rjke4n_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="To get in touch with us, you can either call or email us. We'll promptly provide you with free quotes and estimates. Our skilled technicians will address any concerns you may have and offer you comprehensive solutions."><!-- HEAD_svelte-rjke4n_END -->`, ""}

<div class="contact-wrapper mt-20 w-screen min-h-screen grid"><div class="contact-form-container grid w-screen gap-4 grid-flow-row md:grid-flow-col"><div class="form-container rounded-r-lg flex items-start justify-center md:justify-end md:pr-12 w-full h-min md:h-full p-4 py-20 svelte-6rbqu">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div>
		<div class="information-map-container w-full h-full p-4 py-20 text-center md:text-left"><h1 class="door-info text-C2xl text-white font-custom">Get In Touch</h1>
			<br>
			<p class="door-info-paragraph text-accent font-custom text-Cbase font-bold">To get in touch with us, you can either call or email us. We&#39;ll promptly provide you with
				free quotes and estimates. Our skilled technicians will address any concerns you may have
				and offer you comprehensive solutions.
			</p>
			<br>
			${validate_component(Map, "Map").$$render($$result, {}, {}, {})}</div></div></div>

`;
});
export {
  Page as default
};
