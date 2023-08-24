import { NuxtLink } from '../.nuxt/components';
<template>
  <nav class="text-sm font-medium">
    <ol class="list-none p-0 inline-flex">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="flex items-center text-disabled"
      >
        <NuxtLink :to="breadcrumb.to">{{ breadcrumb.text }}</NuxtLink>
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
