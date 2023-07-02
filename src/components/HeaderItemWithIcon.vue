<script lang="ts" setup>
defineProps({
  title: { type: String, default: 'Loading...' },
  to: { type: String, default: '404' },
});
</script>

<template>
  <nuxt-link :to="to" class="group flex gap-1 align-middle ease-in-out">
    <slot />
    <p
      class="text-headerText group-hover:text-link duration:150 text-lg font-medium group-hover:underline"
    >
      {{ title }}
    </p>
  </nuxt-link>
</template>
