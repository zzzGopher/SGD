import { c as create_ssr_component, b as add_attribute, v as validate_component, k as is_promise, n as noop, e as each, d as escape, f as subscribe } from "../../../chunks/index3.js";
import * as contentful from "contentful";
import { w as writable } from "../../../chunks/index2.js";
const LeftArrowIcon_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "button.svelte-y4vazt::after{content:'_';background-color:rgb(39, 39, 39);width:75%;height:75%;z-index:-1;border-radius:100%;color:transparent;position:absolute;inset:0.4em}button.svelte-y4vazt:hover::after{background-color:rgb(186, 186, 186);transition:all ease-in-out 0.3s}",
  map: null
};
const LeftArrowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$5);
  return `<button class="absolute z-10 left-0 svelte-y4vazt"><svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", `${size.width}px`, 0)}${add_attribute("height", `${size.height}px`, 0)}${add_attribute("fill", color, 0)} viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM149.66,93.66,115.31,128l34.35,34.34a8,8,0,0,1-11.32,11.32l-40-40a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,11.32Z"></path></svg></button>`;
});
const RightArrowIcon_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-l1ys1u::after{content:'';background-color:rgb(39, 39, 39);width:75%;height:75%;z-index:-1;border-radius:100%;color:transparent;position:absolute;inset:0.4em}button.svelte-l1ys1u:hover::after{background-color:rgb(186, 186, 186);transition:all ease-in-out 0.3s}",
  map: null
};
const RightArrowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$4);
  return `<button aria-label="right" class="absolute z-10 right-0 svelte-l1ys1u"><svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", `${size.width}px`, 0)}${add_attribute("height", `${size.height}px`, 0)}${add_attribute("fill", color, 0)} viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path></svg>
</button>`;
});
const Slider_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".svelte-beh590{box-sizing:border-box}.slider-images.svelte-beh590{@apply relative rounded-xl min-w-[100%] w-[full] object-cover;;transform:translateX(0);will-change:transform;scrollbar-width:none;transition:transform 0.4s ease-out;user-select:none}.slider-container.svelte-beh590{@apply h-full m-auto w-full  inline-flex items-center justify-center;}.slide.svelte-beh590{@apply items-center h-full w-full flex-row inline-flex relative overflow-hidden m-auto;}.grab.svelte-beh590{cursor:grab}.grabbing.svelte-beh590{cursor:grabbing}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { myImages } = $$props;
  let slideArr = [];
  const svg = { height: 45, width: 45 };
  if ($$props.myImages === void 0 && $$bindings.myImages && myImages !== void 0)
    $$bindings.myImages(myImages);
  $$result.css.add(css$3);
  return `

<div class="flex md:hidden items-center relative justify-center w-full svelte-beh590">${validate_component(LeftArrowIcon, "LeftArrowIcon").$$render($$result, { size: svg, color: "#ffff" }, {}, {})}
	<ul class="${[
    "slider-container svelte-beh590",
    " grab"
  ].join(" ").trim()}"><li class="slide rounded-xl svelte-beh590">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
				<p class="min-h-[600px] text-4xl text-white flex items-center svelte-beh590">loading...</p>
				`;
    }
    return function(Images) {
      return `
			${each(Images, (door, i2) => {
        return `<img${add_attribute("src", door, 0)} alt="" class="slider-images max-h-[450px] min-h-[450px] sm:h-[950px] touch-pan-x svelte-beh590"${add_attribute("id", door.id, 0)}${add_attribute("this", slideArr[i2], 0)}>`;
      })}
				`;
    }(__value);
  }(myImages)}</li></ul>
	${validate_component(RightArrowIcon, "RightArrowIcon").$$render($$result, { size: svg, color: "#ffff" }, {}, {})}</div>


`;
});
const GalleryHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="gallery-container flex flex-col"><h1 class="text-C4xl font-bold text-white mb-8">Our Gallery</h1>

	<span class="text-black text-Cxl font-bold text-left tracking-widest">Get an idea</span>
	<span class="text-accent text-Cxl font-bold text-left tracking-widest">of what you</span>
	<span class="text-white text-Cxl font-bold text-left tracking-widest ">need</span></div>`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height } = $$props;
  let { width } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<a href="tel:918-224-2323"><svg class="relative" xmlns="http://www.w3.org/2000/svg"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} fill="#9facbd" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" opacity="0.2"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#9facbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></a>`;
});
const client = contentful.createClient ? contentful.createClient({
  accessToken: "EXR0kul91Rp0Og3jADvfEaiLTKkNOpqUemzoubF4YMI",
  space: "ou5y66xxxy0c"
}) : contentful.default.createClient({
  accessToken: "EXR0kul91Rp0Og3jADvfEaiLTKkNOpqUemzoubF4YMI",
  space: "ou5y66xxxy0c"
});
const apiResults = async () => await client.getEntry("4ilHWDlZoI8cEbUQtEW7DQ").then((data2) => data2).catch((err) => console.log(err));
const data = (async () => await apiResults())();
const res = (async () => await data.fields)();
(async () => await res)();
const { colors: doorColorsObject } = res;
const doorColors = [];
let i = 0;
for (let color in doorColorsObject) {
  doorColors[i] = color;
  i++;
}
const DoorTypes_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".available.svelte-1ilxvkh.svelte-1ilxvkh{letter-spacing:0.15em}.colors-h4.svelte-1ilxvkh.svelte-1ilxvkh{letter-spacing:0.15em}.color-box.svelte-1ilxvkh span.svelte-1ilxvkh{border-radius:50%;width:30px;height:30px}",
  map: null
};
const DoorTypes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="door-types-container justify-between gap-4 flex flex-row w-full md:w-auto md:gap-20"><div class="flex flex-col w-auto h-full items-start justify-center"><span class="available text-Clg md:text-Cbase text-accent font-extrabold text-left svelte-1ilxvkh">Available</span>
		<h4 class="colors-h4 text-left sm:leading-[4rem] sm:text-C4xl text-C6xl md:text-Cxl leading-10 text-white font-extrabold svelte-1ilxvkh">Colors
		</h4></div>
	<div class="color-box flex flex-row w-auto gap-2 h-full items-center svelte-1ilxvkh">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			<p class="text-white">loading...</p>
		`;
    }
    return function(Door) {
      return `
			${each(Door, (DC) => {
        return `<span style="${"background-color:" + escape(DC, true)}" class="svelte-1ilxvkh"></span>`;
      })}

		`;
    }(__value);
  }(doorColors)}</div>
</div>`;
});
const splitStringArr = (emptyArr, arr) => {
  let ceiling = 0;
  for (let start = 0; start < arr.length; start++) {
    emptyArr[ceiling] = arr[start];
    if (start % 6 !== 0) {
      ceiling++;
    }
  }
  return emptyArr;
};
const groupImagesIntoSixArr = (arr) => {
  const finalArr = [];
  let j = 0;
  for (let i2 = 0; i2 < arr.length; ) {
    finalArr[j] = arr.splice(0, 6);
    j++;
  }
  finalArr[j] = arr;
  return finalArr;
};
const LargeSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".large-slider-image2.svelte-va6euv:hover{scale:0.9}.selected.svelte-va6euv{@apply text-primary;}",
  map: null
};
const LargeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { myImages = [] } = $$props;
  let emptyArr = [[]];
  let buildingArr = splitStringArr(emptyArr, myImages);
  let finalImageArr = groupImagesIntoSixArr(buildingArr);
  let firstImages = finalImageArr[0];
  if ($$props.myImages === void 0 && $$bindings.myImages && myImages !== void 0)
    $$bindings.myImages(myImages);
  $$result.css.add(css$1);
  return `<div class="hidden min-w-full m-auto large-slider-container w-full justify-center relative md:flex gap-2 p-2"><div class="flex w-full -bottom-14 p-4 justify-center absolute"><ul class="flex text-white font-medium gap-8"><button${add_attribute("id", 0, 0)} class="${[
    "hover:text-primary transition-all ease-in-out underline svelte-va6euv",
    "selected"
  ].join(" ").trim()}"><li>1</li></button>
			<button${add_attribute("id", 1, 0)} class="${[
    "hover:text-primary transition-all ease-in-out underline svelte-va6euv",
    ""
  ].join(" ").trim()}"><li>2</li></button>
			<button${add_attribute("id", 2, 0)} class="${[
    "hover:text-primary transition-all ease-in-out underline svelte-va6euv",
    ""
  ].join(" ").trim()}"><li>3</li></button></ul></div>
	${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
		<p class="min-h-[600px] text-4xl text-white flex items-center">loading...</p>
	`;
    }
    return function(Images) {
      return `

		${each(Images, (pic, i2) => {
        return `${i2 === 0 ? `<div class="large-slider-image-container"><img draggable="false"${add_attribute("src", pic, 0)} alt="" class="large-slider-image object-cover w-[800px] min-h-[600px] max-h-[600px]">
				</div>` : `<div class="large-slider-image-container"><img draggable="false"${add_attribute("src", pic, 0)} alt="carousel of images" class="large-slider-image2 object-cover w-40 min-h-[600px] max-h-[600px] hover:bg-accent transition-all duration-300 ease-in-out cursor-pointer svelte-va6euv">
				</div>`}`;
      })}
	`;
    }(__value);
  }(firstImages)}
</div>`;
});
const DropDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size } = $$props;
  let { color } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size.width, 0)}${add_attribute("height", size.height, 0)}${add_attribute("fill", color, 0)} viewBox="0 0 256 256"><path d="M213.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35A8,8,0,0,1,213.66,122.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,116.69,53.66,42.34A8,8,0,0,0,42.34,53.66Z"></path></svg>`;
});
const active = writable(false);
const doorOptions = writable("all");
const Selector_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-ax2zqd.svelte-ax2zqd{display:flex}.b-active.svelte-ax2zqd.svelte-ax2zqd{@apply bg-opacity-40;}.list-items.svelte-ax2zqd.svelte-ax2zqd{@apply bg-accent w-28 p-2 rounded-md shadow-sm shadow-black;}.list-items.svelte-ax2zqd.svelte-ax2zqd:hover{@apply bg-opacity-40 cursor-pointer transition-all ease-in-out;;transition:0.9s}.dropdown-list-items.svelte-ax2zqd.svelte-ax2zqd{@apply w-full h-12 flex items-center justify-center;}.dropdown-list-items.svelte-ax2zqd.svelte-ax2zqd:hover{color:white;cursor:pointer;transition:all ease-in-out 0.3s;@apply bg-primary;}.dropdown-list-items.svelte-ax2zqd span.svelte-ax2zqd:hover{scale:1.1;transition:all ease-in-out 0.3s}",
  map: null
};
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_doorOptions;
  let $active, $$unsubscribe_active;
  $$unsubscribe_doorOptions = subscribe(doorOptions, (value) => value);
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  $$result.css.add(css);
  $$unsubscribe_doorOptions();
  $$unsubscribe_active();
  return `<div class="selector-container w-full"><ul class="hidden list-container h-auto pt-4 md:flex justify-start gap-2 text-center items-center whitespace-nowrap"><li class="list-items svelte-ax2zqd">Popular</li>
		<li class="list-items svelte-ax2zqd">All</li>
		<li class="list-items svelte-ax2zqd">Decorative</li>
		<li class="list-items svelte-ax2zqd">Residential</li></ul></div>

<div class="drop-down-container flex w-full justify-center items-center"><button class="${[
    "drop-down-button font-medium flex items-center justify-center gap-2 md:hidden w-auto bg-white rounded-xl px-4 py-2 hover:bg-opacity-40 svelte-ax2zqd",
    $active ? "b-active" : ""
  ].join(" ").trim()}">Door Types
		${validate_component(DropDownIcon, "DropDownIcon").$$render(
    $$result,
    {
      size: { width: 20, height: 20 },
      color: "black"
    },
    {},
    {}
  )}</button>
	${$active ? `<ul class="${[
    "dropdown-list-container flex-col hidden w-52 h-40 rounded-xl bg-white text-center mt-60 absolute z-10 items-center justify-center shadow-xl svelte-ax2zqd",
    active ? "active" : ""
  ].join(" ").trim()}"><li class="dropdown-list-items rounded-t-xl svelte-ax2zqd"><span class="svelte-ax2zqd">Popular</span></li>
			<li class="dropdown-list-items svelte-ax2zqd"><span class="svelte-ax2zqd">Steel on steel</span></li>
			<li class="dropdown-list-items svelte-ax2zqd"><span class="svelte-ax2zqd">Residential</span></li>
			<li class="dropdown-list-items rounded-b-xl svelte-ax2zqd"><span class="svelte-ax2zqd">Decorative</span></li></ul>` : ``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images;
  let $$unsubscribe_active;
  $$unsubscribe_active = subscribe(active, (value) => value);
  let { data: data2 } = $$props;
  console.log(data2);
  const { items } = data2.doorPics;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  images = items.map((d) => d.fields.file?.url);
  $$unsubscribe_active();
  return `${$$result.head += `<!-- HEAD_svelte-7uuljl_START -->${$$result.title = `<title>Gallery</title>`, ""}<meta name="Take a look at our gallery featuring a wide variety of door installations and repairs. Our collection includes residential and carriage doors with various styles to choose from. We have popular options for you to explore at your convenience. Thank you for considering us."><!-- HEAD_svelte-7uuljl_END -->`, ""}

<html lang="UTF-8" id="gallery"><section class="md:hidden m-auto min-h-min sm:min-h-screen max-w-7xl py-8 wrapper"><div class="flex gap-8 p-4 flex-col items-start justify-center w-full py-8">${validate_component(GalleryHeader, "GalleryHeader").$$render($$result, {}, {}, {})}
			${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})}
			${validate_component(Slider, "Slider").$$render($$result, { myImages: images }, {}, {})}
			${validate_component(DoorTypes, "DoorTypes").$$render($$result, {}, {}, {})}

			<div class="flex w-full items-center justify-start gap-2">${validate_component(Phone, "PhoneIcon").$$render($$result, { height: 20, width: 20 }, {}, {})}

			<button class="text-accent text-Cxs font-semibold"><a href="tel:918-224-2323">Call For Pricing &amp; Availability</a></button></div></div>
		<img class="absolute h-auto bottom-0 -z-10 right-0"${add_attribute("src", "rectangleBG.svg", 0)} alt="ff"></section>
	
	<div class="hidden md:wrapper justify-center"><section class="hidden w-full md:grid grid-flow-row mt-32">${validate_component(LargeSlider, "LargeSlider").$$render($$result, { myImages: images }, {}, {})}

			<div class="bottom-grid-container p-2 grid grid-flow-col gap-4 min-w-full"><div class="flex w-auto flex-col gap-2 items-start"><h2 class="text-Cxl text-white">Gallery</h2>
					<p class="text-accent text-Cbase font-bold">Take a look at our gallery featuring a wide variety of door installations and repairs.
						Our collection includes residential and carriage doors with various styles to choose
						from. We have popular options for you to explore at your convenience. Thank you for
						considering us.
					</p></div>
				<div class="flex flex-col items-start gap-6">${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})}
					${validate_component(DoorTypes, "DoorTypes").$$render($$result, {}, {}, {})}</div></div></section></div>
</html>`;
});
export {
  Page as default
};
