<script lang="ts" setup>
import { RouterLink } from 'vue-router';

defineProps({
  msg: { type: String, required: true },
  routePath: { type: String, required: true },
});
</script>

<template>
  <RouterLink :to="routePath" class="icon-link">
    <slot class="icon"></slot>
    {{ msg }}
  </RouterLink>
</template>

<style lang="scss">
@use '../scss/text.scss' as t;

.icon-link {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 5%;

  a {
    @include t.font-weight-regular();
  }
}

.icon {
  width: 1.5rem;
}
</style>
