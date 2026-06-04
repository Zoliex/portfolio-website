<script setup lang="ts">
withDefaults(defineProps<{
    openExtern?: boolean;
    href?: string
}>(), {
    openExtern: false,
    href: '#',
});
</script>

<template>
    <a :href="href" class="text-shadow-lg text-shadow-black/50 hover:text-blue-500 hover:scale-110 hover:font-bold hover:tracking-wide hover:px-2 active:scale-105 animate-all duration-200" :target="openExtern ? '_blank' : ''"><slot></slot></a>
</template>