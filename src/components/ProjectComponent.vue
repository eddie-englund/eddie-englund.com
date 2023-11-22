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
    class="grid min-h-[12rem] flex-col gap-2 rounded-xl border-2 border-cardBackgroundDarker bg-cardBackgroundDarker p-5 align-middle transition-all duration-150 ease-in-out hover:cursor-pointer hover:border-cardBackground hover:bg-cardBackground/20 lg:w-4/5 lg:flex-row"
    @click="router.push(`/projects/${to}`)"
  >
    <h3 class="text-lg font-medium text-headerText">
      {{ title }}
    </h3>
    <p class="text-md text-main">{{ text }}</p>
  </div>
</template>
