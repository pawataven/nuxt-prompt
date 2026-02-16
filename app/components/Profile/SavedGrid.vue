<script setup lang="ts">
import WindowVue from "~/components/Explore/Window.vue";
defineProps({
  items: Array,
  onCardClick: Function,
  onToggleLike: Function,
  onToggleSave: Function,
  onFilterBadge: Function,
  onAuthorClick: Function,
  onCategoryClick: Function
})
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">

    <WindowVue
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @click-card="onCardClick"
      @toggle-like="onToggleLike"
      @toggle-save="onToggleSave"
      @filter-badge="onFilterBadge"
      @click-author="onAuthorClick"
      @click-category="onCategoryClick"
    />

  </div>
</template>
