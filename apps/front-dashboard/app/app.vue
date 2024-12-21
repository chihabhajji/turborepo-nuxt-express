<!-- Le layout parent (les gars, je peut pas parler français) -->
<script lang="ts" setup>
import { sbtContract } from "@sbt/contract";

const { $queryClient } = useNuxtApp();
const { data } = $queryClient.companies.getCompanies.useQuery();
</script>

<template>
  <div>
    <span>
      {{ sbtContract.companies.createCompany.path }}
    </span>
    {{ data?.body }}
    <NuxtLayout>
      <SbtContainer>
        <NuxtPage />
      </SbtContainer>
    </NuxtLayout>
  </div>
</template>
