<script setup lang="ts">
const props = defineProps<{
  id: number;
  image: string;
  badge: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  authorName: string;
  views: string;
  likes: string;
  isLiked?: boolean;
  isSaved?: boolean;
}>();

const emit = defineEmits(['click-card', 'filter-badge', 'toggle-save', 'toggle-like']);

const handleBadgeClick = (e: Event) => {
  e.stopPropagation();
  emit('filter-badge', props.badge);
};

const handleSaveClick = (e: Event) => {
  e.stopPropagation();
  emit('toggle-save', props.id);
};

const handleLikeClick = (e: Event) => {
  e.stopPropagation();
  emit('toggle-like', props.id);
};
</script>

<template>
  <article 
    class="group relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    @click="emit('click-card', id)"
  >
    
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <img 
        :src="image" 
        :alt="title" 
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      
      <button 
        @click="handleBadgeClick"
        class="cursor-pointer absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-gray-700 shadow-sm border border-gray-200/50 hover:bg-black hover:text-white transition-colors"
        aria-label="Filter by model"
      >
        {{ badge }}
      </button>

      <button 
        @click="handleSaveClick"
        class="cursor-pointer absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-200 group/btn"
        :class="isSaved ? 'bg-yellow-400 text-white' : 'bg-black/20 text-white hover:bg-white hover:text-yellow-500'"
        aria-label="Save to collection"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" :class="{'stroke-none': isSaved}">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </button>

      <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12">
        <p class="text-white text-xs font-medium line-clamp-2 opacity-90 leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="flex flex-col flex-grow p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-2 h-2 rounded-full shadow-sm" :class="categoryColor"></span>
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ category }}</span>
      </div>

      <h3 class="text-gray-900 font-bold text-base mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
        {{ title }}
      </h3>

      <div class="mt-auto pt-3 flex items-center justify-between border-t border-gray-50">
        <a href="#" class="flex items-center gap-2 group/author" @click.stop>
          <div class="w-6 h-6 rounded-full bg-gray-200 overflow-hidden ring-2 ring-transparent group-hover/author:ring-blue-100 transition-all">
            <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${authorName}`" :alt="authorName" />
          </div>
          <span class="text-xs font-medium text-gray-500 group-hover/author:text-gray-800 transition-colors truncate max-w-[80px]">
            {{ authorName }}
          </span>
        </a>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1 text-gray-400 text-xs" title="Views">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
            <span>{{ views }}</span>
          </div>

          <button 
            @click="handleLikeClick"
            class="cursor-pointer flex items-center gap-1 text-xs transition-colors p-1 -mr-1 rounded-md hover:bg-red-50"
            :class="isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'"
            aria-label="Like this prompt"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 transition-transform active:scale-125" :class="{'scale-110': isLiked}">
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.16-1.243c-3.17-3.729-5.23-6.077-5.23-8.6 0-2.899 2.158-5.2 5.08-5.2 1.56 0 2.952.858 3.733 2.05A4.951 4.951 0 0115.367 1.9c2.922 0 5.08 2.301 5.08 5.2 0 2.523-2.06 4.871-5.23 8.601-.365.402-.765.815-1.182 1.254l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
            <span>{{ likes }}</span>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>