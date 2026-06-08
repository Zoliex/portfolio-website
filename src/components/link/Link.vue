<script setup lang="ts">
import { RouterLink } from 'vue-router';

withDefaults(defineProps<{
    openExtern?: boolean;
    href?: string
}>(), {
    openExtern: false,
    href: '#',
});
</script>

<template>
    <a v-if="openExtern" 
       :href="href" 
       target="_blank" 
       class="text-shadow-lg text-shadow-black/50 hover:text-blue-500 hover:scale-110 hover:font-bold hover:tracking-wide hover:px-2 active:scale-105 animate-all duration-200">
        <slot></slot>
    </a>

    <router-link v-else 
                 :to="href" 
                 class="text-shadow-lg text-shadow-black/50 hover:text-blue-500 hover:scale-110 hover:font-bold hover:tracking-wide hover:px-2 active:scale-105 animate-all duration-200">
        <slot></slot>
    </router-link>
</template>