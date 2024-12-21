// @ts-check
/** @type {import('eslint').Linter.Config[]} */
import nuxtConfig from "@sbt/eslint-config-custom/nuxt";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(nuxtConfig);
