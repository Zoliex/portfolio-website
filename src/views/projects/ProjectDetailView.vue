<script setup lang="ts">
import { ref, onMounted, h, computed, nextTick } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { ChevronLeft } from '@lucide/vue';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const project = ref<any>(null);
const loading = ref(true);

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
};

onMounted(async () => {
  const slug = route.params.slug;
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  project.value = await client.fetch(query, { slug });
  loading.value = false;

  await nextTick();

  gsap.fromTo(".gsap-header-fade", 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
  );

  gsap.utils.toArray('.gsap-section-fade').forEach((el: any) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.3, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      }
    );
  });
});

const youtubeEmbedUrl = computed(() => {
  if (!project.value?.videoUrl) return null;
  const url = project.value.videoUrl;
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
});

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return h('img', {
        src: urlFor(value).width(1280).auto('format').quality(80).url(),
        class: 'my-8 rounded-xl max-w-full h-auto',
      });
    },
  },
  marks: {
    link: ({ value }: any, { slots }: any) => {
      return h('a', {
        href: value.href,
        class: 'text-blue-400 hover:text-blue-300 underline',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, slots.default?.());
    }
  },
  block: {
    h1: (_: any, { slots }: any) => h('h1', { class: 'text-4xl font-bold mt-12 mb-6 dm-serif-italic text-white' }, slots.default?.()),
    h2: (_: any, { slots }: any) => h('h2', { class: 'text-3xl font-bold mt-10 mb-5 dm-serif-italic text-white' }, slots.default?.()),
    h3: (_: any, { slots }: any) => h('h3', { class: 'text-2xl font-bold mt-8 mb-4 dm-serif-italic text-white' }, slots.default?.()),
    normal: (_: any, { slots }: any) => h('p', { class: 'text-white/80 leading-relaxed mb-6' }, slots.default?.()),
    blockquote: (_: any, { slots }: any) => h('blockquote', { class: 'border-l-4 border-white/20 pl-4 italic text-white/70 my-6' }, slots.default?.()),
  },
  list: {
    bullet: (_: any, { slots }: any) => h('ul', { class: 'list-disc pl-6 mb-6 text-white/80 space-y-2' }, slots.default?.()),
    number: (_: any, { slots }: any) => h('ol', { class: 'list-decimal pl-6 mb-6 text-white/80 space-y-2' }, slots.default?.()),
  },
  listItem: {
    bullet: (_: any, { slots }: any) => h('li', { class: 'marker:text-white/50' }, slots.default?.()),
    number: (_: any, { slots }: any) => h('li', { class: 'marker:text-white/50' }, slots.default?.()),
  }
};
</script>

<template>
  <main class="px-6 md:px-16 lg:px-32 pt-24 md:pt-36 pb-16 md:pb-32 max-w-5xl mx-auto">
    <div v-if="loading" class="text-center text-white/50 animate-pulse">
      Chargement du projet...
    </div>
    
    <article v-else-if="project" class="w-full">
      <div class="gsap-header-fade opacity-0">
        <RouterLink to="/projects" class="mb-10 flex items-center gap-3 text-base md:text-lg underline hover:text-blue-500 hover:font-bold hover:tracking-wide animate-all duration-200"><ChevronLeft /> Retour aux projets</RouterLink>
        
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white dm-serif-italic mb-6 leading-tight">
          {{ project.nameOfProject }}
        </h1>
        
        <div class="flex flex-wrap items-center gap-4 text-white/50 mb-8 font-medium">
          <span class="text-sm capitalize">{{ formatDate(project.creationDate) }}</span>
          <span class="hidden sm:inline">•</span>
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm font-medium w-fit">{{ project.projectType }}</span>
        </div>
      </div>

      <div class="prose prose-invert prose-lg max-w-none gsap-section-fade opacity-0">
        <PortableText
          v-if="project.article"
          :value="project.article"
          :components="myPortableTextComponents"
        />
        <div v-else class="text-white/50 italic mb-8">
          Aucun contenu pour ce projet.
        </div>
      </div>

      <div v-if="youtubeEmbedUrl" class="mt-16 gsap-section-fade opacity-0">
        <h2 class="text-3xl font-bold text-white dm-serif-italic mb-6">Vidéo</h2>
        <div class="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe 
            :src="youtubeEmbedUrl" 
            class="w-full h-full"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <!-- Galerie si existante -->
      <div v-if="project.gallery && project.gallery.length > 0" class="mt-16 gsap-section-fade opacity-0">
        <h2 class="text-2xl md:text-3xl font-bold text-white dm-serif-italic mb-6">Galerie</h2>
        <viewer :images="project.gallery" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div 
            v-for="(image, index) in project.gallery" 
            :key="index"
            class="relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 group flex items-center justify-center bg-black/30"
          >
            <!-- Arrière-plan flou (très basse résolution pour optimiser le chargement) -->
            <div 
              class="absolute inset-0 w-full h-full bg-cover bg-center blur-xl scale-110 opacity-40 group-hover:scale-125 transition-transform duration-500"
              :style="{ backgroundImage: `url(${urlFor(image).width(400).auto('format').quality(50).url()})` }"
            ></div>
            <!-- Image principale centrée (HD max 1920px) -->
            <img 
              :src="urlFor(image).width(1920).auto('format').quality(80).url()" 
              class="relative z-10 max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              alt="Image de la galerie"
            />
          </div>
        </viewer>
      </div>

    </article>
    
    <div v-else class="text-red-400 text-xl py-20">
      Projet introuvable.
    </div>
  </main>
</template>


