import axios from "axios";

const baseURL = process.env.BASE_URL || "http://localhost:4050/";

const axiosConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

const httpInventory = axios.create(axiosConfig);

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      axiosInventory: httpInventory,
    },
  };
});
