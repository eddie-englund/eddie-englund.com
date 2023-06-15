<script lang="ts" setup>
import data from '@/assets/projects.json';
</script>

<template>
  <div class="pt-12">
    <h1 class="text-3xl font-bold text-white lg:hidden">
      Hi there! My name is Eddie and I am a full-stack developer
    </h1>
    <h1 class="hidden text-4xl font-bold text-white lg:block">
      Hi there! My name is Eddie and I am a full-stack developer
    </h1>
    <div class="mt-4 flex flex-col gap-3 lg:mt-10">
      <p class="text-main lg:text-lg">
        I am a Stockholm based full stack developer, with experience in Vue,
        Docker, NodeJs, Typescript, and Scala.
      </p>
      <p class="text-main lg:text-lg">
        I’m passionate at good UX and Design in all forms and shapes. I’m also a
        guitarist and a huge music nerd who spends a bit too much money on
        various music related items…
      </p>
      <p class="text-main lg:text-lg">
        Currently at WorldLine Global, where I work as a full-stack developer
        and designer for the product called AccountIQ. I enjoy the team and the
        product as I get to have influence over technical decisions made, the
        team is really agile, and it’s an environment where I can get lots of
        experience!
      </p>
    </div>
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
