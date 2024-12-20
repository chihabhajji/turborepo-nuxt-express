# Prerequisites

npm install -g yarn
yarn set version berry

# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- 💚 [Nuxt 3](https://v3.nuxtjs.org) - The Hybrid Vue Framework

- 📝 [Vitest](https://vitest.dev/) - A blazing fast unit-test framework powered by Vite (with c8 coverage)

- 🔥 The `<script setup>` syntax

- 🦾 TypeScript

## Prerequisites

Before getting started, please make sure you have [installed](https://v3.nuxtjs.org/getting-started/quick-start#prerequisites) the recommended setup.

- Node.js\* (latest LTS version)
- Visual Studio Code
- Volar Extension
  - Either enable Take Over Mode (recommended)
  - ... or add TypeScript Vue Plugin (Volar)

## Try it

Create new repo with this [template](https://github.com/nejckorosec/nuxt-3-simple-boilerplate/generate).

## Info

- `docs`: a [Nuxt.js](https://v3.nuxtjs.org) app
- `web`: another [Nuxt.js](https://v3.nuxtjs.org) app
- `ui`: a stub Nuxt component library shared by both `web` and `docs` applications

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
