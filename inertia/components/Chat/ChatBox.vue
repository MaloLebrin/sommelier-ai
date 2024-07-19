<template>
<div
  ref="chatBox"
  class="no-scroll-bar relative h-full w-full sm:max-h-[800px] sm:max-w-[777px] bg-white bg-opacity-50 backdrop-blur rounded-3xl overflow-y-scroll shadow-lg pt-4 px-6 pb-10 mt-4"
>
  <!-- <button
    v-if="!arrivedState.bottom && state.conversation?.queries?.length > 0"
    class="sticky inset-x-0 top-0 flex items-center w-auto gap-3 pr-5 transition-all duration-200 ease-in-out bg-white border rounded-full shadow-xl group border-zinc-100"
    :class="{
      'opacity-0': bottom,
      'opacity-100': !bottom,
    }"
    @click="scrollToBottom"
  >
    <ArrowDownCircleIcon class="w-[35px] h-[35px] text-blue-500" />
    <span
      class="text-xs uppercase group-hover:text-blue-600 text-zinc-700"
    >
      {{ t('base.scrollToBottom') }}
    </span>
  </button> -->

  <template v-if="state.conversation?.queries?.length === 0">
    <ChatMessage text="Bonjour, je suis Sommelier AI" />
    <ChatMessage
      text="Que voulez vous ?"
      :is-first="false"
    />
  </template>
  <template v-else>
    <ChatMessage
      v-for="(message, index) in state.conversation?.queries"
      :key="message.id"
      :author="message.userId"
      :text="message.query"
      :is-first="index === 0"
    />
  </template>
  <ChatLoadingMessage :is-loading="state.isLoading" />
  <!-- <DonateMessage /> -->
</div>
</template>

<script setup lang="ts">
import ChatMessage from './ChatMessage.vue'
import ChatLoadingMessage from './ChatLoadingMessage.vue'
// import { useScroll } from '@vueuse/core'
// import { ArrowDownCircleIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';
const state = {
  isLoading: false,
  conversation: {
    queries: [],
  },
}
const bottom = ref(false)
// const { state } = useConversation()
// const { t } = useI18n()

const chatBox = ref<null | HTMLDivElement>(null)
// const { y, arrivedState } = useScroll(chatBox, { behavior: 'smooth' })
// const { bottom } = toRefs(arrivedState)

// function scrollToBottom() {
//   if (chatBox.value) {
//     y.value = chatBox.value.scrollHeight
//   }
// }

// onMounted(() => {
//   scrollToBottom()
// })
</script>

<style scoped>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scroll-bar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scroll-bar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
