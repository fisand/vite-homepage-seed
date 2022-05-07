<script lang="ts" setup>
// 兼容 vite-ssg
import 'swiper.css'
import 'swiper/css/pagination.css'

const navigation = ref([
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
])
</script>

<template>
  <div class="flex flex-col gap-2 p-6">
    <a v-for="nav in navigation" :href="nav.href" class="flex items-center text-blue-400 hover:text-blue-700 border-b-1">
      <span class="i-carbon:chevron-right"></span>{{ nav.name }}
    </a>
  </div>
</template>
