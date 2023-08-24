<template>
  <div v-for="card in cards" :key="card.name" class="flex justify-between max-w-[476px] box-border rounded-2xl text-sm drop-shadow-lg bg-bg-lihgt p-6">
    <div class="flex flex-col justify-between gap-1 max-w-[348px] pr-6">
      <div class="text-disabled">{{ card.name }}</div>
      <div class="text-xl font-medium">{{ card.title }}</div>
      <div class="text-text-fade">{{ card.description }}</div>
      <div v-for="option in card.options">
        <div class="flex">
          <img class="mr-2" src="images/icons/check.svg" alt="check">
          {{ option }}
        </div>
      </div>
      <label for="toggle" class="flex items-center cursor-pointer">
        <div class="relative">
          <input type="checkbox" id="toggle" class="sr-only toggle-checkbox">
          <div class="block bg-stroke w-12 h-6 rounded-full"></div>
          <div class="dot absolute left-px top-px bg-bg-lihgt w-[22px] h-[22px] rounded-full transition"></div>
        </div>
        <div class="ml-3 font-normal">Подписаться на все рассылки</div>
      </label>
    </div>
    <div class="w-20 h-20 min-w-[40px]">
      <img :src="card.image" :alt="card.name">
    </div>
    
  </div>
</template>

<script setup>
  const props = defineProps({
    cards: {
      type: Array,
      required: true,
    }
  })
</script>

<style scoped></style>
