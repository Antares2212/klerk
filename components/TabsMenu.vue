<template>
  <div>
    <div class="flex justify-center">
      <template v-for="tab in tabs" :key="tab.name">
        <div
          class="bg-gray-200 cursor-pointer py-4 px-4"
          :class="{
            'bg-gray-200 border-white': currentTab === tab.name,
            'bg-gray-200 border-gray-400': currentTab !== tab.name,
          }"
          @click="setCurrentTab(tab.name)"
        >
          {{ tab.label }}
        </div>
      </template>
    </div>
    <div>
      <slot :name="currentTab"></slot>
    </div>
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
