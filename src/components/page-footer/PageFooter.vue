<script setup lang="ts">
import BlackHoleBackground from "@/components/ui/bg-black-hole/BlackHoleBackground.vue";

import Github from "@/components/icons/Github.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import Youtube from "@/components/icons/Youtube.vue";
import { Mail } from "@lucide/vue";
</script>

<template>
  <footer class="h-120 px-4 md:px-10 lg:px-20 pt-20 md:pt-40">
    <BlackHoleBackground
      class="rounded-t-xl border border-zinc-800 bx-shadow-landing-page bg-neutral-900"
    >
      <div class="flex flex-col">
        <h1
          class="scroll-m-20 text-4xl md:text-6xl tracking-tight text-balance dm-serif-italic text-shadow-xl text-center text-shadow-xl"
        >
          On reste en contact ?
        </h1>

        <a
          href="mailto:ecoquelle06@gmail.com"
          class="scroll-m-20 text-lg sm:text-xl md:text-2xl break-all sm:break-normal px-2 tracking-tight text-balance mb-5 text-shadow-xl text-center text-shadow-xl underline my-2 hover:text-white/80 hover:scale-110 hover:font-bold hover:tracking-wide hover:px-2 active:scale-105 animate-all duration-200"
          >enzo.coquelle06@gmail.com</a
        >

        <div class="flex justify-center items-center gap-6 w-full">
          <a
            href="https://github.com/Zoliex/"
            target="_blank"
            class="hover:scale-110 active:scale-105 hover:px-2 animate-all duration-200"
            ><Github
              class="fill-white w-14 md:w-16 hover:fill-white/80 animate-all duration-200"
          /></a>
          <a
            href="https://www.linkedin.com/in/enzo-coquelle/"
            target="_blank"
            class="hover:scale-110 active:scale-105 hover:px-2 animate-all duration-200"
            ><Linkedin
              class="fill-white w-14 md:w-16 hover:fill-white/80 animate-all duration-200"
          /></a>
          <a
            href="https://www.youtube.com/channel/UCxv7IjcOtWG_3KmEcoQ71-A"
            target="_blank"
            class="hover:scale-110 active:scale-105 hover:px-2 animate-all duration-200"
            ><Youtube
              class="fill-white w-14 md:w-16 hover:fill-white/80 animate-all duration-200"
          /></a>
          <a
            href="mailto:ecoquelle06@gmail.com"
            target="_blank"
            class="hover:scale-110 active:scale-105 hover:px-2 mx-1 pl-1 animate-all duration-200"
            ><Mail
              :size="55"
              class="text-white w-14 md:w-16 hover:text-white/80 animate-all duration-200"
          /></a>
        </div>

        <p class="mt-8 text-center px-5">
          © 2023&nbsp;-&nbsp;{{ new Date().getFullYear() }}&nbsp;-&nbsp;Auteur
          du site&nbsp;:&nbsp;Enzo Coquelle&nbsp;<br />
          <span class="italic"
            >Tous les projets et le contenu proposé sur ce site sont soumis à
            des droits d'auteurs.</span
          >
        </p>
      </div>
    </BlackHoleBackground>
  </footer>
</template>
