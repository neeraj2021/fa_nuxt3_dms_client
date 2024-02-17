// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    port: 10023,
  },
  modules: ["@nuxtjs/tailwindcss"],
});
