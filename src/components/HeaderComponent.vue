<script lang="ts" setup>
import { ChatBubbleLeftEllipsisIcon, FolderIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <header class="flex gap-3 pt-10 align-middle w-3/4 mx-auto">
    <nuxt-link to="/">
      <h2 class="text-headerText text-base font-medium underline hover:text-link ease-in-out">
        Eddie Englund
      </h2>
    </nuxt-link>
    <header-item-with-icon title="Projects" to="/projects">
      <folder-icon class="w-4 stroke-headerText group-hover:stroke-link ease-in-out" />
    </header-item-with-icon>
    <header-item-with-icon title="Contact" to="/contact">
      <chat-bubble-left-ellipsis-icon class="w-4 stroke-headerText group-hover:stroke-link ease-in-out" />
    </header-item-with-icon>
    <header-item-with-icon title="Blog" to="/blog">
      <document-text-icon class="w-4 stroke-headerText group-hover:stroke-link ease-in-out" />
    </header-item-with-icon>
  </header>
</template>