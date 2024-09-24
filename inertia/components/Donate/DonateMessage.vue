<template>
<div
  class="flex gap-3 mb-2"
>
  <div
    class="flex items-center w-auto gap-5 px-4 py-2 bg-white rounded-tl-sm rounded-2xl"
  >
    <p class="text-zinc-700">
      <!-- {{ t('donation.supportUS') }} -->
      Vous pouvez soutenir notre travail en faisant une donation.
    </p>
    <DonateLink
      external
      link="https://buy.stripe.com/fZebIRaQu5xUcH6bII"
      target="_blank"
      rel="noopener"
    />
  </div>
</div>
</template>

<script setup lang="ts">
import DonateLink from './DonateLink.vue'
// const { t } = useI18n()
</script>
