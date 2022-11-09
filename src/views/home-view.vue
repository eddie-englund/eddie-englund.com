<script setup lang="ts">
import largeCardComponent from '@/components/large-card-component.vue';
import InlineSvg from 'vue-inline-svg';
import aiqlogo from '../assets/aiq-mint.svg';
import { sl, accountiq } from '@/assets/type.json';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <main class="home-view">
    <h1>
      Hi there! My name is Eddie and<br />
      I am a full-stack developer
    </h1>
    <p>
      I am a Stockholm based full stack developer, with experience in Vue, Docker, NodeJs, Typescript, and Scala.
      <br /><br />
      I’m passionate at good UX and Design in all forms and shapes. I’m also a guitarist and a huge music nerd who
      spends a bit too much money on various music related items… <br /><br />

      Currently I work at DevCode AB (a subsidiary of WorldLine Global), where I work as a Junior developer and designer
      for the product called AccountIQ. I’m super happy with it right now as I get to have influence over technical
      decisions made, the team is really agile, and it’s an environment where I can get lots of experience!
    </p>
    <div class="cards-container">
      <large-card-component
        :msg="accountiq.msg"
        :header="accountiq.header"
        @click.prevent="router.push('/projects/accountiq')"
      >
        <inline-svg :src="aiqlogo" class="aiq-logo" />
      </large-card-component>
      <large-card-component :msg="sl.msg" :header="sl.header" @click.prevent="router.push('/projects/sl')">
        <h1 class="sl-logo">SL</h1>
      </large-card-component>
    </div>
    <p class="end">You've made it to the end of the first page! have you explored the others?</p>
  </main>
</template>

<style lang="scss">
@use '@/scss/colors.scss' as c;
@use '@/scss/text.scss' as t;

.home-view {
  max-width: 100%;

  .aiq-logo {
    width: 4rem;
  }

  .sl-logo {
    color: c.$sl-blue;
    @include t.font-weight-medium();
  }

  .end {
    margin-top: 30%;
    text-align: center;
  }
}

.cards-container {
  display: grid;
  gap: 10%;
  min-height: 15rem;
  margin-top: 10%;

  &:nth-last-child {
    margin-top: 5%;
  }
}
</style>
