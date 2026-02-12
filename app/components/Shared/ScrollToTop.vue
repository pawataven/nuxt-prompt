<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
let scrollContainer: HTMLElement | null = null;

const checkScroll = () => {
  if (scrollContainer) {
    isVisible.value = scrollContainer.scrollTop > 300;
  }
};

const scrollToTop = () => {
  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  scrollContainer = document.querySelector('main');

  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', checkScroll);
  } else {
    // เผื่อกรณีหา main ไม่เจอ (Fallback ไปใช้ window)
    window.addEventListener('scroll', () => {
        isVisible.value = window.scrollY > 300;
    });
  }
});

onUnmounted(() => {
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', checkScroll);
  }
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-menu-text-active text-white shadow-lg hover:bg-premium-border hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
<svg xmlns="http://www.w3.org/2000/svg"
     class="w-5 group-hover:-translate-y-1 transition-transform duration-300" 
     fill="white"
     viewBox="0 0 640 640">
     <path d="M300.3 199.2C312.9 188.9 331.4 189.7 343.1 201.4L471.1 329.4C480.3 338.6 483 352.3 478 364.3C473 376.3 461.4 384 448.5 384L192.5 384C179.6 384 167.9 376.2 162.9 364.2C157.9 352.2 160.7 338.5 169.9 329.4L297.9 201.4L300.3 199.2z"/>
</svg>
    </button>
  </Transition>
</template>