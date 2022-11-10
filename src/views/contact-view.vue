<script lang="ts" setup>
import Avatar from '@/assets/me.jpg';
import breadcrumbComponent from '@/components/breadcrumb-component.vue';
</script>

<template>
  <section class="contact-wrapper">
    <breadcrumb-component :crumbs="[]" />
    <div class="inner-wrapper">
      <div class="left">
        <h1>Want to get in contact with me?</h1>
        <p>Feel free to reach out on <a href="https://www.linkedin.com/in/eddie-englund/">LinkedIn</a>!</p>
      </div>
      <div class="right">
        <img :src="Avatar" alt="Eddie Englund in a suit" />
        <p>That's me 👆</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-wrapper .inner-wrapper {
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
  }
  .right img {
    max-width: 15rem;
    border-radius: 8px;
  }
}

@media only screen and (max-width: 800px) {
  .contact-wrapper .inner-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right {
    margin-top: 10%;
  }
}
</style>
