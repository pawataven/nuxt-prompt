<script setup lang="ts">
import { ref, computed } from 'vue';
import Window from '~/components/Explore/Window.vue';
import WindowDetail from '~/components/Explore/WindowDetail.vue';

const isDetailOpen = ref(false);
const selectedItem = ref<any>(null);

// ข้อมูลจำลอง (Mock Data) - คงเดิม
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
  }
]);

const suggestedItem = computed(() => {
  if (!selectedItem.value) return [];
  return promptItems.value.find(p => p.id !== selectedItem.value.id) || promptItems.value[0];
});

const onCardClick = (id: number) => {
  const item = promptItems.value.find(p => p.id === id);
  if (item) {
    selectedItem.value = item;
    isDetailOpen.value = true;
  }
};

const closeDetail = () => isDetailOpen.value = false;
const onFilterBadge = (badge: string) => console.log('Filter:', badge);
const onToggleSave = (id: number) => { const i = promptItems.value.find(p => p.id === id); if(i) i.isSaved = !i.isSaved; };
const onToggleLike = (id: number) => { const i = promptItems.value.find(p => p.id === id); if(i) i.isLiked = !i.isLiked; };
const onAuthorClick = (name: string) => console.log('Profile:', name);
const onCategoryClick = (cat: string) => console.log('Category:', cat);
</script>

<template>
  <main class="min-h-screen p-4 md:p-8 bg-[var(--color-background-primary)]">
    <header class="mb-8 max-w-[1920px] mx-auto">
      <h1 class="text-3xl font-bold mb-2 text-center md:text-left text-text-primary">สำรวจไอเดียใหม่ๆ</h1>
      <p class="text-center md:text-left text-text-secondary">ค้นพบ Prompt ที่น่าสนใจจากครีเอเตอร์ทั่วโลก</p>
    </header>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-[1920px] mx-auto">
      <Window 
        v-for="item in promptItems" 
        :key="item.id"
        v-bind="item"
        @click-card="onCardClick"
        @filter-badge="onFilterBadge"
        @toggle-save="onToggleSave"
        @toggle-like="onToggleLike"
        @click-author="onAuthorClick"
        @click-category="onCategoryClick" 
      />
    </section>

   <WindowDetail 
    v-if="selectedItem"
    :is-open="isDetailOpen"
    v-bind="selectedItem"
    :tags="selectedItem.tags" 
    :example-images="selectedItem.exampleImages" 
    :related-item="suggestedItem"
    @close="closeDetail"
    @click-tag="(tag) => console.log('Tag clicked:', tag)"
    @toggle-like="onToggleLike"
    @toggle-save="onToggleSave"
    @click-author="onAuthorClick"
    @click-card="onCardClick"  
  />
  </main>
</template>