<script lang="ts" setup>
import data from '@/assets/projects.json';
</script>

<template>
  <div class="py-20 lg:pt-0">
    <h1 class="break-words text-2xl font-bold leading-8 text-white lg:text-4xl">
      Hi there! My name is Eddie and I am a full-stack developer
    </h1>
    <div class="mt-4 flex flex-col gap-3 lg:mt-6">
      <p class="break-words text-main lg:text-lg">
        I am a full-stack developer based in Stockholm, possessing expertise in
        Vue, Docker, NodeJs, Typescript, and Scala. My enthusiasm extends to
        cultivating exceptional user experiences and design across diverse
        manifestations.
        <br />
        <br />

        Beyond my professional pursuits, I am an avid guitarist and a devoted
        music aficionado, occasionally indulging in the acquisition of various
        music-related items. In my current role at WorldLine Global, I serve as
        a full-stack developer and designer for the AccountIQ product.
        <br />
        <br />

        This position affords me the opportunity to wield influence over
        technical decisions, participate in an agile team environment, and
        accrue valuable experience
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
        <h2 v-if="project.imgText" class="text-3xl text-slBlue">
          {{ project.imgText }}
        </h2>
      </project-component>
    </div>
  </div>
</template>

<style>
.thing {
  color: #b4b1c6;
}
</style>
