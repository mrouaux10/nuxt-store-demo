<template>
  <!-- No tienen que matchear con el nombre de ningun archivo ni carpeta de pages -->
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">NUXT STORE DEMO</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <!-- Page content -->
  <div class="mx-auto p-4">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>