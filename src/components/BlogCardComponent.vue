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
    class="bg-cardBackground flex flex-col rounded p-5 align-middle duration-150 ease-in-out hover:cursor-pointer hover:opacity-80"
    @click="router.push({ path: to })"
  >
    <h3 class="text-headerText text-base font-medium">{{ title }}</h3>
    <p class="text-main mt-2 text-sm">{{ description }}</p>
  </div>
</template>
