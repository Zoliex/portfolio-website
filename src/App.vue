<script setup lang="ts">
//Libraries
import { isMobile } from 'mobile-device-detect';

//Components
import SmoothCursor from "@/components/ui/smooth-cursor/SmoothCursor.vue";
import Navbar from '@/components/navbar/Navbar.vue';
import PageFooter from '@/components/page-footer/PageFooter.vue';

import { RouterView } from 'vue-router';
import { VueLenis, useLenis } from 'lenis/vue' // Also available as global imports, no need to import them manually
import { watch } from 'vue'

const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
  console.log(lenis)
})

watch(
  lenis,
  (lenis) => {
    // lenis instance
    console.log(lenis)
  },
  { immediate: true }
)
</script>

<template>
  <Navbar />

  <RouterView />

  <PageFooter />
  
  <SmoothCursor v-if="!isMobile" class="!z-900" />
  <VueLenis root :options="lenisOptions" />
</template>