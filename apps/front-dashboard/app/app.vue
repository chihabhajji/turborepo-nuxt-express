<!-- Le layout parent (les gars, je peut pas parler français) -->
<script lang="ts" setup>
import { sbtContract } from "@sbt/contract";
</script>
<template>
  <div>
    <span>
      {{ sbtContract.companiesContract.createPost.path }}
    </span>
    <span>
      {{ sbtContract.companiesContract.createPost.summary }}
    </span>
    <NuxtLayout>
      <SbtContainer>
        <NuxtPage />
      </SbtContainer>
    </NuxtLayout>
  </div>
</template>
