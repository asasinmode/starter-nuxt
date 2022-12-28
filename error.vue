<script setup lang="ts">
const { error = { statusCode: '500', message: 'something went wrong 😟' } } = defineProps<{
  error?: {
    statusCode: string
    message: string
  }
}>();

useHead({
  title: 'error',
});
</script>

<template>
  <main row-span-full col-span-full flex-center flex-col gap-4>
    <h1 text-6xl font-bold>
      {{ error.statusCode }}
    </h1>
    <h2 text-3xl text-center>
      {{ error.message }}
    </h2>
    <NuxtLink to="/" text-link text-xl @click="clearError">
      go back
    </NuxtLink>
  </main>
</template>
