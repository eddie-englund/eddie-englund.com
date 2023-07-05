<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';
const open = useState('menu-open', () => false);
</script>

<template>
  <div
    class="bg-bg bg-image text-main oveflow-hidden min-h-screen bg-[url('/assets/bg.svg')]"
  >
    <div class="mx-auto px-10 xl:max-w-[125ch] 2xl:px-40">
      <bars-3-icon
        class="stroke-light fixed right-10 top-5 w-8 lg:hidden"
        @click="open = true"
      />
      <header-component :nav-open="open" @close="open = false" />
      <div class="flex justify-center">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>
