<script setup lang="ts">
import { computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { RouterLink } from "vue-router";

import StarsBackground from "@/components/ui/bg-stars/StarsBackground.vue";
import BlurReveal from "@/components/ui/blur-reveal/BlurReveal.vue";
import LandingPageBtn from "@/components/landing-page-btn/LandingPageButton.vue";
import Timeline from "@/components/ui/timeline/Timeline.vue";
import AnimatedTestimonials from "@/components/ui/animated-testimonials/AnimatedTestimonials.vue";
import BentoGrid from "@/components/ui/bento-grid/BentoGrid.vue";
import BentoGridItem from "@/components/ui/bento-grid/BentoGridItem.vue";

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
    training_name: "Baccalauréat Général - 2024",
    training_description:
      "Spécialités Mathématiques et Physique-chimie, option Maths Expertes",
  },
  {
    id: "iutrennes",
    label: "IUT de Rennes",
    img: "/schools/iut_of_rennes.jpeg",
    training_name:
      "BUT Génie Electrique et Informatique Industrielle - 2024 - 2026",
    training_description:
      "Spécialité Électronique et Systèmes Embarqués. Parcours en alternance.",
  },

  {
    id: "INSA",
    label: "INSA de Rennes",
    img: "/schools/insa_of_rennes.jpeg",
    training_name:
      "Titre ingénieur - Spécialité Électronique - 2026 - 2029 (A venir)",
    training_description:
      "Électronique - Systèmes Embarqués et Télécommunications (E-SET) en apprentissage.",
  },
];

const experiences = [
  {
    title: "Alternant développeur bancs de test",
    company_name: "Safran Data Systems (35)",
    company_logo: "/companies/safran_logo.png",
    duration: "Sept 2025 - Aujourd'hui",
    experience_decription:
      "Création d’un outil de visualisation des rendements de production et amélioration continue des bancs de test. Durée : 2 ans.",
  },
  {
    title: "Membre du Bureau Des Étudiants - Président",
    company_name: "IUT de Rennes (35)",
    company_logo: "/companies/iut_of_rennes_logo.png",
    duration: "Sept 2024 - Aujourd'hui",
    experience_decription:
      "Organisation d’événements étudiants (soirées, intégration, tournois, ...), gestion et travail en équipe.",
  },
  {
    title: "Accompagnement d'étudiants en situation de handicap",
    company_name: "IUT de Rennes (35)",
    company_logo: "/companies/iut_of_rennes_logo.png",
    duration: "Sept 2024 - Juin 2025",
    experience_decription:
      "Prise de notes pour un étudiant en situation de handicap.",
  },
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
  },
];

import pcbDesignImg from "../../../public/skills_images/pcb_design.png";
import codeImg from "../../../public/skills_images/code.png";
import benchImg from "../../../public/skills_images/bench.jpg";
import rpiCaseImg from "../../../public/skills_images/rpi_case.png";
import smartArduinoCarImg from "../../../public/skills_images/smart_arduino_car.jpg";

const skills = [
  {
    title: "Électronique & Conception PCB",
    description:
      "Dimensionnement de circuits analogiques/numériques, routage de cartes avec EasyEDA et Proteus.",
    image: pcbDesignImg,
  },
  {
    title: "Programmation Embarquée",
    description:
      "Développement bas niveau (C/C++, Python) pour microcontrôleurs : famille ESP32, puces WCH (CH32V003), et Raspberry Pi Pico.",
    image: smartArduinoCarImg,
  },
  {
    title: "Développement Web & Logiciel",
    description:
      "Création d'applications Fullstack, Desktop et Mobile avec des technologies modernes : Vue.js, TypeScript, Tailwind CSS, Node.js.",
    image: codeImg,
  },
  {
    title: "Tests, Diagnostic & Réparation",
    description:
      "Recherche de pannes, réparation de cartes défectueuses et développement d'outils de visualisation pour des bancs de test.",
    image: benchImg,
  },
  {
    title: "Prototypage & CAO 3D",
    description:
      "Modélisation de pièces et boîtiers sur Fusion 360, impression 3D via Bambu Studio.",
    image: rpiCaseImg,
  },
];

import { CardBody, CardContainer, CardItem } from "@/components/ui/card-3d";

interface Props {
  title?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  description?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  image?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  btnLeft?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  btnRight?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
}

const props = withDefaults(defineProps<Props>(), {
  title: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 40,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  description: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 50,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  image: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 60,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  btnLeft: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 20,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  btnRight: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 20,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
});
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
    <section id="about-me" class="w-full pt-30 flex justify-center px-32">
      <div>
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
          <div class="w-120 ml-auto">
            <img src="/projects.png" />
          </div>
        </div>

        <h1
          class="mt-36 scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic text-shadow-xl"
        >
          Mon parcours
        </h1>

        <Timeline :items="educationnal_background" />

        <h1
          class="mt-36 scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic text-shadow-xl"
        >
          Engagement et expériences
        </h1>

        <div class="grid grid-cols-3 mt-15 gap-4 w-full">
          <CardContainer v-for="experience in experiences" class="h-full">
            <CardBody
              class="group/card relative h-full w-full rounded-xl border p-6 pb-18 bg-linear-to-t from-neutral-500/20 to-neutral-950 border-neutral-500 hover:shadow-2xl hover:shadow-neutral-500/10 transition-all duration-150"
            >
              <CardItem
                v-bind="props.title"
                class="text-lg font-bold text-white pr-24"
              >
                {{ experience.title }}
              </CardItem>

              <CardItem
                as="p"
                v-bind="props.description"
                class="mt-2 max-w-sm text-sm text-neutral-300 pr-24"
              >
                {{ experience.company_name }}
              </CardItem>

              <CardItem v-bind="props.image" class="absolute top-6 right-6">
                <img
                  :src="experience.company_logo"
                  height="1000"
                  width="1000"
                  class="h-15 w-15 object-contain group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              
              <CardItem
                as="p"
                v-bind="props.description"
                class="mt-2 max-w-sm text-sm text-neutral-300 text-justify"
              >
                {{ experience.experience_decription }}
              </CardItem>

              <div class="absolute bottom-6 right-6 flex items-center justify-end">
                <CardItem
                  v-bind="props.btnRight"
                  class="rounded-xl px-4 py-2 text-xs font-bold bg-neutral-300/30 text-white shadow-lg"
                >
                  {{ experience.duration }}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>

    <!-- projects section -->
    <section
      id="projects"
      class="w-full pt-30 flex justify-center flex-col px-32"
    >
      <h1
        class="scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic mb-6 text-shadow-xl"
      >
        Mes projets
      </h1>

      <AnimatedTestimonials
        :testimonials="projects"
        :autoplay="true"
        :duration="5000"
      >
        <RouterLink to="/projects">
          <LandingPageBtn
            text="Voir tout"
            theme="primary"
            :hyper-grow="false"
            class="h-full"
            ><Eye
          /></LandingPageBtn>
        </RouterLink>
      </AnimatedTestimonials>
    </section>

    <!-- skills section -->
    <section
      id="skills"
      class="w-full pt-30 flex justify-center flex-col px-32"
    >
      <h1
        class="scroll-m-20 text-6xl tracking-tight text-balance dm-serif-italic mb-10 text-shadow-xl"
      >
        Mes compétences
      </h1>

      <p>
        Cette section rassemble les compétences que j'ai acquises, tant par
        passion personnelle que dans le cadre de mon BUT GEII à l'IUT de Rennes.
        Pour consulter le détail complet de mon parcours par rapport au
        programme officiel, je vous invite à cliquer ici : Référentiel de
        compétences.
      </p>

      <BentoGrid class="mx-auto max-w-4xl mt-10">
        <BentoGridItem
          v-for="(skill, index) in skills"
          :key="index"
          :class="index === 3 || index === 6 ? 'md:col-span-2' : ''"
        >
          <template #header>
            <div class="flex w-full h-full overflow-hidden">
              <img
                :src="skill.image"
                class="w-full h-full object-cover"
                alt="Skill Image"
              />
            </div>
          </template>

          <template #title>
            <strong>{{ skill.title }}</strong>
          </template>

          <template #icon />

          <template #description>
            <p>{{ skill.description }}</p>
          </template>
        </BentoGridItem>
      </BentoGrid>
    </section>
  </main>
</template>
