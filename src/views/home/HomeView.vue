<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { client, urlFor } from "@/lib/sanity";
import { useWindowScroll, useWindowSize } from "@vueuse/core";
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
const { width } = useWindowSize();

const dynamicPadding = computed(() => {
  if (width.value <= 640) return 0;

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

const projects = ref<any[]>([]);

onMounted(async () => {
  const query = `*[_type == "project"] | order(creationDate desc)[0...3] {
    nameOfProject,
    description,
    mainImage,
    projectType
  }`;
  const data = await client.fetch(query);
  projects.value = data.map((p: any) => ({
    quote: p.description,
    name: p.nameOfProject,
    designation: p.projectType,
    image: p.mainImage ? urlFor(p.mainImage).width(800).height(800).auto('format').quality(80).url() : '',
  }));
});

const skills = [
  {
    title: "Électronique & Conception PCB",
    description:
      "Dimensionnement de circuits analogiques/numériques, routage de cartes avec EasyEDA et Proteus.",
    image: "/skills_images/pcb_design.png",
  },
  {
    title: "Programmation Embarquée",
    description:
      "Développement bas niveau (C/C++, Python) pour microcontrôleurs : famille ESP32, puces WCH (CH32V003), et Raspberry Pi Pico.",
    image: "/skills_images/smart_arduino_car.jpg",
  },
  {
    title: "Développement Web & Logiciel",
    description:
      "Création d'applications Fullstack, Desktop et Mobile avec des technologies modernes : Vue.js, TypeScript, Tailwind CSS, Node.js.",
    image: "/skills_images/code.png",
  },
  {
    title: "Tests, Diagnostic & Réparation",
    description:
      "Recherche de pannes, réparation de cartes défectueuses et développement d'outils de visualisation pour des bancs de test.",
    image: "/skills_images/bench.jpg",
  },
  {
    title: "Prototypage & CAO 3D",
    description:
      "Modélisation de pièces et boîtiers sur Fusion 360, impression 3D via Bambu Studio.",
    image: "/skills_images/rpi_case.png",
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

      <div class="absolute px-5 pt-26 w-full md:w-auto">
        <BlurReveal :delay="0.2" :duration="0.75">
          <h2
            class="text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl/none"
          >
            <span class="dm-serif-italic">Kenavo</span> 👋
          </h2>
          <span
            class="block mt-2 text-2xl tracking-tighter text-pretty sm:text-4xl md:text-5xl lg:text-6xl/none"
          >
            Moi c'est Enzo Coquelle
          </span>

          <span
            class="block mt-4 text-xl tracking-tighter text-pretty sm:text-2xl md:text-2xl/none"
          >
            Etudiant passionné en BUT GEII
          </span>
        </BlurReveal>
        <div class="flex flex-col sm:flex-row mt-10 md:mt-15 gap-4 md:gap-8 w-full sm:w-auto">
          <a href="/CV_ENZO_COQUELLE_MARS_2026.pdf" target="_blank" class="w-full sm:w-auto">
            <LandingPageBtn text="Voir mon CV" theme="secondary" class="w-full justify-center"
              ><Eye
            /></LandingPageBtn>
          </a>
          <a href="#about-me" class="w-full sm:w-auto">
            <LandingPageBtn text="En savoir plus" theme="primary" class="w-full justify-center"
              ><ChevronDown
            /></LandingPageBtn>
          </a>
        </div>
      </div>
    </section>

    <!-- About me section -->
    <section id="about-me" class="w-full pt-20 md:pt-30 flex justify-center px-8 md:px-10 xl:px-32">
      <div>
        <h1
          class="scroll-m-20 text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance dm-serif-italic mb-10 text-shadow-xl"
        >
          A propos
        </h1>

        <div class="flex flex-col lg:flex-row w-full gap-8 lg:gap-16 items-center">
          <p class="w-full lg:w-1/2 leading-7">
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
          <div class="w-full sm:w-2/3 lg:w-1/2 mx-auto lg:ml-auto">
            <img src="/projects.png" class="w-full h-auto" />
          </div>
        </div>

        <h1
          class="mt-12 md:mt-36 scroll-m-20 text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance dm-serif-italic text-shadow-xl"
        >
          Mon parcours
        </h1>

        <Timeline :items="educationnal_background" />

        <h1
          class="mt-12 md:mt-36 scroll-m-20 text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance dm-serif-italic text-shadow-xl"
        >
          Engagement et <br class="block md:hidden" /> expériences
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 mt-8 md:mt-15 gap-6 md:gap-4 w-full">
          <CardContainer v-for="experience in experiences" class="h-full w-full">
            <CardBody
              class="group/card relative h-full w-full rounded-xl border p-6 pb-18 bg-linear-to-t from-neutral-500/20 to-neutral-950 border-neutral-500 hover:shadow-2xl hover:shadow-neutral-500/10 transition-all duration-150"
            >
              <CardItem
                v-bind="props.title"
                class="text-lg font-bold text-white pr-16 hyphens-auto break-words"
                lang="fr"
              >
                {{ experience.title }}
              </CardItem>

              <CardItem
                as="p"
                v-bind="props.description"
                class="mt-2 max-w-sm text-sm text-neutral-300 pr-16"
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
      class="w-full pt-20 md:pt-30 flex justify-center flex-col px-8 md:px-10 xl:px-32"
    >
      <h1
        class="scroll-m-20 text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance dm-serif-italic mb-6 text-shadow-xl"
      >
        Mes projets
      </h1>

      <AnimatedTestimonials
        v-if="projects.length > 0"
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
      class="w-full pt-20 md:pt-30 flex justify-center flex-col px-8 md:px-10 xl:px-32"
    >
      <h1
        class="scroll-m-20 text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance dm-serif-italic mb-6 md:mb-10 text-shadow-xl"
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
