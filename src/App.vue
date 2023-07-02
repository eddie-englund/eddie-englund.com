<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';
const open = useState('menu-open', () => false);
</script>

<template>
  <div class="bg-bg text-main oveflow-hidden min-h-screen">
    <div class="mx-auto px-10 xl:w-2/4 2xl:px-40">
      <bars-3-icon
        class="stroke-light fixed right-10 top-5 w-8 lg:hidden"
        @click="open = true"
      />
      <header-component :nav-open="open" @close="open = false" />
      <nuxt-page />
    </div>
  </div>
</template>
