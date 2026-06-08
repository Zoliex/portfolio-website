<script setup lang="ts">
//Libraries
import { isMobile } from 'mobile-device-detect';

//Components
import SmoothCursor from "@/components/ui/smooth-cursor/SmoothCursor.vue";
import Navbar from '@/components/navbar/Navbar.vue';
import PageFooter from '@/components/page-footer/PageFooter.vue';

import { RouterView } from 'vue-router';
import { VueLenis } from 'lenis/vue';

const lenisOptions = {
  // lenis options (optional)
}
</script>

<template>
  <Navbar />

  <RouterView />

  <PageFooter />
  
  <SmoothCursor v-if="!isMobile" />
  <VueLenis root :options="lenisOptions" />
</template>