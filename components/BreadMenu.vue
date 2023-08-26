import { NuxtLink } from '../.nuxt/components';
<template>
  <nav class="text-sm font-medium">
    <ol class="inline-flex p-0 list-none">
      <li
        class="flex items-center text-disabled"
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
      >
        <NuxtLink 
          class="breadLink" 
          :to="breadcrumb.to">
          {{ breadcrumb.text }}
        </NuxtLink>
        <span v-if="index < breadcrumbs.length - 1" class="mx-2">
          <img src="images/icons/breadcrumbs.svg" alt="arrow-right" />
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Стили компонента "Хлебные крошки" */
</style>
