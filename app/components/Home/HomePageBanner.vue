<script lang="ts" setup>

// Interface กำหนดโครงสร้างข้อมูลที่แบนเนอร์ต้องรับ
interface BannerProps {
    banner: {
        badge?: string;
        title: string;
        description: string;
        bgClass?: string;
        image?: string;
    }
}

// กำหนดค่า Default (ดึงข้อมูลหน้า "ทั้งหมด" ของคุณมาเป็นค่าเริ่มต้น)
const props = withDefaults(defineProps<BannerProps>(), {
    banner: () => ({
        title: 'เปลี่ยนไอเดีย <br /> ให้เป็น <span class="text-yellow-400">"ผลงานจริง"</span> <br /> ด้วยชุดคำสั่ง AI Prompt จาก <span class="text-primary">PromptGo</span>',
        description: 'แหล่งรวม Prompt ที่คัดมาแล้วเพื่อคนทำงาน ช่วยให้คุณลดเวลาลองผิดลองถูก และได้ชิ้นงานคุณภาพสูงที่นำไปใช้ต่อยอดการทำงานได้ทันที',
        bgClass: 'bg-linear-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#3a1a4e]'
    })
});
</script>

<template>
    <div class="relative flex flex-col justify-center overflow-hidden rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-500 h-95 md:h-105 lg:h-115"
        :class="banner.bgClass || 'bg-slate-900'">
        
        <img v-if="banner.image" :src="banner.image"
            class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 transition-opacity duration-500"
            alt="Banner Background" />

        <div class="relative z-10 flex flex-col gap-4 md:gap-6 items-start max-w-2xl">

            <div v-if="banner.badge"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white tracking-wider">
                <svg v-if="banner.badge === 'IMAGE AI'" class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                </svg>
                {{ banner.badge }}
            </div>

            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight" v-html="banner.title">
            </h1>

            <p class="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
                {{ banner.description }}
            </p>

            <button
                class="flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-semibold text-gray-900 transition-transform hover:scale-105 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-4 h-4 md:w-5 md:h-5 text-gray-600">
                    <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                </svg>
                ค้นหา Prompt ที่ใช่
            </button>
        </div>

        <div v-if="!banner.image">
            <div
                class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-pink-600/20 rounded-full blur-3xl pointer-events-none">
            </div>
            <div
                class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-100 h-100 bg-blue-600/20 rounded-full blur-3xl pointer-events-none">
            </div>
        </div>

    </div>
</template>