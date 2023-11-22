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
    class="flex min-h-[12rem] flex-col gap-4 rounded-xl border-2 border-cardBackground bg-cardBackground p-5 align-middle transition-all duration-150 ease-in-out hover:cursor-pointer hover:border-cardBackgroundDarker hover:bg-cardBackgroundDarker/20"
    @click="router.push(to)"
  >
    <h3 class="text-lg font-medium text-headerText">
      {{ title }}
    </h3>
    <p class="text-md text-main">{{ text }}</p>
  </div>
</template>
