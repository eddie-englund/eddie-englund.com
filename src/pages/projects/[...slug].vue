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
      class="prose prose-invert mt-10 lg:prose-lg prose-a:text-link xl:max-w-[125ch]"
    />
  </main>
</template>

<style lang="scss"></style>
