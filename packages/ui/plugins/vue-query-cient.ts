// Nuxt 3 app aliases
import { defineNuxtPlugin } from "nuxt/app";
import { initQueryClient } from "@ts-rest/vue-query";
import { sbtContract } from "@sbt/contract";

export default defineNuxtPlugin({
  name: "vue-query-client",
  dependsOn: ["vue-query"],
  setup() {
    const client = initQueryClient(sbtContract, {
      baseUrl: "http://localhost:8082",
      jsonQuery: true,
      baseHeaders: {},
    });

    return {
      provide: {
        queryClient: client,
      },
    };
  },
});
