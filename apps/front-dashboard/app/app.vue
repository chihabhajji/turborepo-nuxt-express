<!-- Le layout parent (les gars, je peut pas parler français) -->
<script lang="ts" setup>
import { initQueryClient } from "@ts-rest/vue-query";
import { sbtContract } from "@sbt/contract";

console.log(sbtContract);
</script>
<template>
  <div>
    <NuxtLayout>
      <SbtContainer>
        <NuxtPage />
      </SbtContainer>
    </NuxtLayout>
  </div>
</template>
