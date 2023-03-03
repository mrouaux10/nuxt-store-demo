<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex flex-col lg:flex-row justify-between items-center w-full">
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¡Bienvenidos a nuestra tienda en línea!
          </h1>
          <p class="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            En nuestra tienda encontrarás una amplia selección de productos de alta calidad a precios muy bajos. Desde ropa y accesorios hasta electrónica y electrodomésticos, ¡tenemos todo lo que necesitas a precios que no encontrarás en ningún otro lugar!
          </p>
          <div class="mt-8 sm:flex">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                ¡Comprar ahora!
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 md:py-4 md:text-lg md:px-10">
                Conócenos
              </a>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <img src="/images/products.jpg" class="w-100 h-auto rounded-lg ml-auto-lg">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>