<script setup lang="ts">
useHead({
  title: 'nuxt starter',
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.webp' }],
  meta: [{ name: 'description', content: 'asasinmode nuxt starter' }],
  script: [{
    children: `const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const setting = localStorage.getItem('color-schema') || 'auto'
if (setting === 'dark' || (prefersDark && setting !== 'light'))
document.documentElement.classList.toggle('dark', true)`,
  }],
})
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
