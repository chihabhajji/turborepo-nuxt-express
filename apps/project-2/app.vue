<script lang="ts" setup>
const showAlert = () => {
  alert('Button emitted and submitted');
};
</script>

<template>
  <MonorepoContainer>
    <h1>Project 2</h1>
    <MonorepoButton @submit="showAlert"> Submit </MonorepoButton>
  </MonorepoContainer>
</template>
