import type Keycloak from "keycloak-js";
import type { initQueryClient } from "@ts-rest/vue-query";

declare module "#app" {
  interface NuxtApp {
    $keycloak: Keycloak;
    $queryClient: ReturnType<typeof initQueryClient<typeof sbtContract>>;
  }
}
