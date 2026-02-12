<script setup lang="ts">
import PremiumCard from '~/components/Navbar/PremiumCard.vue';

// ... (ส่วน Script เหมือนเดิม ไม่ต้องแก้) ...
export interface SideNavbarProps {
  isOpen: boolean;
}

export interface MenuItem {
  label: string;
  to: string;
  icon: string;
  type?: 'fill' | 'outline';
}

const props = withDefaults(defineProps<SideNavbarProps>(), {
  isOpen: false,
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const menuItems: MenuItem[] = [
  {
    label: 'หน้าแรก',
    to: '/',
    icon: 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H400c-22.1 0-40-17.9-40-40V376c0-13.3-10.7-24-24-24H240c-13.3 0-24 10.7-24 24v96c0 22.1-17.9 40-40 40H72c-22.1 0-40-17.9-40-40V287.6H11c-17 0-32-14.1-32-32.1s15-32.1 32-32.1L244.4 20.3c10.1-13.5 25.1-20.3 43.6-20.3s33.5 6.8 43.6 20.3l212.2 203.1c17 0 32 14.1 32 32.1z',
    type: 'fill'
  },
  {
    label: 'สำรวจ',
    to: '/explore',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.24 5.76L14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76z',
    type: 'outline'
  },
  {
    label: 'โปรไฟล์',
    to: '/profile',
    icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    type: 'outline'
  },
  {
    label: 'แพ็กเกจ',
    to: '/package',
    icon: 'M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm0 5h20',
    type: 'outline'
  }
];
</script>

<template>
  <div>
    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isOpen" class="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm xl:hidden" @click="emit('close')"
        aria-hidden="true"></div>
    </Transition>

    <aside
      class="fixed inset-y-0 left-0 z-50 flex flex-col w-72 h-full bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out xl:static xl:translate-x-0"
      :class="isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'" aria-label="Sidebar Navigation">
      <div class="flex items-center justify-between px-6 py-6 border-b border-gray-100 h-22 shrink-0">
        <h1 class="text-2xl font-bold tracking-tight text-blue-600 w-full text-center xl:text-left">
          PromptGo
        </h1>

        <button @click="emit('close')" class="xl:hidden p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors"
          aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar scroll-smooth">
        <nav role="navigation">
          <ul class="flex flex-col space-y-1">
            <li v-for="item in menuItems" :key="item.to">
              <NuxtLink :to="item.to"
                class="flex items-center gap-4 rounded-xl px-4 py-3.5 text-slate-600 transition-all duration-200 group hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98]"
                active-class="bg-blue-50 text-blue-600 font-semibold shadow-sm ring-1 ring-blue-100"
                @click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" :viewBox="item.type === 'fill' ? '0 0 576 512' : '0 0 24 24'"
                  :fill="item.type === 'fill' ? 'currentColor' : 'none'"
                  :stroke="item.type === 'fill' ? 'none' : 'currentColor'"
                  :stroke-width="item.type === 'fill' ? '0' : '2'" stroke-linecap="round" stroke-linejoin="round"
                  class="w-5 h-5 min-w-5 min-h-5 shrink-0 overflow-visible transition-colors duration-200"
                  :class="[
                    $route.path === item.to ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                  ]">
                  <path :d="item.icon" />
                </svg>
                <span class="text-[15px] font-medium tracking-wide">{{ item.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <PremiumCard />

      <div class="flex flex-col shrink-0 bg-white z-10">
        <slot name="before-profile" />
        <div class="px-4 pb-4"></div>
        <div class="p-4 border-t border-slate-100">
          <button
            class="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-transparent p-2 transition-all duration-200 hover:bg-slate-50 hover:border-slate-200 hover:shadow-sm group outline-none">
            <div
              class="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100 shrink-0">
              <NuxtImg src="/Navbar/DefaultUser.png"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div class="flex-1 min-w-0 text-left">
              <div class="font-bold text-sm text-slate-900 truncate">Arpao Dev</div>
              <div class="text-xs text-slate-500 truncate font-medium">@arpaodev</div>
            </div>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>