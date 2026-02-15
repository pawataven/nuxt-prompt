<script setup lang="ts">
defineProps({
  items: Array
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    <!-- COLLECTION CARD -->
    <div
      v-for="item in items"
      :key="item.id"
      class="group relative bg-white rounded-2xl p-6 border border-gray-200
             hover:border-blue-400 hover:shadow-xl transition-all duration-300
             cursor-pointer"
    >
      <!-- Top Right Status -->
      <div class="absolute right-4 top-4 opacity-60">
        <Icon name="heroicons:lock-closed" class="w-5 h-5" />
      </div>

      <!-- Folder Icon -->
      <div
        class="w-14 h-14 rounded-xl flex items-center justify-center
               bg-blue-50 text-blue-600 mb-4
               group-hover:bg-blue-100 transition"
      >
        <Icon name="heroicons:folder" class="w-7 h-7" />
      </div>

      <!-- Title -->
      <h3 class="font-semibold text-lg text-gray-800">
        {{ item.title }}
      </h3>

      <!-- Count -->
      <p class="text-gray-500 text-sm mt-1 mb-4">
        {{ item.count }} รายการ
      </p>

      <!-- Preview Images -->
      <div class="flex items-center -space-x-3">
        <img
          v-for="(img,i) in item.previews"
          :key="i"
          :src="img"
          class="w-9 h-9 rounded-full border-2 border-white object-cover"
        />
      </div>
    </div>

    <!-- CREATE COLLECTION CARD -->
    <div
      class="flex flex-col items-center justify-center
             border-2 border-dashed border-gray-300
             rounded-2xl h-48 text-gray-400
             hover:border-blue-400 hover:text-blue-500
             hover:bg-blue-50/40 transition cursor-pointer"
    >
      <Icon name="heroicons:folder-plus" class="w-8 h-8 mb-2" />
      <span class="font-medium">สร้างคอลเลกชัน</span>
    </div>

  </div>
</template>
