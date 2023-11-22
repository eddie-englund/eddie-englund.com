<script lang="ts" setup>
interface Props {
  date: string;
  title: string;
  to: string;
  description: string;
}

defineProps<Props>();

const router = useRouter();
</script>

<template>
  <div
    class="flex flex-col rounded-lg bg-cardBackgroundDarker p-5 align-middle transition-all duration-150 ease-in-out hover:cursor-pointer hover:bg-cardBackground hover:opacity-80"
    @click="router.push({ path: to })"
  >
    <h3 class="text-lg font-medium text-headerText">{{ title }}</h3>
    <p class="mt-2 text-sm text-main">{{ description }}</p>
  </div>
</template>
