<script setup lang="ts">
useHead({
  title: 'nuxt starter',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

 <style>
#__nuxt {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4rem auto 4rem;
  column-gap: 1rem;
}
</style>
