<script setup>
import StatBox from '~/components/Profile/StatBox.vue'

const stats = [
  { label: 'PROMPTS', value: '42' },
  { label: 'LIKES', value: '15.4k' },
  { label: 'FOLLOWERS', value: '1.2k' }
]
</script>

<template>
  <div class="flex gap-4 mt-4">
    <StatBox
      v-for="stat in stats"
      :key="stat.label"
      :label="stat.label"
      :value="stat.value"
    />
  </div>
</template>
