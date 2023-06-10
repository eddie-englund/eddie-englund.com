<script lang="ts" setup>
defineProps({ title: String, to: String })
</script>

<template>
  <nuxt-link :to="to" class="flex gap-1 align-middle group ease-in-out">
    <slot />
    <p class="text-headerText group-hover:text-link group-hover:underline font-medium">
      {{ title }}
    </p>
  </nuxt-link>
</template>