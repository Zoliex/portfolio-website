<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { Motion, useScroll, useTransform } from "motion-v";
import { ref, onMounted, onUnmounted, nextTick } from "vue";

interface Props {
  containerClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
  items?: {
    id: string;
    label: string;
    img: string;
    training_name: string;
    training_description: string
  }[];
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});

const timelineContainerRef = ref<HTMLElement | null>(null);
const timelineRef = ref<HTMLElement | null>(null);
const height = ref(0);

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 20%", "end 50%"],
});

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

const heightTransform = useTransform(
  scrollYProgress, 
  (pos) => `${pos * height.value}px`
);

let observer: ResizeObserver | null = null;

onMounted(async () => {
  await nextTick();
  if (timelineRef.value) {
    observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        height.value = entry.contentRect.height;
      }
    });
    observer.observe(timelineRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div
    ref="timelineContainerRef"
    class="w-full font-sans px-4 md:px-10"
  >
    <div
      ref="timelineRef"
      class="relative z-0 mx-auto max-w-7xl pb-20"
    >
      <div
        v-for="(item, index) in props.items"
        :key="item.id + index"
        class="flex justify-start pt-10 md:gap-10 md:pt-40"
      >
        <div
          class="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
        >
          <div
            class="absolute left-3 flex size-10 items-center justify-center rounded-full md:left-3"
          >
            <div
              class="size-4 rounded-full border p-2 border-neutral-700 bg-neutral-800"
            />
          </div>
          <h3
            class="hidden text-xl font-bold md:block md:pl-20 md:text-5xl"
          >
            {{ item.label }}
          </h3>
        </div>

        <div class="flex flex-col">
          <img :src="item.img" class="w-64 rounded-xl border border-mist-500 shadow-2xl">
          
          <h3
            class="mt-10 block text-left text-2xl font-bold text-neutral-200 dm-serif-italic"
          >
            {{ item.training_name }}
          </h3>
          <p
            class="mt-4 mb-8 text-md font-normal text-neutral-400 text-wrap text-break"
          >
          {{ item.training_description }}
          </p>
        </div>
        
      </div>

      <div
        :style="{ height: `${height}px` }"
        class="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% md:left-8 dark:via-neutral-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <Motion
          as="div"
          :style="{
            height: heightTransform,
            opacity: opacityTransform,
          }"
          class="absolute inset-x-0 top-20 w-[2px] rounded-full bg-linear-to-t from-cyan-500 from-0% via-blue-500 via-10% to-transparent"
        />
      </div>
    </div>
  </div>
</template>