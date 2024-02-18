// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    port: 10023,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    strategy: "no_prefix",
    vueI18n: "./config/i18n.config.ts",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "hi",
        name: "Hindi",
      },
    ],
  },
});
