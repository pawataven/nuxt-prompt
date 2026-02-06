<script setup lang="ts">
import NavigationBarVue from './NavigationSideBar.vue';
import NavigationTopBar from './NavigationTopBar.vue';
</script>

<template>
  <div class="flex h-screen  overflow-hidden">
    <NavigationBarVue />

    <main class="flex-1 overflow-y-auto relative">
    <NavigationTopBar />
    
      <slot />
    </main>
    
  </div>
</template>