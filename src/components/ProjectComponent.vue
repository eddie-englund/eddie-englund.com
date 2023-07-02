<script lang="ts" setup>
defineProps({
  title: { type: String, default: 'Loading...' },
  text: { type: String, default: 'Loading...' },
  to: { type: String, default: '404' },
});

const router = useRouter();
</script>

<template>
  <div
    class="bg-cardBackground flex flex-col rounded align-middle duration-150 ease-in-out hover:cursor-pointer hover:opacity-80 lg:flex-row"
    @click="router.push(`/projects/${to}`)"
  >
    <div
      class="bg-cardBackgroundDarker flex items-center justify-center rounded-l p-5 lg:w-1/5 lg:p-0"
    >
      <slot />
    </div>
    <div class="grid gap-2 p-5 lg:w-4/5">
      <h3 class="text-headerText text-lg font-medium">
        {{ title }}
      </h3>
      <p class="text-main text-sm">{{ text }}</p>
    </div>
  </div>
</template>
