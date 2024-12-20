import { join, dirname } from "path";
import { defineNuxtModule } from "@nuxt/kit";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtModule({
  meta: {},
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "sbt",
      });
    },
  },
});
