<template>
<div
      class="mx-2 mt-4 p-5 rounded-2xl bg-linear-to-br from-indigo-600 to-violet-700 text-white shadow-lg shadow-indigo-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div
        class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all">
      </div>
      <div class="relative z-10">
        <div class="flex items-center gap-2 mb-3">
          <div class="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="lucide lucide-crown text-yellow-300" aria-hidden="true">
              <path
                d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z">
              </path>
              <path d="M5 21h14"></path>
            </svg>
          </div>
          <span class="text-xs font-bold uppercase tracking-wider">Premium Plan</span>
        </div>
        <h4 class="font-extrabold text-lg mb-1">ปลดล็อกขีดจำกัด</h4>
        <p class="text-xs font-medium  mb-4 leading-relaxed">เข้าถึงฟีเจอร์พิเศษและสนับสนุนชุมชนของเรา</p><button
          class="cursor-pointer w-full py-2.5 bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2">
          อัปเกรดเเพลน
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-arrow-right" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg></button>
      </div>
    </div>
</template>
