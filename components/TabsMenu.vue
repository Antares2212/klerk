<template>
  <div class="flex justify-center box-border">
    <template v-for="tab in tabs" :key="tab.name">
      <div
        class="tabItem"
        :class="{'text-primary border-primary border-b-2': tab.name === currentTab}"
        @click="setCurrentTab(tab.name)"
      >
        {{ tab.label }}
      </div>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps({
    tabs: {
      type: Array,
      required: true,
    }
  })
  
  const currentTab = ref(props.tabs[0].name)

  const setCurrentTab = (tabName) => currentTab.value = tabName
</script>
