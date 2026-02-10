<script lang="ts" setup>
import { ref, computed } from 'vue';
import HomePageBannerVue from '~/components/Home/HomePageBanner.vue';
import HomeNavbarVue from '~/components/Home/HomeNavbar.vue';
import WindowVue, { type WindowProps } from '~/components/Explore/Window.vue';
import WindowDetail from '~/components/Explore/WindowDetail.vue';

// --- State สำหรับ Modal ---
const isDetailOpen = ref(false);
const selectedItem = ref<WindowProps | null>(null);


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
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    tags: ['Coding', 'React', 'Tailwind'],
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
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: true,
    isSaved: true,
    exampleImages: []
  },
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
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    tags: ['Coding', 'React', 'Tailwind'],
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
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: true,
    isSaved: true,
    exampleImages: []
  },
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
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    tags: ['Coding', 'React', 'Tailwind'],
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
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: true,
    isSaved: true,
    exampleImages: []
  },
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
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    tags: ['Coding', 'React', 'Tailwind'],
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
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: true,
    isSaved: true,
    exampleImages: []
  },
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
    authorName: 'FantasyCreator',
    views: '32k',
    likes: '4,120',
    tags: ['Coding', 'React', 'Tailwind'],
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
    authorName: 'AnimeFan_TH',
    views: '4.5k',
    likes: '620',
    isLiked: true,
    isSaved: true,
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
const onCategoryClick = (cat: string) => console.log('Category:', cat);

</script>

<template>
  <div class="min-h-screen bg-background-primary">
    
    <div class="p-6 xl:p-10">
      <HomePageBannerVue />
    </div>

    <div class="sticky top-[64px] xl:top-[73px] z-20 bg-background-primary/95 backdrop-blur-md border-b border-gray-100/50 transition-all">
      
      <div class="overflow-x-auto no-scrollbar px-6 xl:px-10 py-2">
          <div class="min-w-max">
             <HomeNavbarVue />
          </div>
      </div>

    </div>

    <section class="p-6 xl:p-10">
      <h2 class="text-2xl font-bold pt-6 pb-10 text-text-primary">แนะนำสำหรับคุณ</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <WindowVue 
          v-for="item in promptItems" 
          :key="item.id"
          v-bind="item" 
          @click-card="onCardClick"
          @toggle-like="onToggleLike"
          @toggle-save="onToggleSave"
        />
      </div>

      <WindowDetail 
        v-if="selectedItem"
        :is-open="isDetailOpen"
        v-bind="selectedItem"
        :related-item="suggestedItem"
        @close="closeDetail"
        @toggle-like="onToggleLike"
        @toggle-save="onToggleSave"
        @click-card="onCardClick"  
        @click-author="onAuthorClick"
      />
    </section>

  </div>
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