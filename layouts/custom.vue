<template>
    <!-- No tienen que matchear con el nombre de ningun archivo ni carpeta de pages -->
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/" class="font-bold">NUXT STORE DEMO</NuxtLink>
      </nav>
    </header> 

      <!-- Page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>