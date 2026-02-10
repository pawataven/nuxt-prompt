<script lang="ts" setup>

</script>

<template>
    <div
        class="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#3a1a4e] p-8 md:p-12 lg:p-16">

        <div class="relative z-10 flex flex-col gap-6 items-start max-w-2xl">

            <div
                class="flex items-center gap-2 rounded-full bg-green-900/30 px-3 py-1.5 backdrop-blur-sm border border-green-800/50">
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-xs font-medium text-green-300">Trending Now</span>
            </div>

            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                เปลี่ยนไอเดีย
                <br />
                ให้เป็น <span class="text-yellow-400">"ผลงานจริง"</span> <br />
                ด้วยชุดคำสั่ง AI Prompt จาก <span class="text-primary">PromptGo</span>
            </h1>

            <p class="text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
                แหล่งรวม Prompt ที่คัดมาแล้วเพื่อคนทำงาน ช่วยให้คุณลดเวลาลองผิดลองถูก และได้ชิ้นงานคุณภาพสูงที่นำไปใช้ต่อยอดการทำงานได้ทันที
            </p>

            <button
                class="flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-105 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 text-gray-600">
                    <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                </svg>
                ค้นหา Prompt ที่ใช่!
            </button>
        </div>

        <div
            class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-pink-600/20 rounded-full blur-3xl pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-100 h-100 bg-blue-600/20 rounded-full blur-3xl pointer-events-none">
        </div>

    </div>
</template>