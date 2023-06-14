<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface BlogContent extends ParsedContent {
  title: string;
  description: string;
  date: string;
}

const { data } = await useAsyncData('blog-hmoe', () =>
  queryContent<BlogContent>('/blog')
    .only(['title', 'date', 'description', '_path'])
    .sort({ date: 1 })
    .find()
);
</script>

<template>
  <div class="mt-12">
    <h1 class="text-3xl font-bold text-white">Blog</h1>
    <p class="text-main text-lg">Here I write about whatever I feel like!</p>
    <div class="mt-10 grid gap-4 lg:mt-14">
      {{ data }}
      <blog-card-component
        v-for="article in data"
        :key="article.title"
        :title="article.title"
        :description="article.description"
        :date="article.date"
        :to="article._path"
      />
    </div>
  </div>
</template>
