<script lang="ts" setup>
const route = useRoute();
const item = (route.params.slug[0] as string) ?? 'Missing article...';

const crumbs = [
  { to: '/', name: 'Home' },
  { to: '/blog', name: 'Blog' },
  { to: item, name: 'Article' },
];
</script>

<template>
  <main class="pb-6">
    <bread-crumb-component :crumbs="crumbs" />
    <ContentDoc
      class="prose lg:prose-lg prose-invert prose-a:text-link mt-10"
    />
  </main>
</template>
