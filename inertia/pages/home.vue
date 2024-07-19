<script setup lang="ts">
import ChatContainer from '../components/Chat/ChatContainer.vue'
const state = {
  conversationId: 1,
}

const userId = 1
</script>

<template>
<div class="flex flex-col w-full mx-auto">
  <ChatContainer>
    <p class="text-white ">ezlherh</p>
    <!-- <ChatBox />
    <template v-if="state.conversationId">
      <ChatForm
        :conversation-id="state.conversationId"
        :user-id="userId"
      />
    </template> -->
  </ChatContainer>
</div>
</template>
