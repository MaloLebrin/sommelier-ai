<template>
  <Link external :href="link" target="_blank" rel="noopener"
    class="px-4 py-2 text-sm font-medium text-white capitalize transition duration-300 ease-in-out transform bg-indigo-600 border border-transparent rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 focus-visible:outline-indigo-600 focus:ring-purple-500"
    :class="{ hidden: !link }">
  <!-- {{ t('donation.donate') }} -->
  Soutenir
  </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

interface DonateLinkProps {
  link: string
}

const { link } = defineProps<DonateLinkProps>()
</script>
