<script setup lang="ts">
import Parallax from '../components/Parallax.vue'
</script>

<template>
  <div class="relative min-h-150vh bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Data to enrich your</span>
              {{ ' ' }}
              <span class="block text-#165dff xl:inline">online business</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a-button
                  size="large"
                  type="primary"
                  class="w-full h-12 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a-button>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <router-link to="#">
                  <a-button
                    size="large"
                    type="secondary"
                    class="w-full h-12 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a-button>
                </router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Parallax class="absolute top-1/3 right-1/5 z-999">
      <div class="w-4 h-4 rounded-full bg-indigo-700" data-rellax-speed="3"></div>
    </Parallax>
  </div>
</template>
