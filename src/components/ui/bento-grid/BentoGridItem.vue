<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(
        `group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl border-white/20 bg-black shadow-none shadow-black`,
        props.class,
      )
    "
  >
    <slot name="header" />
    <div class="transition duration-200 group-hover/bento:translate-x-2">
      <slot name="icon" />
      <div class="my-2 font-sans font-bold text-neutral-200">
        <slot name="title" />
      </div>
      <div class="font-sans text-xs font-normal text-neutral-300">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>
