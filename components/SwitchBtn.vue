<template>
  <div class="flex items-center mt-2">
    <div class="relative" @click="subSwitch">
      <input type="checkbox" class="sr-only toggle-checkbox">
      <div 
        class="block w-12 h-6 rounded-full" 
        :class="[subscribe.status ? 'bg-primary' : 'bg-stroke']"></div>
      <div 
        class="dot w-[22px] h-[22px]" 
        :class="[subscribe.status ? 'translate-x-6' : 'translate-x-0']"></div>
    </div>
    <label for="toggle" class="flex items-center ml-3 font-normal">
      {{ option }}
    </label>
  </div>    
</template>

<script setup>
  const { subscribe, option } = defineProps({
    subscribe: {
      type: Object,
      required: true,
      default: {}
    },
    option: {
      type: String,
      required: true,
      default: ''
    }
  })

  const subSwitch = () => { subscribe.status = !subscribe.status }
</script>

<style lang="scss" scoped>

</style>
