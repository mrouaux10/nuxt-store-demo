<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>

const { id } = useRoute().params
const uri = '/api/products/' + id
const { data: product } = await useFetch(uri, {
  transform: (product) => product.data
})

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado', fatal: true })
}

definePageMeta({ layout: 'custom' })

useHead({ title: 'Detalle de producto' })

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