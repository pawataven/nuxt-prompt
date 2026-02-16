<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const openPreview = () => {
  console.log("ดูรูป");
};

const editName = () => {
  console.log("แก้ไขชื่อ");
};
</script>

<template>
  <div class="relative inline-block">
    <!-- AVATAR -->
    <div
      class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow cursor-pointer"
      @click="toggleMenu"
    >
      <img
        src="https://i.pravatar.cc/300"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- DROPDOWN -->
    <div
      v-if="showMenu"
      class="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-xl border p-2 z-50"
    >
      <button
        @click="openPreview"
        class="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100"
      >
        <Icon name="lucide:image" class="w-4 h-4" />
        ดูรูป
      </button>

      <button
        @click="editName"
        class="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100"
      >
        <Icon name="lucide:pencil" class="w-4 h-4" />
        แก้ไขชื่อ
      </button>
    </div>
  </div>
</template>
