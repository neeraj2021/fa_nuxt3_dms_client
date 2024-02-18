import { v4 as uuidv4 } from "uuid";

export default defineNuxtPlugin((nuxtApp) => {
  //   nuxtApp.provide("uuid", uuidv4);
  return {
    provide: {
      uuid: uuidv4(),
    },
  };
});
