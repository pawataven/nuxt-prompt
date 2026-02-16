<script setup lang="ts">
import { ref, computed } from "vue";

import ProfileCoverVue from "~/components/Profile/ProfileCover.vue";
import ProfileAvatarVue from "~/components/Profile/ProfileAvatar.vue";
import ProfileInfoVue from "~/components/Profile/ProfileInfo.vue";
import ProfileStatsVue from "~/components/Profile/ProfileStats.vue";
import ProfileTapVue from "~/components/Profile/ProfileTap.vue";

import WorksGridVue from "~/components/Profile/WorksGrid.vue";
import CollectionGridVue from "~/components/Profile/CollectionGrid.vue";
import SavedGridVue from "~/components/Profile/SavedGrid.vue";

import WindowDetailVue from "~/components/Explore/WindowDetail.vue";

// ================= UI STATE =================
const activeTab = ref("works");

// ================= MOCK DATA =================
const works = ref([
  {
    id: 1,
    title: "Prompt SEO",
    image: "https://picsum.photos/400/300?1",
    likes: "120",
    isLiked: false,
    isSaved: false,
    detailText: "รายละเอียด prompt",
    exampleImages: [],
  },
  {
    id: 2,
    title: "Prompt Anime",
    image: "https://picsum.photos/400/300?2",
    likes: "540",
    isLiked: false,
    isSaved: false,
    detailText: "รายละเอียด prompt",
    exampleImages: [],
  },
  {
    id: 3,
    title: "Prompt Anime",
    image: "https://picsum.photos/400/300?2",
    likes: "540",
    isLiked: false,
    isSaved: false,
    detailText: "รายละเอียด prompt",
    exampleImages: [],
  },

  {
    id: 4,
    title: "Prompt Anime",
    image: "https://picsum.photos/400/300?2",
    likes: "540",
    isLiked: false,
    isSaved: false,
    detailText: "รายละเอียด prompt",
    exampleImages: [],
  },
  {
    id: 5,
    title: "Prompt Anime",
    image: "https://picsum.photos/400/300?2",
    likes: "540",
    isLiked: false,
    isSaved: false,
    detailText: "รายละเอียด prompt",
    exampleImages: [],
  },
]);

const collections = ref([
  {
    id: 1,
    name: "รายการที่บันทึกไว้",
    count: 12,
    previews: [
      "https://picsum.photos/100?1",
      "https://picsum.photos/100?2",
      "https://picsum.photos/100?3",
    ],
  },
  {
    id: 2,
    name: "งานออกแบบ",
    count: 5,
    previews: [
      "https://picsum.photos/100?4",
      "https://picsum.photos/100?5",
      "https://picsum.photos/100?6",
    ],
  },
]);

const saved = ref([...works.value]);

// ================= DATA SWITCH =================
const currentItems = computed(() => {
  if (activeTab.value === "works") return works.value;
  if (activeTab.value === "collections") return collections.value;
  if (activeTab.value === "saved") return saved.value;
  return [];
});

// ================= GRID SWITCH =================
const currentComponent = computed(() => {
  if (activeTab.value === "works") return WorksGridVue;
  if (activeTab.value === "collections") return CollectionGridVue;
  if (activeTab.value === "saved") return SavedGridVue;
});

// ================= MODAL =================
const isDetailOpen = ref(false);
const selectedItem = ref<any>(null);

const onCardClick = (id: number) => {
  const item = works.value.find((p) => p.id === id);
  if (item) {
    selectedItem.value = item;
    isDetailOpen.value = true;
  }
};

const closeDetail = () => {
  isDetailOpen.value = false;
};

// ================= EVENTS =================
const onToggleLike = (id: number) => {
  const item = works.value.find((p) => p.id === id);
  if (item) item.isLiked = !item.isLiked;
};

const onToggleSave = (id: number) => {
  const item = works.value.find((p) => p.id === id);
  if (item) item.isSaved = !item.isSaved;
};

const onFilterBadge = () => {};
const onAuthorClick = () => {};
const onCategoryClick = () => {};
</script>

<template>
  <!-- PROFILE HEADER -->
  <div>
    <!-- COVER -->
    <ProfileCoverVue />

    <!-- CONTENT -->
    <div class="w-full px-4">
      <div class="flex flex-col lg:flex-row gap-6 -mt-16">
        <!-- AVATAR -->
        <div class="flex justify-start">
          <ProfileAvatarVue />
        </div>

        <!-- INFO + STATS -->
        <div
          class="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6"
        >
          <!-- PROFILE INFO -->
          <div class="flex-1">
            <ProfileInfoVue />
          </div>

          <!-- PROFILE STATS -->
          <div class="shrink-0">
            <ProfileStatsVue />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CONTENT -->
  <section class="p-4 xl:p-6 max-w-7xl mx-auto">
    <ProfileTapVue
      :active-tab="activeTab"
      @change-tab="(tab) => (activeTab = tab)"
    />

    <h2 class="text-2xl font-bold pt-6 pb-6">
      {{
        activeTab === "works"
          ? "ผลงานของฉัน"
          : activeTab === "collections"
            ? "คอลเลกชัน"
            : "ที่บันทึกไว้"
      }}
    </h2>

    <component
      :is="currentComponent"
      :items="currentItems"
      :on-card-click="onCardClick"
      :on-toggle-like="onToggleLike"
      :on-toggle-save="onToggleSave"
      :on-filter-badge="onFilterBadge"
      :on-author-click="onAuthorClick"
      :on-category-click="onCategoryClick"
    />
  </section>

  <!-- MODAL -->
  <WindowDetailVue
    v-if="selectedItem"
    :is-open="isDetailOpen"
    v-bind="selectedItem"
    @close="closeDetail"
  />
</template>
