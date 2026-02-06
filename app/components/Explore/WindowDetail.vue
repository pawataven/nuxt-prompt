<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'; 
import Window from '~/components/Explore/Window.vue'; 

const props = defineProps<{
  isOpen: boolean;
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
  exampleImages?: string[];
  tags?: string[];
  relatedItem?: any; 
}>();

const emit = defineEmits(['close', 'toggle-like', 'toggle-save', 'click-author', 'click-card', 'click-tag']);

const scrollContainer = ref<HTMLElement | null>(null);

const isCopied = ref(false);
const showToast = ref(false);

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.description);
    
    // Trigger ปุ่มเปลี่ยนสี
    isCopied.value = true;
    
    // Trigger แจ้งเตือนด้านบน
    showToast.value = true;

    // ตั้งเวลาปิด
    setTimeout(() => {
      isCopied.value = false;
      showToast.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

watch(() => props.id, async () => {
  await nextTick(); 
  isCopied.value = false; 
  showToast.value = false;
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

watch(() => props.isOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : 'auto';
  }
});
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" @click.self="emit('close')">
      
      <Transition 
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div 
          v-if="showToast" 
          class="absolute top-15 left-0 right-0 mx-auto w-max z-[110] flex items-center gap-2.5 px-5 py-2.5 bg-[#1e293b] text-white text-sm font-semibold rounded-full shadow-2xl border border-gray-700/50 pointer-events-none"
        >
           <div class="bg-green-500 rounded-full p-0.5">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 text-white">
               <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
             </svg>
           </div>
           <span>คัดลอก Prompt แล้ว!</span>
        </div>
      </Transition>

      <div class="relative bg-background-secondary w-full max-w-6xl h-[90vh] md:h-auto md:max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col">
        
        <button @click="emit('close')" class="absolute top-4 right-4 z-50 p-2 bg-text-primary/20 hover:bg-text-primary/40 backdrop-blur-md rounded-full text-white transition-all cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div ref="scrollContainer" class="overflow-y-auto custom-scroll flex-1">
          
          <div class="relative w-full h-[300px] md:h-[400px] group">
            <img :src="image" :alt="title" class="w-full h-full object-cover" />
             <div class="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-transparent via-background-secondary/20 to-background-secondary pointer-events-none"></div>
          </div>

          <div class="flex flex-col lg:flex-row relative z-10 -mt-10 md:-mt-20 px-6 md:px-10 pb-10">
            
            <div class="flex-1 pr-0 lg:pr-10">
              
              <div class="mb-8">
                <div class="flex flex-wrap items-center gap-3 mb-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-bold text-white tracking-wider shadow-sm', categoryColor]">
                    {{ category }}
                  </span>
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-background-secondary/90 backdrop-blur text-accent border border-accent-soft flex items-center gap-1 shadow-sm">
                    ✨ {{ badge }}
                  </span>
                </div>
                <h1 class="text-3xl md:text-5xl font-bold text-text-primary mb-2 leading-tight drop-shadow-sm">
                  {{ title }}
                </h1>
                <p class="text-text-secondary font-medium text-lg">Detailed Prompt Description</p>
              </div>

              <div class="bg-background-hover border border-border-primary rounded-2xl p-6 mb-10 relative">
                 <div class="flex items-center justify-between mb-6 border-b border-border-primary pb-4">
                    <div class="flex gap-2">
                       <span class="w-3 h-3 rounded-full bg-border-primary"></span>
                       <span class="w-3 h-3 rounded-full bg-border-primary"></span>
                    </div>
                    <span class="text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase">Prompt Command</span>
                 </div>
                 
                 <p class="font-mono text-text-primary text-base leading-loose whitespace-pre-wrap mb-6">
                   {{ description }}
                 </p>

                 <div class="flex gap-3">
                    <button 
                      @click="handleCopy"
                      class="flex-1 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      :class="isCopied 
                        ? 'bg-success text-white shadow-green-200' 
                        : 'bg-primary hover:bg-primary-hover text-white shadow-primary/20'"
                    >
                      <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      
                      {{ isCopied ? 'คัดลอกเรียบร้อยแล้ว' : 'คัดลอกคำสั่ง' }}
                    </button>

                    <button 
                      class="p-3 border rounded-xl cursor-pointer transition-all active:scale-95" 
                      :class="isSaved 
                        ? 'bg-accent-soft border-transparent text-accent hover:border-transparent hover:bg-accent/20' 
                        : 'bg-background-secondary border-border-primary text-text-secondary hover:bg-accent-soft hover:text-accent hover:border-accent/20'"
                      @click="emit('toggle-save', id)"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" :fill="isSaved ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                 </div>
              </div>

              <div v-if="exampleImages && exampleImages.length > 0" class="mb-10">
                 <div class="flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 class="text-lg font-bold text-text-primary">ตัวอย่างผลลัพธ์</h3>
                 </div>
                 
                 <div class="grid grid-cols-3 gap-4">
                    <div v-for="(img, idx) in exampleImages" :key="idx" class="aspect-square rounded-2xl overflow-hidden border border-border-secondary shadow-sm group cursor-pointer bg-background-hover">
                       <img :src="img" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                 </div>
              </div>

              <hr v-if="relatedItem" class="border-border-primary mb-10" />

              <div v-if="relatedItem">
                 <div class="flex items-center gap-2 mb-6">
                    <span class="text-accent">✨</span>
                    <h3 class="text-xl font-bold text-text-primary">Prompt ที่น่าสนใจ</h3>
                 </div>
                 
                 <div class="w-full sm:w-[320px]">
                    <Window 
                      v-bind="relatedItem" 
                      @click-card="emit('click-card', $event)" 
                      @toggle-save="emit('toggle-save', $event)"
                      @toggle-like="emit('toggle-like', $event)"
                    />
                 </div>
              </div>

            </div>

            <div class="w-full lg:w-[400px] mt-6 lg:mt-0 lg:pl-6 flex flex-col gap-6">
               
               <div class="bg-background-secondary p-8 rounded-3xl border border-border-primary shadow-xl shadow-border-secondary text-center">
                  <div class="w-28 h-28 mx-auto mb-5 rounded-full p-1 border-2 border-primary-soft bg-background-secondary">
                     <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${authorName}`" class="w-full h-full rounded-full" />
                  </div>
                  <h3 class="text-2xl font-bold text-text-primary mb-1">{{ authorName }}</h3>
                  <div class="inline-block bg-primary-soft text-primary text-xs font-bold px-3 py-1.5 rounded-md uppercase mb-6">
                     Pro Creator
                  </div>
                  
                  <button 
                    @click="emit('click-author', authorName)" 
                    class="w-full py-3 border border-border-primary rounded-xl text-base font-bold text-text-secondary hover:bg-accent-soft hover:text-accent hover:border-accent/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                     ดูโปรไฟล์
                  </button>
               </div>

               <div class="grid grid-cols-2 gap-4">
                  <div class="bg-background-secondary p-5 rounded-2xl border border-border-primary shadow-sm text-center flex flex-col items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-text-muted">
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                     </svg>
                     <p class="text-2xl font-bold text-text-primary">{{ views }}</p>
                     <p class="text-[11px] text-text-muted font-bold uppercase">Views</p>
                  </div>

                  <button 
                    @click="emit('toggle-like', id)"
                    class="bg-background-secondary p-5 rounded-2xl border border-border-primary shadow-sm text-center flex flex-col items-center gap-1 transition-all active:scale-95 cursor-pointer group/like"
                    :class="isLiked ? 'bg-red-50 border-red-100 hover:bg-red-100' : 'hover:bg-accent-soft hover:border-accent/20'"
                  >
                     <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        :fill="isLiked ? '#EF4444' : 'none'" 
                        viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-200"
                        :class="isLiked ? 'text-red-500 scale-110' : 'text-text-muted group-hover/like:text-accent'"
                     >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                     </svg>
                     <p class="text-2xl font-bold transition-colors" :class="isLiked ? 'text-red-500' : 'text-text-primary group-hover/like:text-accent'">{{ likes }}</p>
                     <p class="text-[11px] font-bold uppercase transition-colors" :class="isLiked ? 'text-red-400' : 'text-text-muted'">Likes</p>
                  </button>
               </div>

               <div v-if="tags && tags.length > 0" class="bg-background-secondary p-6 rounded-3xl border border-border-primary shadow-sm">
                  <p class="text-sm font-bold text-text-primary mb-3">Tags ที่เกี่ยวข้อง</p>
                  <div class="flex flex-wrap gap-2">
                     <button 
                        v-for="tag in tags" 
                        :key="tag"
                        @click="emit('click-tag', tag)"
                        class="px-3.5 py-2 bg-background-hover border border-border-primary rounded-lg text-xs font-medium text-text-secondary transition-colors cursor-pointer hover:bg-accent-soft hover:text-accent hover:border-accent/20"
                     >
                        #{{ tag }}
                     </button>
                  </div>
               </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.custom-scroll::-webkit-scrollbar { width: 6px; }
.custom-scroll::-webkit-scrollbar-track { background: transparent; }
.custom-scroll::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
.custom-scroll::-webkit-scrollbar-thumb:hover { background: #D1D5DB; }
</style>