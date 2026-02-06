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

const emit = defineEmits(['click-card', 'filter-badge', 'toggle-save', 'toggle-like', 'click-author']);

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

const handleAuthorClick = (e: Event) => {
  e.stopPropagation();
  emit('click-author', props.authorName);
};
</script>

<template>
  <article 
    class="group relative flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
    :class="'bg-background-secondary border-border-primary'"
    @click="emit('click-card', id)"
  >
    
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <img :src="image" :alt="title" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      
      <button @click="handleBadgeClick" class="cursor-pointer absolute top-3 left-3 z-10 backdrop-blur-md px-3 py-1 rounded-full text-xs shadow-sm border transition-colors hover:text-white hover:bg-black"
        :class="'bg-background-secondary/95 text-text-secondary border-border-secondary'">
        {{ badge }}
      </button>

      <button 
        @click="handleSaveClick" 
        class="cursor-pointer absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-200 shadow-sm"
        :class="isSaved 
          ? 'bg-accent-soft text-accent hover:brightness-90 hover:scale-110' 
          : 'bg-black/20 text-white hover:bg-accent-soft hover:text-accent'" 
        aria-label="Save"
      >
        <svg xmlns="http://www.w3.org/2000/svg" :fill="isSaved ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </button>

      <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12">
        <p class="text-white text-[13px] font-medium line-clamp-2 opacity-95 leading-relaxed drop-shadow-sm font-sans">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="flex flex-col flex-grow p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-2 h-2 rounded-full shadow-sm" :class="categoryColor"></span>
        <span class="text-[10px] font-extrabold uppercase tracking-widest text-text-muted">{{ category }}</span>
      </div>

      <h1 class="font-bold text-lg mb-4 line-clamp-1 leading-tight transition-colors group-hover:text-primary" :class="'text-text-primary'">
        {{ title }}
      </h1>

      <div class="mt-auto flex items-center justify-between">
        
        <button 
          @click="handleAuthorClick" 
          class="flex items-center gap-2 group/author cursor-pointer outline-none text-left"
          aria-label="View author profile"
        >
          <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden ring-2 ring-white shadow-sm transition-transform group-hover/author:scale-105">
            <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${authorName}`" :alt="authorName" />
          </div>
          <span class="text-xs font-bold truncate max-w-[80px] transition-colors group-hover/author:text-text-primary" :class="'text-text-secondary'">
            {{ authorName }}
          </span>
        </button>

        <div class="flex items-center gap-2">
          
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-background-hover text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 opacity-70">
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
            <span>{{ views }}</span>
          </div>

          <button 
            @click="handleLikeClick"
            class="cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all active:scale-95 duration-200"
            :class="[
              isLiked 
                ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                : 'bg-background-hover text-text-secondary hover:bg-accent-soft hover:text-accent'
            ]"
            aria-label="Like"
          >
            <svg xmlns="http://www.w3.org/2000/svg" :fill="isLiked ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5" :class="{'scale-110': isLiked}">
               <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span>{{ likes }}</span>
          </button>
          
        </div>

      </div>
    </div>
  </article>
</template>