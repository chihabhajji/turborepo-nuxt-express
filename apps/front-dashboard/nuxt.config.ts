import { defineNuxtConfig } from "nuxt/config";
import { config } from "dotenv-flow";
import eslintModuleConfig from "@sbt/ui/configs/eslint-module.config";

config({
  node_env: process.env.NODE_ENV,
  path: "../..",
});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@sbt/ui", "@nuxt/eslint"],
  plugins: [
    "@sbt/ui/plugins/keycloakjs.client.ts",
    "@sbt/ui/plugins/vue-query.ts",
    "@sbt/ui/plugins/vue-query-cient.ts",
  ],
  runtimeConfig: {
    public: {
      keycloakUrl: process.env.KEYCLOAK_URL,
      keycloakRealm: process.env.KEYCLOAK_REALM,
      keycloakClientId: process.env.KEYCLOAK_CLIENT_ID,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-12-20",
  eslint: eslintModuleConfig,
});
