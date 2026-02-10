<script setup>
import StatBox from "~/components/Profile/StatBox.vue";

const stats = [
  { label: "PROMPTS", value: "42" },
  { label: "LIKES", value: "15.4k" },
  { label: "FOLLOWERS", value: "1.2k" },
];
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full max-w-md mx-auto md:max-w-lg lg:max-w-none"
  >
    <StatBox
      v-for="stat in stats"
      :key="stat.label"
      :label="stat.label"
      :value="stat.value"
    />
  </div>
</template>
