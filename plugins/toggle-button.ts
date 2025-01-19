import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("toggle-button", Toggle);
});
