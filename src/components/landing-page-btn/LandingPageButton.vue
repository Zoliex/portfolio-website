<script setup lang="ts">
withDefaults(defineProps<{
    text?: string;
    theme?: 'primary' | 'secondary';
    hyperGrow?: boolean;
}>(), {
    text: '',
    theme: 'primary',
    hyperGrow: true
});
</script>

<template>
    <button :class="{ 'hover:px-10': hyperGrow, 'bg-linear-to-t from-cyan-500/60 to-blue-500/60 border-blue-400 drop-shadow-blue-800/50 hover:drop-shadow-blue-800/30': theme == 'primary', 'bg-neutral-300/30 border-neutral-500 drop-shadow-neutral-800/50 hover:drop-shadow-neutral-800/30': theme != 'primary'}" class="flex gap-2 rounded-full px-8 py-3 border focus:outline-2 items-center focus:outline-offset-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 hover:font-bold hover:tracking-wide active:scale-105 animate-all duration-200"><slot :class="{'!text-black': theme == 'secondary'}"></slot> {{ text }}</button>
</template>