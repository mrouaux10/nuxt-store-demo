<template>
  <div class="bg-white py-8">
    <h1 class="text-3xl font-bold text-center mb-8">{{ title }}</h1>
    <div class="container mx-auto flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-8">
        <img :src="image" :alt="title" class="w-full h-auto rounded-lg">
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <p class="text-lg leading-relaxed mb-4">{{ description }}</p>
        <h2 class="text-xl font-bold mb-2">Nuestra Historia</h2>
        <p class="text-lg leading-relaxed mb-4">{{ history }}</p>
        <h2 class="text-xl font-bold mb-2">Nuestra Misión</h2>
        <p class="text-lg leading-relaxed mb-4">{{ mission }}</p>
        <h2 class="text-xl font-bold mb-2">Nuestros Valores</h2>
        <ul class="list-disc list-inside">
          <li v-for="(value, key) in values" :key="key" class="text-lg leading-relaxed">{{ value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import data from "./data.js"

  useHead({ title: 'Nosotros' })

  const { title, image, description, history, mission, values } = data

</script>

<style>
  .container {
    display: flex;
    justify-content: space-between;
  }

  .left {
    flex-basis: 50%;
    margin-right: 20px;
  }

  .right {
    flex-basis: 50%;
    text-align: justify;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>