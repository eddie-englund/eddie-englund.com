<script lang="ts" setup>
interface OrderedCrumb {
  name: string;
  to: string;
}

defineProps<{ crumbs: OrderedCrumb[] }>();
</script>

<template>
  <div class="breadcrumb-container">
    <nuxt-link
      v-for="(crumb, index) in crumbs"
      :key="crumb.to"
      :to="crumb.to"
      class="text-link hover:text-linkMuted duration-150 ease-in-out"
    >
      <span>{{ crumb.name }}</span>
      {{ index !== crumbs.length - 1 ? '/ ' : ' ' }}
    </nuxt-link>
  </div>
</template>
