<script lang="ts" setup></script>

<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-gray-100 bg-white/80 px-8 py-4 backdrop-blur-md"
  >
    <div class="relative flex-1 max-w-2xl">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5 text-gray-400"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        class="block w-full rounded-2xl border border-gray-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition-all outline-none hover:bg-white hover:shadow-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
        placeholder="ค้นหาไอเดีย Prompt..."
      />
    </div>

 <div class="flex items-center gap-3">
      <button
        class="group cursor-pointer flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-2 py-2 text-sm font-medium text-gray-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="h-4 w-4 fill-current text-gray-400 group-hover:text-blue-500">
          <path
            d="M130.4 268.2C135.4 280.2 147 288 160 288L480 288C492.9 288 504.6 280.2 509.6 268.2C514.6 256.2 511.8 242.5 502.7 233.3L342.7 73.3C330.2 60.8 309.9 60.8 297.4 73.3L137.4 233.3C128.2 242.5 125.5 256.2 130.5 268.2zM130.4 371.7C125.4 383.7 128.2 397.4 137.3 406.6L297.3 566.6C309.8 579.1 330.1 579.1 342.6 566.6L502.6 406.6C511.8 397.4 514.5 383.7 509.5 371.7C504.5 359.7 492.9 352 480 352L160 352C147.1 352 135.4 359.8 130.4 371.8z"
          />
        </svg>
        <span>เลือกโมเดล</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 text-gray-400 group-hover:text-blue-500"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <button
        class="group cursor-pointer flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-2 py-2 text-sm font-medium text-gray-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 fill-current text-gray-400 group-hover:text-blue-500">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
          <circle cx="5" cy="12" r="3" />
        </svg>
        <span>ตัวกรอง</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 text-gray-400 group-hover:text-blue-500"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  </header>
</template>
