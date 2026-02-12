<script setup lang="ts">
// ข้อมูลหมวดหมู่สำหรับวนลูปสร้างปุ่ม (เพื่อให้โค้ดดูสะอาด)
const categories = [
  { name: 'รูปภาพ', icon: 'image' },
  { name: 'งานเขียน', icon: 'pen' },
  { name: 'โค้ด & Dev', icon: 'code' },
  { name: 'การตลาด', icon: 'bolt' },
  { name: 'วิดีโอ', icon: 'video' },
  { name: 'อื่นๆ', icon: 'other' },
]
</script>

<template>
  <header
    class="sticky top-0 z-30 flex w-full items-center justify-start border-b border-gray-100 bg-white/80 px-6 py-3 backdrop-blur-md">

    <div class="flex flex-1 items-center gap-4 overflow-x-auto no-scrollbar">

      <button
        class="flex cursor-pointer shrink-0 items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
          <path fill-rule="evenodd"
            d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
            clip-rule="evenodd" />
        </svg>
        <span>หมวดทั้งหมด</span>
      </button>

      <div class="h-6 w-px bg-gray-200"></div>

      <div class="flex items-center gap-3">
        <button v-for="cat in categories" :key="cat.name"
          class="group cursor-pointer flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">
          <svg v-if="cat.icon === 'image'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400 group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <svg v-else-if="cat.icon === 'pen'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400 group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <svg v-else-if="cat.icon === 'code'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400 group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          <svg v-else-if="cat.icon === 'bolt'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400 group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>
          <svg v-else-if="cat.icon === 'video'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400 group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <svg v-else-if="cat.icon === 'other'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            fill="currentColor" class="h-4 w-4 text-gray-400 group-hover:text-blue-500">
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>



          <span>{{ cat.name }}</span>
        </button>
      </div>
    </div>

    <div class="hidden md:flex items-center gap-4 pl-4">
      <div class="h-6 w-px bg-gray-200"></div>

      <button
        class="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">
        <span>โมเดลทั้งหมด</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-400">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  </header>
</template>
