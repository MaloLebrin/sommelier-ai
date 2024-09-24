<template>
<div
  class="gap-3 mb-2"
  :class="[isLoading ? 'flex' : 'hidden']"
>
  <div
    class="flex items-center px-4 py-4 space-x-1 bg-white rounded-tl-sm rounded-2xl"
  >
    <div
      class="w-2 h-2 bg-gray-400 rounded-full animate-bounce blue-circle"
    />
    <div
      class="w-2 h-2 bg-gray-400 rounded-full animate-bounce green-circle"
    />
    <div
      class="w-2 h-2 bg-gray-400 rounded-full animate-bounce red-circle"
    />
  </div>
</div>
</template>

<script setup lang="ts">
interface Props {
  isLoading: boolean
}

withDefaults(defineProps<Props>(), {
  isLoading: false,
})
</script>

<style scoped>
.blue-circle{
		animation-delay: 0.1s;
	}
	.green-circle{
		animation-delay: 0.2s;
	}
	.red-circle{
		animation-delay: 0.3s;
	}
</style>
