<script lang="ts" setup>
import largeCardComponent from '@/components/large-card-component.vue';
import InlineSvg from 'vue-inline-svg';
import aiqlogo from '../assets/aiq-mint.svg';
import { sl, accountiq } from '@/assets/type.json';
import { useRouter } from 'vue-router';
import type { OrderedCrumb } from '@/components/breadcrumb-component.vue';
const router = useRouter();
</script>

<template>
  <div class="projects-container">
    <h1>Projects</h1>
    <p>Just the good ones 😉</p>

    <div class="projects">
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
    <div class="end">
      <p>And that's it! I promise these are my favorite ones, hence the few ones listed.</p>
      <p>
        If you really still want to see more of my stuff... See my
        <a href="https://github.com/eddie-englund">Github</a>.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/scss/colors.scss' as c;
@use '@/scss/text.scss' as t;

.projects-container {
  .projects {
    display: grid;
    gap: 10%;
    min-height: 15rem;
    margin-top: 10%;

    &:nth-last-child {
      margin-top: 5%;
    }
  }

  .aiq-logo {
    width: 4rem;
  }

  .sl-logo {
    color: c.$sl-blue;
    @include t.font-weight-medium();
  }

  .end {
    text-align: center;
    margin-top: 20%;
  }
}
</style>
