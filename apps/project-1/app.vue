<script lang="ts" setup>
const noLogs = () => {
  console.warn('NOTHING');
};
</script>

<template>
  <MonorepoContainer>
    <h1>Project 1</h1>
    <MonorepoButton disabled @submit="noLogs">Disabled</MonorepoButton>
  </MonorepoContainer>
</template>
