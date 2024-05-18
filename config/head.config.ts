import type { AppHeadMetaObject } from "nuxt/schema";

// Global page headers: https://go.nuxtjs.dev/config-head
export const headOptions: AppHeadMetaObject = {
  title: "Neeraj - The AI Writing Assistant for Everyone",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      href: "https://fonts.googleapis.com",
      rel: "preconnect",
    },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
      rel: "stylesheet",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
    },
  ],
  script: [
    {
      src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCd6qVfeEWdLonbGlCFE_RY8DKT_y0ZGf4&libraries=geometry,places",
    },
  ],
};
