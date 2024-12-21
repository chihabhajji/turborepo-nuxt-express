<script setup lang="ts">
const { $keycloak } = useNuxtApp();
</script>

<template>
	<div>
		<div v-if="$keycloak?.tokenParsed">
			<span>Salut </span>{{ $keycloak.tokenParsed.name }}
		</div>
		<!-- <h1>Nuxt Routing set up successfully!</h1> -->
		<!-- <p>Current route: {{ route.path }}</p> -->
		<!-- <a href="https://nuxt.com/docs/getting-started/routing" target="_blank" -->
		<!--   >Learn more about Nuxt Routing</a -->
		<!-- > -->
	</div>
</template>
