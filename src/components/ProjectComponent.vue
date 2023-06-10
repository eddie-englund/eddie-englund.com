<script lang="ts" setup>
defineProps({ title: String, text: String })
</script>

<template>
  <div class="bg-cardBackground flex align-middle rounded">
    <div class="w-1/5 bg-cardBackgroundDarker flex items-center justify-center rounded-l">
      <slot />
    </div>
    <div class="w-4/5 p-5 grid gap-2">
      <h3 class="text-headerText text-base font-medium">{{ title }}</h3>
      <p class="text-main text-sm">{{ text }}</p>
    </div>
  </div>
</template>