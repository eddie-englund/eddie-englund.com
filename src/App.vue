<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import iconLink from './components/icon-link-component.vue';
import { FolderIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="app-wrapper">
    <div class="app-inner-wrapper">
      <header>
        <nav>
          <router-link class="logo" to="/">Eddie Englund</router-link>
          <icon-link msg="Projects" routePath="/projects">
            <folder-icon class="icon" />
          </icon-link>
          <iconLink msg="Contact" routePath="/contact">
            <chat-bubble-left-ellipsis-icon class="icon" />
          </iconLink>
        </nav>
      </header>
      <router-view class="content" />
    </div>
  </div>
</template>

<style lang="scss">
@use './scss/global.scss';
@use './scss/colors.scss' as c;
@use './scss/text.scss' as t;

body {
  background-image: url('./assets/bg.svg');
  background-size: contain;
}

nav {
  display: flex;
  gap: 3rem;

  a {
    color: c.$text-link-muted;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: c.$text-link;
    }
  }

  .router-link-active {
    text-decoration: underline;
    color: c.$text-link;
  }

  .logo {
    color: c.$text-light;
  }
}

.app-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 2.5%;
}

.app-inner-wrapper {
  max-width: 750px;
  min-width: 750px;
  overflow: hidden;
}

.content {
  padding-top: 10%;
}
</style>
