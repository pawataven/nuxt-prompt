<script setup lang="ts">
import { ref } from 'vue';
import Window from '~/components/Explore/Window.vue';

// Mock Data (เพิ่ม field สถานะการกด)
const promptItems = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'CODE',
    categoryColor: 'bg-yellow-400',
    title: 'สคริปต์ Python วิเคราะห์ข้อมูล',
    description: 'Write a Python script using Pandas to read a CSV file, clean missing values...',
    authorName: 'DevThailand',
    views: '1.2k',
    likes: '85',
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    badge: 'Midjourney',
    category: 'IMAGE AI',
    categoryColor: 'bg-red-500',
    title: 'สร้างภาพพอร์ตเทรตแฟนตาซี',
    description: 'Portrait of a cyberpunk female warrior, neon lights, futuristic city background...',
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    isLiked: false,
    isSaved: false
  },
   {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badge: 'Claude 3.5',
    category: 'CODE',
    categoryColor: 'bg-blue-400',
    title: 'โครงสร้าง React Component',
    description: 'Create a reusable React Button component using Tailwind CSS. It should have variants...',
    authorName: 'DevMaster',
    views: '9.8k',
    likes: '1,567',
    isLiked: false,
    isSaved: false
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    badge: 'GPT-4',
    category: 'WRITING',
    categoryColor: 'bg-gray-400',
    title: 'เขียนบทความ SEO ภาษาไทย',
    description: 'Act as an SEO specialist. Write a comprehensive blog post in Thai about...',
    authorName: 'ContentMaster',
    views: '8.7k',
    likes: '1,923',
    isLiked: false,
    isSaved: false
  },
    {
    id: 5,
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=800',
    badge: 'Niji Journey',
    category: 'IMAGE AI',
    categoryColor: 'bg-pink-500',
    title: 'ออกแบบคาแรคเตอร์อนิเมะ',
    description: 'Character reference sheet, full body, cute anime girl with pink hair...',
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: false,
    isSaved: false
  }
  ,
    {
    id: 6,
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=800',
    badge: 'Niji Journey',
    category: 'IMAGE AI',
    categoryColor: 'bg-pink-500',
    title: 'ออกแบบคาแรคเตอร์อนิเมะ',
    description: 'Character reference sheet, full body, cute anime girl with pink hair...',
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: false,
    isSaved: false
  }
]);

// Handlers สำหรับ Logic การกดปุ่ม
const onCardClick = (id: number) => {
  console.log('Open details for:', id);
  // navigateTo(`/prompt/${id}`)
};

const onFilterBadge = (badge: string) => {
  console.log('Filter by model:', badge);
  // logic filter here
};

const onToggleSave = (id: number) => {
  const item = promptItems.value.find(p => p.id === id);
  if (item) item.isSaved = !item.isSaved;
};

const onToggleLike = (id: number) => {
  const item = promptItems.value.find(p => p.id === id);
  if (item) {
    item.isLiked = !item.isLiked;
    // แปลง string เป็น number เพื่อบวก/ลบ view เล่นๆ
    // ของจริงต้องยิง API
  }
};
</script>

<template>
  <main class="bg-gray-50 min-h-screen p-4 md:p-8">
    <header class="mb-8 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">สำรวจไอเดียใหม่ๆ</h1>
      <p class="text-gray-500">ค้นพบ Prompt ที่น่าสนใจจากครีเอเตอร์ทั่วโลก</p>
    </header>

    <section 
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-[1920px] mx-auto"
    >
      <Window 
        v-for="item in promptItems" 
        :key="item.id"
        v-bind="item"
        @click-card="onCardClick"
        @filter-badge="onFilterBadge"
        @toggle-save="onToggleSave"
        @toggle-like="onToggleLike"
      />
    </section>
  </main>
</template>