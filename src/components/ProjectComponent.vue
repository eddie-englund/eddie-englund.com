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
    class="bg-cardBackground flex rounded align-middle duration-150 ease-in-out hover:cursor-pointer hover:opacity-80"
    @click="router.push(`/projects/${to}`)"
  >
    <div
      class="bg-cardBackgroundDarker flex w-1/5 items-center justify-center rounded-l"
    >
      <slot />
    </div>
    <div class="grid w-4/5 gap-2 p-5">
      <h3 class="text-headerText text-base font-medium">{{ title }}</h3>
      <p class="text-main text-sm">{{ text }}</p>
    </div>
  </div>
</template>
