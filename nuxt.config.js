export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Nuxt Movie App",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [
			{
				rel: "icon",
				href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍿</text></svg>",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/scss/main.scss"],

	publicRuntimeConfig: {
		axios: {
			baseURL: process.env.NUXT_ENV_BASE_URL,
		},
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: ["~/components", "~/components/movies"],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/axios"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
