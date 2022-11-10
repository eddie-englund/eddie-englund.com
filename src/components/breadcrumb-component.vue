<script lang="ts" setup>
import { RouterLink } from 'vue-router';

export interface OrderedCrumb {
  name: string;
  to: string;
}
defineProps<{ crumbs: OrderedCrumb[] }>();
</script>

<template>
  <div class="breadcrumb-container">
    <router-link v-for="(crumb, index) in crumbs" :key="crumb.to" :to="crumb.to">
      <span>{{ crumb.name }}</span> {{ index !== crumbs.length - 1 ? '/ ' : ' ' }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/colors.scss' as c;
.breadcrumb-container {
  a {
    text-decoration: none;
    color: c.$text-link-muted;
    transition: all 0.3s ease;

    &:hover {
      span {
        color: c.$text-link;
        text-decoration: underline;
      }
    }
  }
}
</style>
