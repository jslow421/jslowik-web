// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	compatibilityDate: "2025-12-18",
	ssr: true,
	modules: ["@nuxt/content"],
	css: ["~/assets/css/main.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
