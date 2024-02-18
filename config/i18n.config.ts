import * as english from "../locales/en.json";
import * as hindi from "../locales/hi.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      ...english,
    },
    hi: {
      ...hindi,
    },
  },
}));

