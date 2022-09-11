<script setup>
  const props = {
    background: "black",
    "img-orientation": "test",
    "img-src": "moon-of-appalacia",
    title: "test",
    description: "test",
    "cta-text": "test",
    "cta-link": "test",
    featured: false,
  };
</script>

<template>
  <section class="halfhighlight halfhighlight-black grid md:grid-cols-12 md:grid-rows-1">
    <div class="halfhighlight-container-text md: relative flex items-center justify-center">
      <div class="halfhighlight-text mx-7 my-16">
        <div class="peer">
          <span class="h4 mb-4 block uppercase tracking-[2px]">LAST MONTH’S FEATURED STORY</span>
          <h2 v-if="props.title" class="h1 lg:mb-5">HAZY FULL MOON OF APPALACHIA</h2>

          <p class="mb-6"><span class="opacity-60">March 2nd 2020</span> by John Appleseed</p>

          <p class="opacity-60 lg:mb-12">
            The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are
            not high, the terrain is extremely rugged.
          </p>
          <button class="halfhighlight-button group flex items-baseline hover:underline">
            READ THE STORY <img class="ml-4 inline duration-300 ease-out group-hover:ml-6" src="/images/shared/desktop/arrow.svg" alt="" />
          </button>
        </div>
        <div class="decrative-gradient md:peer-hover:opacity-40"></div>
      </div>
    </div>
    <div class="halfhighlight-container-img">
      <img class="w-full md:hidden" :src="`/images/stories/mobile/moon-of-appalacia.jpg`" alt="" />
      <img class="hidden w-full md:block lg:hidden" :src="`/images/stories/tablet/moon-of-appalacia.jpg`" alt="" />
      <img class="hidden w-full lg:block" :src="`/images/stories/desktop/moon-of-appalacia.jpg`" alt="" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .halfhighlight {
    .decrative-gradient {
      width: 100%;
      height: 100%;
      background: rgb(90, 119, 255);

      background: radial-gradient(65% 65% at bottom left, #ffc593 0%, rgba(188, 113, 152, 0.496968) 52.36%, rgba(90, 119, 255, 0.0001) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      mix-blend-mode: normal;
      pointer-events: none;
      opacity: 0;
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

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
      .halfhighlight-container-text {
        grid-column-start: 1;
        grid-column-end: 8;

        grid-row-start: 1 !important;

        @apply row-span-full;
      }
      .halfhighlight-container-img {
        grid-area: 1/1/-1/-1;
        @apply row-span-full;
      }
    }
  }

  @media (min-width: 1024px) {
    .halfhighlight {
      .halfhighlight-container-img {
        grid-area: 1 / 1 / -1 / -1;
        @apply row-span-full;
      }

      .halfhighlight-text {
        max-width: 387px;
      }
    }
  }
</style>
