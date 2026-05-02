<script setup lang="ts">
const { health } = useApi();

const { data } = await useAsyncData('api-health', () => health(), {
  server: false,
  lazy: true,
});

const isReady = computed(() => data.value?.status === 'ok');
</script>

<template>
  <span
    class="inline-flex h-2.5 w-2.5 rounded-full"
    :class="isReady ? 'bg-emerald-500' : 'bg-amber-400'"
    :title="isReady ? 'API online' : 'API unavailable'"
  />
</template>
