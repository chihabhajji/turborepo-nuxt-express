import { defineNuxtConfig } from "nuxt/config";

require("dotenv-flow").config({
  node_env: process.env.NODE_ENV,
  path: "../..",
});
const keycloakConfig = {
  keycloakUrl: process.env.KEYCLOAK_URL,
  keycloakRealm: process.env.KEYCLOAK_REALM,
  keycloakClientId: process.env.KEYCLOAK_CLIENT_ID,
} as const;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@sbt/ui"],
  runtimeConfig: {
    public: {
      ...keycloakConfig,
    },
    keycloakConfig,
  },
  plugins: ["@sbt/ui/plugins/keycloakjs.client.ts"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-12-20",
});
