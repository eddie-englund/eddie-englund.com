<script lang="ts" setup>
import breadcrumbComponent from '../components/breadcrumb-component.vue';
import type { OrderedCrumb } from '@/components/breadcrumb-component.vue';

interface BulletSection {
  title: string;
  items: string[];
}

interface ProjectProps {
  crumbs: OrderedCrumb[];
  title: string;
  textBody: string;
  bulletPoints: BulletSection[];
  projectUrl: string;
}

defineProps<ProjectProps>();
</script>

<template>
  <article class="project-container">
    <breadcrumb-component :crumbs="crumbs" />
    <h1>{{ title }}</h1>
    <a :href="projectUrl">Project website</a>

    <section class="about">
      <p><slot></slot></p>
      <p>{{ textBody }}</p>
    </section>
    <section class="bullet-point" v-for="point in bulletPoints" :key="point.title">
      <h3>{{ point.title }}</h3>
      <ul>
        <li v-for="bullet in point.items" :key="bullet">
          <p>{{ bullet }}</p>
        </li>
      </ul>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@use '@/scss/colors.scss' as c;
.project-container {
  li {
    list-style: disc;
    color: c.$text;
  }
}
</style>
