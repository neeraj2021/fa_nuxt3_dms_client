import axios from "axios";

const baseURL = process.env.BASE_URL || "https://jsonplaceholder.typicode.com";

const axiosConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

const http = axios.create(axiosConfig);

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      axios: http,
    },
  };
});
