<script lang="ts" setup>
import { ArrowRight, ArrowLeft } from "@lucide/vue";
import { Motion } from "motion-v";
import { ref, computed, onMounted, onUnmounted } from "vue";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}
interface Props {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  testimonials: () => [],
  autoplay: () => false,
  duration: 5000,
});

const active = ref(0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interval = ref<any>();

const activeTestimonialQuote = computed(() => {
  return props.testimonials[active.value].quote.split(" ");
});

onMounted(() => {
  if (props.autoplay) {
    interval.value = setInterval(handleNext, props.duration);
  }
});

onUnmounted(() => {
  if (!interval.value) {
    clearInterval(interval.value);
  }
});

function handleNext() {
  active.value = (active.value + 1) % props.testimonials.length;
}

function handlePrev() {
  active.value = (active.value - 1 + props.testimonials.length) % props.testimonials.length;
}

function isActive(index: number) {
  return active.value === index;
}

function randomRotateY() {
  return Math.floor(Math.random() * 21) - 10;
}
</script>

<template>
  <div class="mx-auto w-full py-10 font-sans antialiased md:max-w-4xl md:px-8 md:py-20 lg:px-12">
    <div class="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
      <div>
        <div class="relative h-64 w-full sm:h-80 lg:h-96">
            <Motion
              v-for="(testimonial, index) in props.testimonials"
              :key="testimonial.image"
              as="div"
              :initial="{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }"
              :animate="{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }"
              :exit="{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }"
              :transition="{
                duration: 0.4,
                ease: 'easeInOut',
              }"
              class="absolute inset-0 origin-bottom"
            >
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                width="500"
                height="500"
                :draggable="false"
                class="size-full rounded-3xl object-cover object-center"
              />
            </Motion>
        </div>
      </div>
      <div class="flex flex-col justify-between py-4">
        <Motion
          :key="active"
          as="div"
          :initial="{
            y: 20,
            opacity: 0,
          }"
          :animate="{
            y: 0,
            opacity: 1,
          }"
          :exit="{
            y: -20,
            opacity: 0,
          }"
          :transition="{
            duration: 0.2,
            ease: 'easeInOut',
          }"
        >
          <h3 class="text-2xl font-bold text-white">
            {{ props.testimonials[active].name }}
          </h3>
          <p class="text-sm text-neutral-200">
            {{ props.testimonials[active].designation }}
          </p>
          <Motion
            as="p"
            class="mt-8 text-lg text-neutral-300"
          >
            <Motion
              v-for="(word, index) in activeTestimonialQuote"
              :key="index"
              as="span"
              :initial="{
                filter: 'blur(10px)',
                opacity: 0,
                y: 5,
              }"
              :animate="{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
              }"
              :transition="{
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.02 * index,
              }"
              class="inline-block"
            >
              {{ word }}&nbsp;
            </Motion>
          </Motion>
        </Motion>
        <div class="flex gap-5 pt-12 lg:pt-0">
          <button
            class="group/button flex items-center justify-center aspect-square bg-neutral-300/30 border-neutral-500 drop-shadow-neutral-800/50 hover:drop-shadow-neutral-800/30' rounded-full border focus:outline-2 focus:outline-offset-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 hover:font-bold hover:tracking-wide active:scale-105 animate-all duration-200"
            @click="handlePrev"
          >
            <ArrowLeft
              class="w-6 h-6"
            />
          </button>
          <button
            class="group/button flex items-center justify-center aspect-square bg-neutral-300/30 border-neutral-500 drop-shadow-neutral-800/50 hover:drop-shadow-neutral-800/30' rounded-full border focus:outline-2 focus:outline-offset-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 hover:font-bold hover:tracking-wide active:scale-105 animate-all duration-200"
            @click="handleNext"
          >
            <ArrowRight
              class="w-6 h-6"
            />
          </button>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
