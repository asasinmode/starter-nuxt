<template>
  <div absolute translate-center class="left-1/2 top-1/2">
    <div relative>
      <DependencyIcon :index="1" href="https://vuejs.org/guide/extras/reactivity-transform.html" text-square>
        <span>reactivity</span>
        <span>transform</span>
      </DependencyIcon>
      <DependencyIcon :index="2" href="https://github.com/unocss/unocss" title="unocss" icon="unocss" />
      <DependencyIcon :index="3" href="https://eslint.org/" title="eslint" icon="i-logos-eslint" />
      <DependencyIcon :index="4" href="https://www.typescriptlang.org/" title="typescript" icon="i-logos-typescript-icon" />
      <DependencyIcon :index="5" href="https://pinia.vuejs.org/" title="pinia" icon="pinia" />
    </div>
  </div>
</template>
