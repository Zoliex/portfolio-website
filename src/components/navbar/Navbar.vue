<script setup lang="ts">
import LiquidGlass from "@/components/ui/liquid-glass/LiquidGlass.vue";
import Link from "@/components/link/Link.vue";
</script>

<template>
  <nav class="fixed top-8 z-800 w-full flex justify-center">
    <LiquidGlass>
        <div class="px-6 py-4 h-18 flex gap-20 items-center">
          <a class="flex gap-4 items-center" href="https://github.com/Zoliex/" target="_blank">
            <img src="/profile_picture.jpg" class="w-12 rounded-lg">
            <div>
              <h5 class="font-bold">Enzo Coquelle</h5>
              <span class="text-sm hover:text-blue-500 hover:scale-110 hover:font-bold hover:tracking-wide active:scale-105 animate-all duration-200">@Zoliex</span>
            </div>
          </a>
          <div class="flex gap-5 justify-center">
            <Link href="#about-me">A propos</Link>
            <Link href="#projects">Mes projets</Link>
            <Link href="#skills">Mes compétences</Link>
            <Link href="/CV_ENZO_COQUELLE_MARS_2026.pdf" :open-extern="true">Mon CV</Link>
          </div>
        </div>
    </LiquidGlass>
  </nav>
</template>