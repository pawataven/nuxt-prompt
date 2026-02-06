<script setup>
defineProps({
  label: String,
  value: String
})
</script>

<template>
  <div class="bg-white rounded-xl shadow px-6 py-4 text-center">
    <div class="text-xl font-bold">{{ value }}</div>
    <div class="text-sm text-gray-500">{{ label }}</div>
  </div>
</template>
