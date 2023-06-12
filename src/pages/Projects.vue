<script lang="ts" setup>
import data from '@/assets/projects.json';
</script>

<template>
  <div class="mt-12">
    <h1 class="text-3xl font-bold text-white">Projects</h1>
    <p class="text-main text-lg">Just the good ones 😉</p>
    <div class="mt-10 grid gap-4 lg:mt-14">
      <project-component
        v-for="project in data.projects"
        :key="project.header"
        :title="project.header"
        :text="project.msg"
        :to="project.to"
      >
        <img
          v-if="project.img"
          src="~/assets/aiq-mint.svg"
          :alt="project.header"
          class="w-16"
        />
        <h2 v-if="project.imgText" class="text-slBlue text-3xl">
          {{ project.imgText }}
        </h2>
      </project-component>
    </div>
  </div>
</template>
