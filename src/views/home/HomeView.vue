<script setup lang="ts">
import { computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { RouterLink } from "vue-router";

import StarsBackground from "@/components/ui/bg-stars/StarsBackground.vue";
import BlurReveal from "@/components/ui/blur-reveal/BlurReveal.vue";
import LandingPageBtn from "@/components/landing-page-btn/LandingPageButton.vue";
import Timeline from "@/components/ui/timeline/Timeline.vue";
import AnimatedTestimonials from "@/components/ui/animated-testimonials/AnimatedTestimonials.vue";

import { ChevronDown, Eye } from "@lucide/vue";

//Get realtime scroll Y position
const { y } = useWindowScroll();

const dynamicPadding = computed(() => {
  const triggerPoint = 50;
  const maxPadding = 64;
  const speed = 0.3;

  if (y.value <= triggerPoint) return 0;

  return Math.min((y.value - triggerPoint) * speed, maxPadding);
});

const educationnal_background = [
  {
    id: "lyceesevigne",
    label: "Lycée Sévigné",
    img: "/schools/sevigne_high_school.jpeg",
    training_name: "Baccalauréat Général",
    training_description: "Spécialités Mathématiques et Physique-chimie, option Maths Expertes"
  },
  {
    id: "iutrennes",
    label: "IUT de Rennes",
    img: "/schools/iut_of_rennes.jpeg",
    training_name: "BUT Génie Electrique et Informatique Industrielle",
    training_description: "Spécialité Électronique et Systèmes Embarqués. Parcours en alternance."
  },

  {
    id: "INSA",
    label: "INSA de Rennes",
    img: "/schools/insa_of_rennes.jpeg",
    training_name: "Titre ingénieur - Spécialité Électronique",
    training_description: "Électronique - Systèmes Embarqués et Télécommunications (E-SET) en apprentissage"
  }
];

const projects = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Borne de recharge pour véhicule électrique",
    designation: "Projet réalisé à l'IUT",
    image:
      "https://cdn.prod.website-files.com/6542954f2cb4da2ec17c23ed/684736b0114bda569257811e_WhatsApp%20Image%202025-04-02%20at%2000.28.03-p-2000.jpeg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Console rétrogaming",
    designation: "Projet réalisé à l'IUT",
    image:
      "https://cdn.prod.website-files.com/6542954f2cb4da2ec17c23ed/68475686f718e01304f9b684_WhatsApp%20Image%202025-01-19%20at%2018.43.26.jpeg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Ghostbusters - Proton Pack",
    designation: "Projet personnel",
    image:
      "https://cdn.prod.website-files.com/6542954f2cb4da2ec17c23ed/6542ca103fb929ad505374e1_WhatsApp%20Image%202023-11-01%20%C3%A0%2021.15.42_54243d27.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Voiture bluetooth arduino",
    designation: "Projet personnel",
    image:
      "https://cdn.prod.website-files.com/6542954f2cb4da2ec17c23ed/660af961797518c371b851dd_IMG-20240401-WA0015.jpg",
  }
];
</script>
<template>
  <main
    class="transition-[padding] duration-75 ease-linear"
    :style="{
      paddingLeft: `${dynamicPadding}px`,
      paddingRight: `${dynamicPadding}px`,
    }"
  >
    <!-- LANDING PAGE SECTION -->
    <section
      class="relative flex h-screen w-full flex-col items-center justify-center gap-4 overflow-clip rounded-b-xl border border-zinc-800 bx-shadow-landing-page"
    >
      <StarsBackground :factor="0.05" :speed="50" star-color="#fff" />

      <div class="absolute px-5 pt-26">
        <BlurReveal :delay="0.2" :duration="0.75">
          <h2
            class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none"
          >
            <span class="dm-serif-italic">Kenavo</span> 👋
          </h2>
          <span
            class="text-xl tracking-tighter text-pretty sm:text-3xl xl:text-6xl/none"
          >
            Moi c'est Enzo Coquelle
          </span>

          <span
            class="text-md tracking-tighter text-pretty sm:text-xl xl:text-2xl/none"
          >
            <br />
            Etudiant passionné en BUT GEII
          </span>
        </BlurReveal>
        <div class="flex mt-15 gap-8">
          <a href="/CV_ENZO_COQUELLE_MARS_2026.pdf" target="_blank">
            <LandingPageBtn text="Voir mon CV" theme="secondary"
              ><Eye
            /></LandingPageBtn>
          </a>
          <a href="#about-me">
            <LandingPageBtn text="En savoir plus" theme="primary"
              ><ChevronDown
            /></LandingPageBtn>
          </a>
        </div>
      </div>
    </section>

    <!-- About me section -->
    <section id="about-me" class="w-full pt-30 flex justify-center ">
      <div >
        <h1
          class="scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic mb-10 text-shadow-xl"
        >
          A propos
        </h1>

        <div class="flex w-full gap-16 items-center">
          <p class="w-full md:w-110 leading-7">
            👋 Salut, moi c'est Enzo !
            <br /><br />
            Depuis toujours, je suis fasciné par l’électronique et
            l’informatique. Tout a commencé par une curiosité forte pour
            démonter, comprendre et recréer toute sorte d'objets.
            <br /><br />
            Aujourd’hui, cette passion est devenue mon moteur : je suis étudiant
            en
            <strong>BUT Génie Électrique et Informatique Industrielle</strong>,
            avec une envie débordante d'en apprendre toujours plus !
            <br /><br />
            Mon objectif est clair : devenir
            <strong>ingénieur en systèmes embarqués</strong>, avec un rêve en
            ligne de mire : contribuer aux avancées de l’<strong
              >aéronautique et du spatial</strong
            >. <br /><br />
            ‍Bienvenue dans mon univers ! 🚀
          </p>
          <div class="w-120">
            <img src="/projects.png" />
          </div>
        </div>

        <h1
          class="mt-36 scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic text-shadow-xl"
        >
          Mon parcours
        </h1>

        <Timeline :items="educationnal_background" />
      </div>
    </section>

    <!-- projects section -->
    <section id="projects" class="h-screen w-full pt-30 flex justify-center flex-col px-34">
      <h1
        class="scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic mb-10 text-shadow-xl"
      >
        Mes projets
      </h1>
      
      <AnimatedTestimonials :testimonials="projects" :autoplay="true" :duration="5000">
        <RouterLink :to="'projects'">
            <LandingPageBtn text="Voir tout" theme="primary" :hyper-grow="false" class="h-ful"
              ><Eye
            /></LandingPageBtn>
        </RouterLink>
      </AnimatedTestimonials>
    </section>
  </main>
</template>
