<template>
  <div>
    <p class="mx-auto text-center justify-center" v-if="pending">Loading</p>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product "/>
      </div>
    </div>
  </div>
</template>

<script setup>
  /*
    Todo el código dentro del script setup se puede ejecutar tanto en el servidor (para injectarlo en el template y enviarlo renderizado),
    como también en el cliente cuando ya tenemos la página renderizada y navegamos a otra.
    Y esto es importantee porque hay ciertas declaraciones que no se pueden ejecutar en ambos lados.
    El objeto window funcinona en el cliente pero no existe en el servidor.
  */

  const { data: products, pending } = await useLazyFetch('/api/products', {
    transform: (products) => products.data
  })

  /* Permite definir propiedades de tipo head (título, links, metadata). Puedo sobreescribir los que se heredan de nuxt.config.ts */
  useHead({ title: 'Productos' })

  /* Permite aplicar layouts a nivel de componente */
  definePageMeta({ layout: 'custom' })

</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>