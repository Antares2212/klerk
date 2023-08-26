<template>
  <div v-for="card in cards" :key="card.name" class="cardList">
    <div class="cardItem">
      <div class="text-disabled">{{ card.name }}</div>
      <div class="text-xl font-medium">{{ card.title }}</div>
      <div class="text-fade-2 my-3">{{ card.description }}</div>
      <div class="mb-1" v-for="option in card.options">
        <div class="flex items-start">
          <img class="mr-2 pt-[0.5px]" src="/images/icons/check.svg" alt="check">
          {{ option }}
        </div>
      </div>
      <SwitchBtn :option="card.switch" :subscribe="subscribes[(card.id - 1)]"/>
    </div>
    <div class="cardImage cardImage-xs">
      <img :src="card.image" :alt="card.name">
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    cards: {
      type: Array,
      required: true,
    },
    subscribes: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped></style>
