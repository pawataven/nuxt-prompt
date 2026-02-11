<script setup lang="ts">
import { ref, computed } from "vue";

import ProfileCover from "~/components/Profile/ProfileCover.vue";
import ProfileAvatar from "~/components/Profile/ProfileAvatar.vue";
import ProfileInfo from "~/components/Profile/ProfileInfo.vue";
import ProfileStats from "~/components/Profile/ProfileStats.vue";
import ProfileTap from "~/components/Profile/ProfileTap.vue";
import Window from "~/components/Explore/Window.vue";

// ================= UI STATE =================
const activeTab = ref("works");

// ================= MOCK DATA (รอ backend จริง) =================
const works = ref([
  // TODO: GET /user/prompts
]);

const collections = ref([
  // TODO: GET /user/collections
]);

const saved = ref([
  // TODO: GET /user/saved
]);

// ================= TAB SWITCH =================
const currentItems = computed(() => {
  if (activeTab.value === "works") return works.value;
  if (activeTab.value === "collections") return collections.value;
  if (activeTab.value === "saved") return saved.value;
  return [];
});

// ================= EVENT PLACEHOLDER =================
const onCardClick = (id: number) => {
  // TODO: open modal หรือ navigate
};

const onFilterBadge = (badge: string) => {
  // TODO: filter model
};

const onToggleSave = (id: number) => {
  // TODO: POST /save
};

const onToggleLike = (id: number) => {
  // TODO: POST /like
};

const onAuthorClick = (name: string) => {
  // TODO: ไปหน้า profile creator
};

const onCategoryClick = (cat: string) => {
  // TODO: ไปหน้า category
};

</script>

<template>
  <!-- ================= PROFILE HEADER ================= -->
  <div>
    <ProfileCover />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="relative -mt-20 flex flex-col lg:flex-row lg:items-center gap-6"
      >
        <!-- Avatar -->
        <div class="flex justify-center lg:justify-start w-full lg:w-auto">
          <ProfileAvatar />
        </div>

        <!-- Content Row -->
        <div
          class="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <!-- LEFT : INFO -->
          <div class="flex-1">
            <ProfileInfo />
          </div>

          <!-- RIGHT : STATS -->
          <div
            class="w-full flex justify-center lg:w-auto lg:justify-end mt-4 lg:mt-0"
          >
            <ProfileStats />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= TAB CONTROL ================= -->
  <ProfileTap
    :active-tab="activeTab"
    @change-tab="(tab) => (activeTab = tab)"
  />

  <!-- ================= GRID ================= -->
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
</template>
