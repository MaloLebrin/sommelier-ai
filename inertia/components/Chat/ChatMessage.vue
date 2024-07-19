<template>
<div
  class="flex flex-col w-full gap-3 mb-2"
  :class="{
    'justify-end items-start': author === 0,
    'justify-start items-end': author === 1,
    'pb-4': isLast,
  }"
>
  <div
    v-if="author === 0 && isFirst"
    class="flex items-center gap-5 mt-4"
  >
    <ChatAuthorImage />
    <ChatAuthorName />
  </div>
  <div
    v-if="author === 1 && isFirst"
    class="mt-4"
  />
  <div
    class="flex items-center gap-5 w-auto sm:max-w-[60%] max-w-[85%] rounded-2xl px-4 py-2"
    :class="{
      'bg-blue-600 rounded-br-sm': author === 1,
      'bg-white rounded-tl-sm': author === 0,
    }"
  >
    <p
      class="font-light"
      :class="{
        'text-white': author === 1,
        'text-gray-800': author === 0,
      }"
    >
      {{ text }}
    </p>
  </div>
</div>
</template>

<script setup lang="ts">
import ChatAuthorName from './ChatAuthorName.vue'
import ChatAuthorImage from './ChatAuthorImage.vue'

defineProps({
  author: {
    type: Number,
    required: false,
    default: 0,
  },
  text: {
    type: String,
    required: true,
    default: 'Hello, I am Sommelier Ai.',
  },
  items: {
    type: Array,
    required: false,
    default: () => [],
  },
  isFirst: {
    type: Boolean,
    required: false,
    default: true,
  },
  isLast: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
