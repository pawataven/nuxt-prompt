<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('works')

const tabs = [
  { key: 'works', label: 'ผลงานของฉัน', icon: 'lucide:layout-grid' },
  { key: 'collections', label: 'คอลเลกชัน', icon: 'lucide:folder' },
  { key: 'saved', label: 'ที่บันทึกไว้', icon: 'lucide:bookmark' }
]
</script>

<template>
  <div class="border-b border-slate-200 mt-10">

    <div class="flex gap-8 overflow-x-auto">

      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="flex items-center gap-2 pb-4 text-sm font-medium whitespace-nowrap transition"
        :class="
          activeTab === tab.key
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-slate-500 hover:text-slate-800'
        "
      >

        <Icon :name="tab.icon" class="w-4 h-4" />

        {{ tab.label }}

      </button>

    </div>

  </div>

  <!-- content mock -->
  <div class="mt-6">
    <div v-if="activeTab==='works'">ผลงานของฉัน</div>
    <div v-if="activeTab==='collections'">คอลเลกชัน</div>
    <div v-if="activeTab==='saved'">ที่บันทึกไว้</div>
  </div>
</template>
