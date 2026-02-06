<script setup lang="ts">
import NavigationBarVue from './NavigationBar.vue';
</script>

<template>
  <div class="flex h-screen bg-slate-50 overflow-hidden">
    
    <NavigationBarVue />

    <main class="flex-1 overflow-y-auto relative">
      <slot />
    </main>
    
  </div>
</template>