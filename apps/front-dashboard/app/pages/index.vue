<script setup lang="ts">
import authenticatedMiddleware from "@sbt/ui/middleware/authenticated.middleware";
definePageMeta({
  middleware: [authenticatedMiddleware],
});


</script>

<template>
  <div>
    hi?
    <!-- <h1>Nuxt Routing set up successfully!</h1> -->
    <!-- <p>Current route: {{ route.path }}</p> -->
    <!-- <a href="https://nuxt.com/docs/getting-started/routing" target="_blank" -->
    <!--   >Learn more about Nuxt Routing</a -->
    <!-- > -->
  </div>
</template>
