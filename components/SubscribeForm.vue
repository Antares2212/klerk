<template>
  <form class="mx-auto w-11/12 mb-4">
    <div class="flex relative">
      <input 
        class="input-form" type="email" name="email" 
        v-model="formData.email" 
        placeholder="Электронная почта">
      <button 
        class="btn-form xs:btn-sm md:btn-md" 
        type="submit" 
        @click.prevent="hadlerSubmite(formData)">
        <span class="xs:hidden md:block">
          Подписаться
        </span>
        <span class="xs:block md:hidden">
          <img src="/images/icons/arrow-right.svg" alt="arrow-right">
        </span>
      </button>
    </div>
    <div class="flex items-center">
      <div class="relative cursor-pointer" @click="subSwitch">
        <input type="checkbox" class="sr-only toggle-checkbox">
        <div 
          class="block w-8 h-4 rounded-full" 
          :class="[subscribe ? 'bg-primary' : 'bg-stroke']"></div>
        <div 
          class="dot w-3.5 h-3.5" 
          :class="[subscribe ? 'translate-x-4' : 'translate-x-0']"></div>
      </div>
      <label for="toggle" class="flex items-center cursor-pointer ml-3 font-normal">
        Подписаться на все рассылки
      </label>
    </div>    
  </form>
</template>

<script setup>
  const { formData, hadlerSubmite } = defineProps({
    formData: {
      type: Object,
      required: true
    },
    hadlerSubmite: {
      type: Function,
      required: true
    }
  })

  const subscribe = ref(false)

  const subSwitch = () => {
    subscribe.value = !subscribe.value
    formData.subscribes.map(sub => {
      sub.status = subscribe.value
    })
  }
</script>

<style lang="scss" scoped>

</style>
