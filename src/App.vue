<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';
const open = useState('menu-open', () => false);
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-bg text-main">
    <div class="mx-auto px-10 xl:max-w-[125ch] 2xl:px-40">
      <bars-3-icon
        class="fixed right-10 top-5 w-8 stroke-light lg:hidden"
        @click="open = true"
      />
      <header-component :nav-open="open" @close="open = false" />
      <div>
        <nuxt-page />
      </div>
    </div>
  </div>
</template>
