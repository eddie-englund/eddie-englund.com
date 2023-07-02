<script lang="ts" setup>
import {
  ChatBubbleLeftEllipsisIcon,
  FolderIcon,
  DocumentTextIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

defineProps({
  navOpen: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['close']);
</script>

<template>
  <header
    class="bg-bg animate-auto fixed right-0 top-0 flex min-h-full w-60 flex-col gap-3 p-10 align-middle transition transition-all duration-300 ease-out lg:relative lg:left-0 lg:right-auto lg:w-fit lg:flex-row lg:pl-0"
    :class="navOpen ? 'translate-x-0' : ' translate-x-full lg:translate-x-0'"
  >
    <x-mark-icon
      class="stroke-light w-8 border-white lg:hidden"
      @click="emit('close')"
    />
    <nuxt-link to="/">
      <h2
        class="text-headerText hover:text-link hidden text-base text-lg font-medium ease-in-out hover:underline lg:block"
      >
        Eddie Englund
      </h2>
      <h2
        class="text-headerText text-purple hover:text-link block text-base text-lg font-medium ease-in-out hover:underline lg:hidden"
      >
        Home
      </h2>
    </nuxt-link>
    <header-item-with-icon title="Projects" to="/projects">
      <folder-icon
        class="stroke-headerText group-hover:stroke-link w-4 ease-in-out"
      />
    </header-item-with-icon>
    <header-item-with-icon title="Blog" to="/blog">
      <document-text-icon
        class="stroke-headerText group-hover:stroke-link w-4 ease-in-out"
      />
    </header-item-with-icon>
    <header-item-with-icon title="Contact" to="/contact">
      <chat-bubble-left-ellipsis-icon
        class="stroke-headerText group-hover:stroke-link w-4 ease-in-out"
      />
    </header-item-with-icon>
  </header>
</template>
