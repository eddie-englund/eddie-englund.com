<script lang="ts" setup>
defineProps({
  header: { type: String, required: true },
  msg: { type: String, required: true },
});
</script>

<template>
  <button class="large-card-container">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <h4>{{ header }}</h4>
      <p>{{ msg }}</p>
    </div>
  </button>
</template>

<style lang="scss">
@use '@/scss/colors.scss' as c;

.large-card-container {
  min-width: 100%;
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-gap: 2rem;
  background-color: c.$card-background;
  max-height: 10rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  padding: 0;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: c.$card-background-darker;
    border-radius: 8px 0 0 8px;
    min-height: 100%;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  text-align: start;

  h4 {
    margin-bottom: 0;
  }

  p {
    margin-top: 1%;
    max-width: 95%;
  }
}
</style>
