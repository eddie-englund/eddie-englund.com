<script lang="ts" setup>
const { data } = await useAsyncData('projects', () =>
  queryContent('/projects').find()
);
</script>

<template>
  <div class="py-20 lg:pt-0">
    <h1 class="text-3xl font-bold text-white">Projects</h1>
    <p class="text-lg text-main">Just the good ones 😉</p>
    <div class="mt-10 grid gap-4 lg:mt-14">
      <project-component
        v-for="project in data"
        :key="project._path"
        :title="project.title"
        :text="project.description"
        :to="project._path"
      />
    </div>
  </div>
</template>
