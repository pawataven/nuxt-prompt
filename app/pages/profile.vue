<script setup lang="ts">
import { ref, computed } from "vue";

import ProfileCover from "~/components/Profile/ProfileCover.vue";
import ProfileAvatar from "~/components/Profile/ProfileAvatar.vue";
import ProfileInfo from "~/components/Profile/ProfileInfo.vue";
import ProfileStats from "~/components/Profile/ProfileStats.vue";
import ProfileTap from "~/components/Profile/ProfileTap.vue";

import Window from "~/components/Explore/Window.vue";
import WindowDetail from "~/components/Explore/WindowDetail.vue";

// ================= UI STATE =================
const activeTab = ref("works");

// ================= MOCK DATA =================
const works = ref([
  {
    id: 1,
    title: "My Prompt",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    likes: "120",
    isLiked: false,
    isSaved: false,
    detailText: "รายละเอียด prompt",
    exampleImages: [],
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

const onCardClick = (id: number) => {
  const item = currentItems.value.find((p: any) => p.id === id);
  if (item) {
    selectedItem.value = item;
    isDetailOpen.value = true;
  }
};

const closeDetail = () => {
  isDetailOpen.value = false;
};

// ================= EVENTS =================
const onFilterBadge = () => {};
const onToggleSave = () => {};
const onToggleLike = () => {};
const onAuthorClick = () => {};
const onCategoryClick = () => {};
</script>

<template>
  <!-- PROFILE HEADER -->
  <div>
    <ProfileCover />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="relative -mt-20 flex flex-col lg:flex-row lg:items-center gap-6"
      >
        <div class="flex justify-center lg:justify-start w-full lg:w-auto">
          <ProfileAvatar />
        </div>

        <div
          class="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div class="flex-1">
            <ProfileInfo />
          </div>

          <div
            class="w-full flex justify-center lg:w-auto lg:justify-end mt-4 lg:mt-0"
          >
            <ProfileStats />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-6xl mx-auto px-6">
    <ProfileTap
      :active-tab="activeTab"
      @change-tab="(tab) => (activeTab = tab)"
    />
  </div>

  <!-- GRID -->
  <section
    class="max-w-6xl mx-auto px-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <Window
      v-for="item in currentItems"
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

  <!-- MODAL -->
  <WindowDetail
    v-if="selectedItem"
    :is-open="isDetailOpen"
    v-bind="selectedItem"
    :detail-text="selectedItem.detailText"
    :example-images="selectedItem.exampleImages"
    @close="closeDetail"
  />
</template>
