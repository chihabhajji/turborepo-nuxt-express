import type { ModuleOptions } from "@nuxt/eslint";

export default {
  config: {
    nuxt: {
      sortConfigKeys: true,
    },
    tooling: {},
    typescript: {
      strict: true,
    },
  },
  checker: true,
} as ModuleOptions;
