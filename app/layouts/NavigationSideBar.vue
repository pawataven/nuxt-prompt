<script lang="ts" setup>
import PremiumCardVue from "~/components/Navbar/PremiumCard.vue";
</script>

<template>
  <aside class="flex h-screen w-72 flex-col border-r border-gray-100 bg-white">
    <div
      class="flex flex-col items-center justify-center border-b border-gray-200 py-8"
    >
      <h1 class="text-2xl font-bold tracking-tight text-primary-hover">
        PromptGo
      </h1>
    </div>

    <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
      <nav>
        <ul class="flex flex-col space-y-1">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center gap-4 rounded-xl px-4 py-3 text-text-primary transition-all hover:bg-blue-50 hover:text-primary group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                class="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H400c-22.1 0-40-17.9-40-40V376c0-13.3-10.7-24-24-24H240c-13.3 0-24 10.7-24 24v96c0 22.1-17.9 40-40 40H72c-22.1 0-40-17.9-40-40V287.6H11c-17 0-32-14.1-32-32.1s15-32.1 32-32.1L244.4 20.3c10.1-13.5 25.1-20.3 43.6-20.3s33.5 6.8 43.6 20.3l212.2 203.1c17 0 32 14.1 32 32.1z"
                />
              </svg>
              <span class="text-[15px] font-medium">หน้าแรก</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/explore"
              class="flex items-center gap-4 rounded-xl px-4 py-3 text-text-primary transition-all hover:bg-blue-50 hover:text-primary group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon
                  points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                ></polygon>
              </svg>
              <span class="text-[15px] font-medium">สำรวจ</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/profile"
              class="flex items-center gap-4 rounded-xl px-4 py-3 text-text-primary transition-all hover:bg-blue-50 hover:text-primary group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>

              <span class="text-[15px] font-medium">โปรไฟล์</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/packages"
              class="flex items-center gap-4 rounded-xl px-4 py-3 text-text-primary transition-all hover:bg-blue-50 hover:text-primary group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
              >
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
              <span class="text-[15px] font-medium">แพ็กเกจ</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <PremiumCardVue />

    <div class="p-4 border-t border-slate-100 bg-white z-10">
      <button
        class="flex cursor-pointer items-center gap-3 w-full p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 shadow-sm hover:shadow-md group"
      >
        <div
          class="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0"
        >
          <NuxtImg
            src="/Navbar/DefaultUser.png"
            class="w-full h-full object-cover"
            alt="User Avatar"
          />
        </div>

        <div class="flex-1 text-left overflow-hidden">
          <div class="font-bold text-sm text-slate-900 truncate">Arpao Dev</div>
          <div class="text-xs text-slate-500 truncate">@arpaodev</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-text-secondary group-hover:text-text-primary transition-colors"
        >
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
          ></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
  </aside>
</template>
