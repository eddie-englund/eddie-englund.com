<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const route = useRoute();
const item = (route.params.slug[0] as string) ?? 'Missing article...';

interface Article extends ParsedContent {
  title: string;
}

const article = await queryContent<Article>(`blog/${item}`).findOne();

const crumbs = [
  { to: '/', name: 'Home' },
  { to: '/blog', name: 'Blog' },
  { to: item, name: article.title || 'Article' },
];
</script>

<template>
  <main class="py-20 lg:pt-0">
    <bread-crumb-component :crumbs="crumbs" />
    <content-doc
      class="prose prose-invert mt-10 lg:prose-lg prose-a:text-link prose-img:rounded"
    />
  </main>
</template>
