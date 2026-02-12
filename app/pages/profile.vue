<script setup lang="ts">
import { ref, computed } from "vue";

import ProfileCoverVue from "~/components/Profile/ProfileCover.vue";
import ProfileAvatarVue from "~/components/Profile/ProfileAvatar.vue";
import ProfileInfoVue from "~/components/Profile/ProfileInfo.vue";
import ProfileStatsVue from "~/components/Profile/ProfileStats.vue";


import WindowVue from "~/components/Explore/Window.vue";
import WindowDetailVue from "~/components/Explore/WindowDetail.vue";
import ProfileTapVue from "~/components/Profile/profileTap.vue";

// ================= UI STATE =================
const activeTab = ref("works");

// ================= MOCK DATA =================
const works = ref([
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

const collections = ref([]);
const saved = ref([]);

// ================= TAB SWITCH =================
const currentItems = computed(() => {
  if (activeTab.value === "works") return works.value;
  if (activeTab.value === "collections") return collections.value;
  if (activeTab.value === "saved") return saved.value;
  return [];
});

// ================= MODAL =================
const isDetailOpen = ref(false);
const selectedItem = ref<any>(null);


// --- 3. Logic: คำนวณหา Related Item (สำหรับส่งไปให้ Modal) ---
const suggestedItem = computed(() => {
  if (!selectedItem.value) return undefined;
  // หาตัวอื่นที่ไม่ใช่ตัวปัจจุบันมาแสดงเป็น related content
  return works.value.find(p => p.id !== selectedItem.value?.id) || works.value[0];
});

// --- 4. Handlers: จัดการ Event ---

// เมื่อกดที่การ์ด -> เปิด Modal
const onCardClick = (id: number) => {
  const item = works.value.find(p => p.id === id);
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
  const item = works.value.find(p => p.id === id);
  if (item) item.isLiked = !item.isLiked;
};

const onToggleSave = (id: number) => {
  const item = works.value.find(p => p.id === id);
  if (item) item.isSaved = !item.isSaved;
};

const onFilterBadge = (badge: string) => console.log('Filter:', badge);
const onAuthorClick = (name: string) => console.log('Author:', name);
const onCategoryClick = (cat: string) => console.log('Category:', cat);

</script>

<template>
  <!-- PROFILE HEADER -->
  <div>
    <ProfileCoverVue />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative -mt-20 flex flex-col lg:flex-row lg:items-center gap-6">
        <div class="flex justify-center lg:justify-start w-full lg:w-auto">
          <ProfileAvatarVue />
        </div>

        <div class="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div class="flex-1">
            <ProfileInfoVue />
          </div>

          <div class="w-full flex justify-center lg:w-auto lg:justify-end mt-4 lg:mt-0">
            <ProfileStatsVue />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- GRID -->
  <section class="p-6 xl:p-10">
    <ProfileTapVue :active-tab="activeTab" @change-tab="(tab) => (activeTab = tab)" />
    <h2 class="text-2xl font-bold pt-6 pb-10 text-text-primary">
      {{ activeTab == 'works' ? 'ผลงานของฉัน' : (activeTab === 'collections' ? 'คอลเลกชัน' : 'ที่บันทึกไว้') }}
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 mx-auto">
      <WindowVue v-for="item in currentItems" :key="item.id" v-bind="item" @click-card="onCardClick"
        @filter-badge="onFilterBadge" @toggle-save="onToggleSave" @toggle-like="onToggleLike"
        @click-author="onAuthorClick" @click-category="onCategoryClick" />
    </div>

    <WindowDetailVue v-if="selectedItem" :is-open="isDetailOpen" v-bind="selectedItem" :related-item="suggestedItem"
      @close="closeDetail" @click-tag="(tag) => console.log('Tag:', tag)" @toggle-like="onToggleLike"
      @toggle-save="onToggleSave" @click-author="onAuthorClick" @click-card="onCardClick" />
  </section>
</template>

