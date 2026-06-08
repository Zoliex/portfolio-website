<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Menu, X } from '@lucide/vue';
import { onClickOutside } from '@vueuse/core';
import LiquidGlass from "@/components/ui/liquid-glass/LiquidGlass.vue";
import Link from "@/components/link/Link.vue";

const isMobileMenuOpen = ref(false);
const closeMenu = () => isMobileMenuOpen.value = false;

const navContainerRef = ref(null);
onClickOutside(navContainerRef, () => {
  if (isMobileMenuOpen.value) {
    closeMenu();
  }
});

const isChromium = ref(true);

onMounted(() => {
  const ua = navigator.userAgent.toLowerCase();
  const isFirefox = ua.includes('firefox');
  const isSafari = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('crios');
  
  if (isFirefox || isSafari) {
    isChromium.value = false;
  }
});
</script>

<template>
  <nav ref="navContainerRef" class="fixed top-8 z-[800] w-full flex justify-center px-8 md:px-12">
    <div class="relative w-full md:max-w-fit flex flex-col items-center">
      <component 
        :is="isChromium ? LiquidGlass : 'div'"
        :class="!isChromium ? 'backdrop-blur-xl bg-black/40 border border-white/10 rounded-[2rem] shadow-2xl w-full' : ''"
        containerClass="left-8 right-8 md:left-auto md:right-auto"
      >
          <div class="px-6 py-4 h-18 flex justify-between md:gap-20 items-center w-full">
            <a class="flex gap-4 items-center" href="https://github.com/Zoliex/" target="_blank">
              <img src="/profile_picture.jpg" class="w-10 md:w-12 rounded-lg">
              <div>
                <h5 class="font-bold text-sm md:text-base">Enzo Coquelle</h5>
                <span class="text-xs md:text-sm hover:text-blue-500 hover:scale-110 hover:font-bold hover:tracking-wide active:scale-105 animate-all duration-200">@Zoliex</span>
              </div>
            </a>
            
            <div class="hidden md:flex gap-5 justify-center">
              <Link href="/#about-me">A propos</Link>
              <Link href="/#projects">Mes projets</Link>
              <Link href="/#skills">Mes compétences</Link>
              <Link href="/CV_ENZO_COQUELLE_MARS_2026.pdf" :open-extern="true">Mon CV</Link>
            </div>

            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden ml-6 flex items-center justify-center text-white/80 hover:text-white transition-colors">
              <Menu v-if="!isMobileMenuOpen" class="w-7 h-7" />
              <X v-else class="w-7 h-7" />
            </button>
          </div>
      </component>

      <!-- Mobile Dropdown -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0 scale-95"
        enter-to-class="transform translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 scale-100"
        leave-to-class="transform -translate-y-4 opacity-0 scale-95"
      >
        <div v-show="isMobileMenuOpen" class="md:hidden absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[100vw] backdrop-blur-2xl bg-black/60 border-y border-white/10 shadow-2xl overflow-hidden flex flex-col items-center py-10 gap-8 z-[700] text-lg font-medium">
          <div @click="closeMenu"><Link href="/#about-me">A propos</Link></div>
          <div @click="closeMenu"><Link href="/#projects">Mes projets</Link></div>
          <div @click="closeMenu"><Link href="/#skills">Mes compétences</Link></div>
          <div @click="closeMenu"><Link href="/CV_ENZO_COQUELLE_MARS_2026.pdf" :open-extern="true">Mon CV</Link></div>
        </div>
      </Transition>
    </div>
  </nav>
</template>