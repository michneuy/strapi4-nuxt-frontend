import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      // {rel: 'stylesheet',type:"text/css",href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'},
      // {rel: 'stylesheet',type:"text/css",href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.0/font/bootstrap-icons.css'}
    ],
    script: [
      {src:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'},
    ]
  },
  css: [
    '@/assets/css/tailwind.scss'
  ],
  modules: [ "@nuxtjs/strapi"],//"@nuxtjs/tailwindcss",
  strapi: {
    // entities: ['posts', 'categories'],
    url: process.env.STRAPI_URL || `http://localhost:1337`,
    prefix: "/api",
    version: "v4",
  },
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:1337'
    }
  },
});
