<script lang="ts" setup>
const route = useRoute();

const item = (route.params.slug[0] as string) ?? 'Missing article...';

const crumbs = [
  { to: '/', name: 'Home' },
  { to: '/projects', name: 'Projects' },
  { to: item, name: item.replace('-', ' ') },
];
</script>

<template>
  <main class="py-20 lg:pt-0">
    <bread-crumb-component :crumbs="crumbs" />
    <ContentDoc
      class="prose lg:prose-lg prose-invert prose-a:text-link mt-10"
    />
  </main>
</template>

<style lang="scss"></style>
