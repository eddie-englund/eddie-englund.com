<script lang="ts" setup>
import data from '@/assets/projects.json';
</script>

<template>
  <div class="mt-12 w-4/5 mx-auto">
    <h1 class="text-3xl text-white font-bold">
      Hi there! My name is Eddie and<br/>
      I am a full-stack developer
    </h1>
    <div class="flex flex-col gap-3 mt-4">
      <p class="text-main">I am a Stockholm based full stack developer, with experience in Vue, Docker, NodeJs, Typescript, and Scala.</p>
      <p class="text-main">I’m passionate at good UX and Design in all forms and shapes. 
        I’m also a guitarist and a huge music nerd who spends a bit too much money on various music related items…</p>
      <p class="text-main">Currently I work at DevCode AB (a subsidiary of WorldLine Global), where I work as a full-stack developer and designer for the product called AccountIQ.
        I’m super happy with it right now as I get to have influence over technical decisions made,
         the team is really agile, and it’s an environment where I can get lots of experience!
      </p>
    </div>
     <div class="grid gap-4 mt-10">
      <project-component
        v-for="project in data.projects"
        :key="project.header"
        :title="project.header"
        :text="project.msg"
      >
        <img v-if="project.img" src="~/assets/aiq-mint.svg" :alt="project.header" class="w-16">
        <h2 v-if="project.imgText" class="text-slBlue text-3xl">
          {{ project.imgText }}
        </h2>
      </project-component>
     </div>
    <div>
      
    </div>
  </div>
</template>
