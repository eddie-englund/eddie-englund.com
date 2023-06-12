<script lang="ts" setup>
import {
  ChatBubbleLeftEllipsisIcon,
  FolderIcon,
  DocumentTextIcon,
} from '@heroicons/vue/24/outline';
</script>

<template>
  <header class="flex gap-3 pt-10 align-middle">
    <nuxt-link to="/">
      <h2
        class="text-headerText hover:text-link text-base text-lg font-medium ease-in-out hover:underline"
      >
        Eddie Englund
      </h2>
    </nuxt-link>
    <header-item-with-icon title="Projects" to="/projects">
      <folder-icon
        class="stroke-headerText group-hover:stroke-link w-4 ease-in-out"
      />
    </header-item-with-icon>
    <header-item-with-icon title="Contact" to="/contact">
      <chat-bubble-left-ellipsis-icon
        class="stroke-headerText group-hover:stroke-link w-4 ease-in-out"
      />
    </header-item-with-icon>
    <header-item-with-icon title="Blog" to="/blog">
      <document-text-icon
        class="stroke-headerText group-hover:stroke-link w-4 ease-in-out"
      />
    </header-item-with-icon>
  </header>
</template>
