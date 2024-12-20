import Keycloak from "keycloak-js";
import { omit } from "remeda";
import { useRouter, useRuntimeConfig, createError } from "nuxt/app";
import { type SBTKeycloakConfig } from "../types/config";

export default defineNuxtPlugin({
  name: "metis-keycloakjs",
  enforce: "pre",
  hooks: {
    // This hook fixes https://github.com/keycloak/keycloak/issues/14742
    "app:mounted"() {
      const router = useRouter();

      // Filter query parameters. Remove query parameters used by Keycloak.
      // (you can use you own logic here)
      const query = omit(router.currentRoute.value.query, [
        "state",
        "session_state",
        "code",
      ]);
      router.replace({ query });
    },
  },
  async setup() {
    console.log("setting up");
    const runtimeConfig = useRuntimeConfig();
    const config: SBTKeycloakConfig = runtimeConfig.public as SBTKeycloakConfig;
    // Probably a good idea to check if the config is correct.
    try {
      const keycloak = new Keycloak({
        url: config.keycloakUrl,
        realm: config.keycloakRealm,
        clientId: config.keycloakClientId,
      });
      await keycloak.init({
        onLoad: "login-required",
        checkLoginIframe: false,
        // silentCheckSsoRedirectUri: location.origin + "/silent-check-sso.html",
        // silentCheckSsoFallback: true,
      });
      return {
        provide: {
          keycloak,
        },
      };
    } catch (e) {
      console.error(e);
      throw createError({ statusCode: 401, message: "Keycloak error" });
    }
  },
});
