<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// Import Components
import NavigationSideBar from './NavigationSideBar.vue';
import NavigationTopBar from './NavigationTopBar.vue';
import ScrollToTop from '~/components/Shared/ScrollToTop.vue';

const isSidebarOpen = ref(false);
const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value;
const closeSidebar = () => isSidebarOpen.value = false;

const route = useRoute();
watch(() => route.path, () => closeSidebar());
</script>

<template>

  <div class="flex h-screen bg-gray-50 overflow-hidden">

    <NavigationSideBar :is-open="isSidebarOpen" @close="closeSidebar" />

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative transition-all duration-300">

      <main class="flex-1 overflow-y-scroll scroll-smooth relative">

        <div class="xl:hidden flex items-center justify-between px-4 pt-4 pb-2 bg-white">
          <div class="flex items-center gap-3">
            <span class="text-lg font-bold text-blue-600">PromptGo</span>
          </div>

          <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
            <NuxtImg src="/Navbar/DefaultUser.png" class="w-full h-full object-cover" />
          </div>
        </div>

        <div
          class="xl:hidden sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 h-16 flex items-center shadow-sm">
          <div class="flex items-center gap-2 w-full">
            
            <button @click="toggleSidebar"
              class="p-2 -ml-2 mr-1 text-gray-500 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div class="relative flex-1">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input type="text" placeholder="ค้นหาไอเดีย Prompt..."
                class="w-full py-2.5 pl-10 pr-4 bg-gray-100 border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none" />
            </div>

            <button
              class="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-xl text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

          </div>
        </div>

        <div class="hidden xl:block sticky top-0 z-30">
          <NavigationTopBar />
        </div>

        <slot />
    
    
        <ScrollToTop />
        
      </main>

    </div>
  </div>
</template>
