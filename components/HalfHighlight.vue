<script setup>
  const props = defineProps({
    background: { type: String, required: false },
    "img-orientation": { type: String, required: false },
    "img-src": { type: String, required: false },
    imgDirectory: { type: String, default: "home" },
    title: { type: String, required: false },
    description: { type: String, required: false },
    ctaText: { type: String, required: false },
    "cta-link": { type: String, required: false },
    featured: { type: Boolean, required: false, default: false },
  });

  const classObject = reactive({
    "halfhighlight-right": props.imgOrientation === "right",
    "halfhighlight-left": props.imgOrientation === "left",
    "halfhighlight-black": props.background === "black",
    "halfhighlight-white": props.background === "white",
  });
</script>

<template>
  <section :class="classObject" class="halfhighlight grid md:grid-cols-12 md:grid-rows-1">
    <div class="halfhighlight-container-text relative flex items-center justify-center">
      <div class="halfhighlight-text mx-7 my-16">
        <h2 v-if="props.title" class="h1 lg:mb-5">{{ props.title }}</h2>
        <p :class="props.ctaText ? 'lg:mb-12' : 'lg:mb-0'" class="opacity-60">{{ props.description }}</p>
        <button v-if="props.ctaText" class="halfhighlight-button group flex items-baseline hover:underline">
          {{ props.ctaText }} <img class="ml-4 inline duration-300 ease-out group-hover:ml-6" src="/images/shared/desktop/arrow.svg" alt="" />
        </button>
        <div v-if="props.featured" class="decrative-gradient"></div>
      </div>
    </div>
    <div class="halfhighlight-container-img">
      <img class="w-full md:hidden" :src="`/images/${props.imgDirectory}/mobile/${props.imgSrc}`" alt="" />
      <img class="hidden w-full md:block lg:hidden" :src="`/images/${props.imgDirectory}/tablet/${props.imgSrc}`" alt="" />
      <img class="hidden w-full lg:block" :src="`/images/${props.imgDirectory}/desktop/${props.imgSrc}`" alt="" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .halfhighlight {
    grid-auto-rows: min-content;

    &.halfhighlight-white {
      @apply text-pure-black;
    }
    &.halfhighlight-black {
      @apply bg-pure-black text-pure-white;

      .halfhighlight-button {
        @apply text-pure-white;
        img {
          -webkit-filter: invert(100%); /* Safari/Chrome */
          filter: invert(100%);
        }
      }
    }

    .decrative-gradient {
      position: absolute;
      top: 0;
      left: 20;
      width: 128px;
      height: 6px;

      @apply bg-gradient-to-tr from-orange via-pink to-blue;
    }

    .halfhighlight-container-text {
      @apply row-span-1 row-start-2;
    }
    .halfhighlight-container-img {
      grid-auto-rows: 1fr;
      @apply row-span-1 row-start-1;
    }

    // .halfhighlight-text {
    //   max-width: 370px;
    // }
  }
  @media (min-width: 768px) {
    .halfhighlight {
      &.halfhighlight-left {
        .halfhighlight-container-text {
          grid-column-start: 4;
          grid-column-end: 13;

          grid-row-start: 1 !important;

          @apply row-span-full;
        }
        .halfhighlight-container-img {
          grid-column-start: 1;
          grid-column-end: 4;
          @apply row-span-full;
        }
      }

      &.halfhighlight-right {
        .halfhighlight-container-text {
          grid-column-start: 1;
          grid-column-end: 8;

          grid-row-start: 1 !important;

          @apply row-span-full;
        }
        .halfhighlight-container-img {
          grid-column-start: 9;
          grid-column-end: 13;
          @apply row-span-full;
        }
      }

      .decrative-gradient {
        height: 40%;
        top: 50%;
        left: 0;
        width: 6px;
        transform: translate(0, -50%);
      }
    }
  }
  @media (min-width: 1024px) {
    .halfhighlight {
      &.halfhighlight-left {
        .halfhighlight-container-text {
          grid-column-start: 8;
          grid-column-end: 13;
        }
        .halfhighlight-container-img {
          grid-column-start: 1;
          grid-column-end: 8;
        }
      }

      &.halfhighlight-right {
        .halfhighlight-container-text {
          grid-column-start: 1;
          grid-column-end: 6;
        }
        .halfhighlight-container-img {
          grid-column-start: 6;
          grid-column-end: 13;
        }
      }
      .halfhighlight-container-text {
        grid-column-start: 1;
        grid-column-end: 6;
      }
      .halfhighlight-container-img {
        grid-column-start: 6;
        grid-column-end: 13;
      }
      .halfhighlight-text {
        max-width: 387px;
      }
    }
  }
</style>
