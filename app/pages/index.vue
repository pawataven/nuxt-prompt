<script lang="ts" setup>
import LoginModal from "~/components/Auth/LoginModal.vue"
import { ref, computed } from 'vue';
import HomePageBannerVue from '~/components/Home/HomePageBanner.vue';
import HomeNavbarVue from '~/components/Home/HomeNavbar.vue';
import WindowVue, { type WindowProps } from '~/components/Explore/Window.vue';
import WindowDetail from '~/components/Explore/WindowDetail.vue';

// --- State สำหรับ Modal ---
const isDetailOpen = ref(false);
const selectedItem = ref<WindowProps | null>(null);
const showLogin = ref(true)

const promptItems = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'CODE',
    categoryColor: 'bg-yellow-400',
    title: 'สคริปต์ Python วิเคราะห์ข้อมูล',
    description: 'Write a Python script using Pandas to read a CSV file, clean missing values...',
    detailText: 'สคริปต์นี้ใช้สำหรับจัดการไฟล์ CSV ที่มีข้อมูลสูญหาย โดยจะทำการ Clean ข้อมูลอัตโนมัติและสรุปผลเชิงสถิติเบื้องต้นให้ทันที',
    authorName: 'DevThailand',
    views: '1.2k',
    likes: '85',
    isLiked: false,
    isSaved: true,
    exampleImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    badge: 'Midjourney',
    category: 'IMAGE AI',
    categoryColor: 'bg-red-500',
    title: 'สร้างภาพพอร์ตเทรตแฟนตาซี',
    description: 'Portrait of a cyberpunk female warrior, neon lights, futuristic city background...',
    detailText: 'Prompt สำหรับสร้างภาพตัวละครสไตล์ Cyberpunk ที่มีความละเอียดสูง เน้นแสงสีนีออนและฉากหลังที่เป็นเมืองแห่งอนาคต',
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    tags: ['Art', 'Midjourney', 'Cyberpunk'],
    isLiked: true,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component...',
    detailText: 'ตัวอย่างการเขียน React Component ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable) พร้อมการจัดการ Props และ TypeScript Interface',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    tags: ['Coding', 'React', 'Tailwind'],
    isLiked: false,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist...',
    detailText: 'คำสั่งสำหรับให้ AI สวมบทบาทเป็นผู้เชี่ยวชาญด้าน SEO เพื่อเขียนบทความภาษาไทยที่ติดอันดับการค้นหาได้ง่าย',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false,
    exampleImages: []
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=800',
    badge: 'Niji Journey',
    category: 'IMAGE AI',
    categoryColor: 'bg-pink-500',
    title: 'ออกแบบคาแรคเตอร์อนิเมะ',
    description: 'Character reference sheet...',
    detailText: 'สร้าง Reference Sheet สำหรับตัวละครอนิเมะ แสดงมุมมองต่างๆ และรายละเอียดเครื่องแต่งกายอย่างครบถ้วน',
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: true,
    isSaved: true,
    exampleImages: []
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component...',
    detailText: 'ตัวอย่างการเขียน React Component ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable) พร้อมการจัดการ Props และ TypeScript Interface',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    tags: ['Coding', 'React', 'Tailwind'],
    isLiked: false,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist...',
    detailText: 'คำสั่งสำหรับให้ AI สวมบทบาทเป็นผู้เชี่ยวชาญด้าน SEO เพื่อเขียนบทความภาษาไทยที่ติดอันดับการค้นหาได้ง่าย',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false,
    exampleImages: []
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component...',
    detailText: 'ตัวอย่างการเขียน React Component ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable) พร้อมการจัดการ Props และ TypeScript Interface',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    tags: ['Coding', 'React', 'Tailwind'],
    isLiked: false,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist...',
    detailText: 'คำสั่งสำหรับให้ AI สวมบทบาทเป็นผู้เชี่ยวชาญด้าน SEO เพื่อเขียนบทความภาษาไทยที่ติดอันดับการค้นหาได้ง่าย',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false,
    exampleImages: []
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component...',
    detailText: 'ตัวอย่างการเขียน React Component ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable) พร้อมการจัดการ Props และ TypeScript Interface',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    tags: ['Coding', 'React', 'Tailwind'],
    isLiked: false,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist...',
    detailText: 'คำสั่งสำหรับให้ AI สวมบทบาทเป็นผู้เชี่ยวชาญด้าน SEO เพื่อเขียนบทความภาษาไทยที่ติดอันดับการค้นหาได้ง่าย',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false,
    exampleImages: []
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component...',
    detailText: 'ตัวอย่างการเขียน React Component ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable) พร้อมการจัดการ Props และ TypeScript Interface',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    tags: ['Coding', 'React', 'Tailwind'],
    isLiked: false,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist...',
    detailText: 'คำสั่งสำหรับให้ AI สวมบทบาทเป็นผู้เชี่ยวชาญด้าน SEO เพื่อเขียนบทความภาษาไทยที่ติดอันดับการค้นหาได้ง่าย',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false,
    exampleImages: []
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component...',
    detailText: 'ตัวอย่างการเขียน React Component ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable) พร้อมการจัดการ Props และ TypeScript Interface',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    tags: ['Coding', 'React', 'Tailwind'],
    isLiked: false,
    isSaved: false,
    exampleImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist...',
    detailText: 'คำสั่งสำหรับให้ AI สวมบทบาทเป็นผู้เชี่ยวชาญด้าน SEO เพื่อเขียนบทความภาษาไทยที่ติดอันดับการค้นหาได้ง่าย',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false,
    exampleImages: []
  },

]);

// --- 3. Logic: คำนวณหา Related Item (สำหรับส่งไปให้ Modal) ---
const suggestedItem = computed(() => {
  if (!selectedItem.value) return undefined;
  // หาตัวอื่นที่ไม่ใช่ตัวปัจจุบันมาแสดงเป็น related content
  return promptItems.value.find(p => p.id !== selectedItem.value?.id) || promptItems.value[0];
});

// --- 4. Handlers: จัดการ Event ---

// เมื่อกดที่การ์ด -> เปิด Modal
const onCardClick = (id: number) => {
  const item = promptItems.value.find(p => p.id === id);
  if (item) {
    selectedItem.value = item;
    isDetailOpen.value = true;
  }
};

// เมื่อกดปิด Modal
const closeDetail = () => {
  isDetailOpen.value = false;
};

// Dummy Logic สำหรับ Like/Save (ให้ UI ขยับเล่นๆ)
const onToggleLike = (id: number) => {
  const item = promptItems.value.find(p => p.id === id);
  if (item) item.isLiked = !item.isLiked;
};

const onToggleSave = (id: number) => {
  const item = promptItems.value.find(p => p.id === id);
  if (item) item.isSaved = !item.isSaved;
};

const onFilterBadge = (badge: string) => console.log('Filter:', badge);
const onAuthorClick = (name: string) => console.log('Author:', name);
const onCategoryClick = (category: string) => console.log('Category:', category);

// ✨ 1. สร้าง State เก็บว่าตอนนี้กดเมนูไหนอยู่
const activeCategory = ref('all');

// ✨ 2. ข้อมูลแบนเนอร์ของแต่ละหมวดหมู่ (พิมพ์ Type Record ไว้เผื่อกัน Error)
const bannerData: Record<string, any> = {
  all: {
    title: 'เปลี่ยนไอเดีย <br /> ให้เป็น <span class="text-yellow-400">"ผลงานจริง"</span> <br /> ด้วยชุดคำสั่ง AI Prompt จาก <span class="text-primary">PromptGo</span>',
    description: 'แหล่งรวม Prompt ที่คัดมาแล้วเพื่อคนทำงาน ช่วยให้คุณลดเวลาลองผิดลองถูก และได้ชิ้นงานคุณภาพสูงที่นำไปใช้ต่อยอดการทำงานได้ทันที',
    bgClass: 'bg-linear-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#3a1a4e]'
  },
  image: {
    badge: 'IMAGE AI',
    title: 'สร้างสรรค์งานภาพด้วย AI',
    description: 'รวมคำสั่ง Midjourney, Stable Diffusion และ DALL-E สำหรับงานศิลปะของคุณ',
    bgClass: 'bg-gradient-to-r from-orange-800 to-red-900',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000'
  },
  writing: {
    badge: 'WRITING',
    title: 'ผู้ช่วยงานเขียนอัจฉริยะ',
    description: 'Prompt สำหรับงานเขียน SEO, บทความบล็อก, แคปชั่นโซเชียล และอีเมล',
    bgClass: 'bg-gradient-to-r from-emerald-800 to-teal-900',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000'
  },
  code: {
    badge: 'CODE & DEV',
    title: 'ตัวช่วยเขียนโค้ดและโปรแกรม',
    description: 'Prompt สำหรับนักพัฒนา ช่วยหาบั๊ก เขียนโครงสร้าง และอธิบายโค้ด',
    bgClass: 'bg-gradient-to-r from-blue-800 to-indigo-900',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000'
  },
  video: {
    badge: 'VIDEO',
    title: 'ไอเดียสร้างวิดีโอ',
    description: 'Prompt สำหรับเขียนสคริปต์วิดีโอ YouTube, TikTok และ Reels',
    bgClass: 'bg-gradient-to-r from-purple-800 to-pink-900',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000'
  },
  other: {
    badge: 'OTHER',
    title: 'ไอเดียและอื่นๆ',
    description: 'Prompt จับฉ่าย ครอบคลุมทุกการใช้งานที่คุณนึกไม่ถึง',
    bgClass: 'bg-gradient-to-r from-gray-700 to-slate-900',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000'
  }
};

const currentBanner = computed(() => {
  return bannerData[activeCategory.value] || bannerData['all'];
});

</script>

<template>
  <div class="min-h-screen bg-background-primary">

    <div class="p-6 xl:p-10">
      <HomePageBannerVue :banner="currentBanner" />
    </div>

    <div
      class="sticky top-16 xl:top-18.25 z-20 bg-background-primary/95 backdrop-blur-md border-b border-gray-100/50 transition-all">
      <div class="overflow-x-auto no-scrollbar px-6 xl:px-10 py-2">
        <div class="min-w-max">
          <HomeNavbarVue :active-category="activeCategory" @change-category="(cat) => activeCategory = cat" />
        </div>
      </div>
    </div>

    <section class="p-6 xl:p-10">
      <h2 class="text-2xl font-bold pt-6 pb-10 text-text-primary">แนะนำสำหรับคุณ</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 mx-auto">
        <WindowVue v-for="item in promptItems" :key="item.id" v-bind="item" @click-card="onCardClick"
          @filter-badge="onFilterBadge" @toggle-save="onToggleSave" @toggle-like="onToggleLike"
          @click-author="onAuthorClick" @click-category="onCategoryClick" />
      </div>

      <WindowDetail v-if="selectedItem" :is-open="isDetailOpen" v-bind="selectedItem" :related-item="suggestedItem"
        @close="closeDetail" @click-tag="(tag) => console.log('Tag:', tag)" @toggle-like="onToggleLike"
        @toggle-save="onToggleSave" @click-author="onAuthorClick" @click-card="onCardClick" />
    </section>

  </div>
   <LoginModal v-if="showLogin" />
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>