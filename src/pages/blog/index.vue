<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface BlogContent extends ParsedContent {
  title: string;
  description: string;
  date: string;
}

const { data } = await useAsyncData('blog-home', () =>
  queryContent<BlogContent>('/blog')
    .only(['title', 'date', 'description', '_path'])
    .sort({ date: 1 })
    .find()
);
</script>

<template>
  <div class="py-20 lg:pt-0">
    <h1 class="text-3xl font-bold text-white">Blog</h1>
    <p class="text-lg text-main">Here I write about whatever I feel like!</p>
    <div class="mt-10 grid gap-4 lg:mt-14">
      <card-component
        v-for="article in data"
        :key="article._path"
        :title="article.title"
        :text="article.description"
        :to="article._path"
      />
    </div>
  </div>
</template>
