<script setup lang="ts">
import ChatContainer from '../components/Chat/ChatContainer.vue'
import ChatBox from '../components/Chat/ChatBox.vue'
</script>

<template>
  <div class="flex flex-col w-full mx-auto">
    <ChatContainer>
      <ChatBox />
      <!-- <ChatForm /> -->
    </ChatContainer>
  </div>
</template>
