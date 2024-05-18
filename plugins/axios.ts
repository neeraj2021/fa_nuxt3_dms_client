import axios from "axios";

const baseURL = process.env.BASE_URL || "https://jsonplaceholder.typicode.com";

const axiosConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

const http = axios.create(axiosConfig);

http.interceptors.request.use((config) => {
  console.log("Making request to: ", config.url);

  // Redirect to login page if not authenticated if got 401 status code

  return config;
});

http.interceptors.response.use(
  (response) => {
    console.log("Response: ", response);

    if (response.status === 401) {
      // Redirect to login page
      window.location.href = "/login";

      return Promise.reject(response);
    }

    return response;
  },
  (error) => {
    console.log("Error: ", error);

    return Promise.reject(error);
  }
);

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      axios: http,
    },
  };
});
