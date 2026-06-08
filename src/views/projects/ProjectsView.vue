<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { ChevronLeft } from '@lucide/vue';
import { client, urlFor } from '@/lib/sanity';
import ProgressiveBlur from '@/components/ui/progressive-blur/ProgressiveBlur.vue';

const projects = ref<any[]>([]);

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
};

onMounted(async () => {
  const query = `*[_type == "project"] | order(creationDate desc) {
    _id,
    nameOfProject,
    "slug": slug.current,
    description,
    mainImage,
    projectType,
    creationDate
  }`;
  projects.value = await client.fetch(query);
});
</script>

<template>
  <main class="px-6 md:px-16 lg:px-32 pb-16 md:pb-32">
    <h1
      class="scroll-m-20 text-4xl md:text-6xl tracking-tight text-balance dm-serif-italic mb-8 text-shadow-xl pt-24 md:pt-36"
    >
      Mes projets
    </h1>
    <RouterLink to="/" class="mb-10 md:mb-15 flex items-center gap-3 text-base md:text-lg underline hover:text-blue-500 hover:font-bold hover:tracking-wide animate-all duration-200"><ChevronLeft /> Retour à la page d'accueil</RouterLink>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <RouterLink
        v-for="project in projects"
        :key="project._id"
        :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
        class="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-white/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
      >
        <!-- Background Image -->
        <img
          v-if="project.mainImage"
          :src="urlFor(project.mainImage).width(600).height(600).auto('format').quality(80).url()"
          :alt="project.nameOfProject"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div v-else class="absolute inset-0 w-full h-full bg-white/5 flex items-center justify-center text-white/30">
          Aucune image
        </div>
        
        <!-- Progressive Blur Overlay -->
        <ProgressiveBlur
          direction="bottom"
          :blurIntensity="1.5"
          class="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none z-10"
        />
        
        <!-- Gradient overlay to ensure text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-10 pointer-events-none"></div>

        <!-- Text Content -->
        <div class="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col justify-end">
          <h2 class="text-xl font-bold text-white dm-serif-italic leading-tight mb-2 [text-shadow:_0_2px_10px_rgba(0,0,0,1),_0_0_5px_rgba(0,0,0,0.8)]">
            {{ project.nameOfProject }}
          </h2>
          <p class="text-white/95 text-sm mb-3 line-clamp-2 font-medium [text-shadow:_0_2px_8px_rgba(0,0,0,1)]">
            {{ project.description }}
          </p>
          <div class="flex justify-between items-center mt-1">
            <div class="text-xs text-white/90 font-bold [text-shadow:_0_2px_8px_rgba(0,0,0,1)] capitalize">
              {{ formatDate(project.creationDate) }}
            </div>
            <span class="text-[10px] font-semibold px-2 py-1 bg-black/60 backdrop-blur-md text-white rounded-full whitespace-nowrap shrink-0 border border-white/20 shadow-xl">
              {{ project.projectType }}
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
