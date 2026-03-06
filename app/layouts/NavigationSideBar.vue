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

const isProfileMenuOpen = ref(false);

// 1. สร้างตัวจับกล่องโปรไฟล์
const profileMenuRef = ref<HTMLElement | null>(null);

const closeProfileMenu = () => {
  isProfileMenuOpen.value = false;
};

// 2. ฟังก์ชันตรวจสอบว่า "คลิกโดนข้างนอกกล่องโปรไฟล์หรือเปล่า"
const handleClickOutside = (event: MouseEvent) => {
  if (
    isProfileMenuOpen.value &&
    profileMenuRef.value &&
    !profileMenuRef.value.contains(event.target as Node)
  ) {
    closeProfileMenu(); // ถ้าคลิกข้างนอก ให้สั่งปิด
  }
};

// 3. เริ่มดักจับการคลิกทั่วทั้งหน้าจอ (Document)
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// 4. คืนหน่วยความจำเมื่อปิดหน้าเว็บ
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});


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
                  class="w-5 h-5 min-w-5 min-h-5 shrink-0 overflow-visible transition-colors duration-200" :class="[
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

        <div class="p-4 border-t border-slate-100 relative" ref="profileMenuRef">

          <div v-if="isProfileMenuOpen" @click="closeProfileMenu" class="fixed inset-0 z-40"></div>

          <Transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-2 scale-95">
            <div v-if="isProfileMenuOpen"
              class="absolute bottom-full left-4 right-4 mb-2 z-50 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg">

              <div
                class="flex cursor-pointer items-center gap-3 p-3 mb-1 rounded-xl hover:bg-slate-50 transition-colors">

                <div
                  class="relative w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                  <NuxtImg src="/Navbar/DefaultUser.png" class="w-full h-full object-cover" />
                </div>

                <NuxtLink to="/profile" @click="closeProfileMenu" class="flex-1 min-w-0 text-left">
                  <aside class="flex-1 min-w-0">

                    <div class="flex flex-col text-start">
                      <div class="font-bold text-base text-slate-900 truncate">ArpaoDev</div>
                      <div
                        class="text-sm font-medium text-blue-600 underline hover:text-blue-700 transition-colors mt-0.5 w-max">
                        ดูโปรไฟล์
                      </div>
                    </div>
                  </aside>
                </NuxtLink>


                <div class="shrink-0">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
                    ฟรี
                  </span>
                </div>

              </div>

              <div class="my-1 h-px w-full bg-slate-100"></div>

              <NuxtLink to="/switch-account" @click="closeProfileMenu"
                class="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                สลับบัญชี
              </NuxtLink>

              <NuxtLink to="/settings" @click="closeProfileMenu"
                class="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                การตั้งค่า
              </NuxtLink>

              <NuxtLink to="/privacy" @click="closeProfileMenu"
                class="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                นโยบาย & ความเป็นส่วนตัว
              </NuxtLink>

              <button @click="closeProfileMenu"
                class="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                ออกจากระบบ
              </button>
            </div>
          </Transition>

          <button @click="isProfileMenuOpen = !isProfileMenuOpen"
            class="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-transparent p-2 transition-all duration-200 hover:bg-slate-50 hover:border-slate-200 hover:shadow-sm group outline-none"
            :class="{ 'bg-slate-50 border-slate-200 shadow-sm': isProfileMenuOpen }">
            <div
              class="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100 shrink-0">
              <NuxtImg src="/Navbar/DefaultUser.png"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>

            <div class="flex-1 min-w-0 text-left">
              <div class="font-bold text-sm text-slate-900 truncate">Arpao Dev</div>
              <div class="text-xs text-slate-500 truncate font-medium">@arpaodev</div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg"
              class="ml-auto h-4 w-4 text-slate-400 transition-transform duration-300"
              :class="{ 'rotate-180': isProfileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>

          </button>
        </div>
      </div>
    </aside>
  </div>
</template>