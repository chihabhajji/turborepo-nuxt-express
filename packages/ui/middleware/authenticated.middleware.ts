/**
 * Middleware that requires the user to be authenticated.
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Only run on client side.
  if (import.meta.server) {
    return;
  }
  const app = useNuxtApp();
  const $keycloak = app.$keycloak;
  if ($keycloak && !$keycloak.authenticated) {
    await $keycloak.login();
    // If the user is not redirected by `Keycloak.login`
    // This shouldn't happen.
    return abortNavigation("You must be authenticated to view this page.");
  }
});
