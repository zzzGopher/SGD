export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AlexSGD_customer.png","Doriss_Mudgett_Customer.jpg","DougJonesSGD_customer.png","Keri_Dunbar_Customer.jpg","SGD_customLogo_flag.svg","Services.svg","Vector 3.svg","american_flag_logo_sgd.png","arrow-right-button.svg","arrows_down.svg","background.svg","bottom_svg.svg","caret-circle-left.svg","caret-circle-right.svg","caret-double-down.svg","door1.jpg","favicon.png","garaga_finalp.svg","house_image.jpg","house_image2.jpg","local_beach_door.jpg","main-house-photo.jpg","neighborhood_door.jpg","quickhaySGD_customer.png","rectangleBG.svg","small-house.jpg","white_Image.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.73a72d1c.js","app":"_app/immutable/entry/app.7c55d926.js","imports":["_app/immutable/entry/start.73a72d1c.js","_app/immutable/chunks/index.400b69bf.js","_app/immutable/chunks/singletons.d233689f.js","_app/immutable/chunks/index.85b4e345.js","_app/immutable/entry/app.7c55d926.js","_app/immutable/chunks/index.400b69bf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/CompTest",
				pattern: /^\/CompTest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/contentful-api",
				pattern: /^\/api\/contentful-api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/contentful-api/_server.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
