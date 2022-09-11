<template>
  <article class="group relative mb-0 w-full text-pure-white duration-300 ease-out lg:hover:-translate-y-4">
    <img class="w-full lg:hidden" :src="`/images/stories/mobile/${props.imgSrc}`" alt="" />
    <img class="hidden w-full lg:block" :src="`/images/stories/desktop/${props.imgSrc}`" alt="" />

    <div class="gridHighlight-overlay"></div>
    <div class="absolute right-0 bottom-0 left-0 px-8 pb-8">
      <div class="mb-5">
        <p v-show="props.date" class="text-xs">{{ props.date }}</p>
        <h2 class="leading-6">{{ props.title }}</h2>
        <p class="text-xs leading-3">by {{ props.author }}</p>
      </div>
      <hr class="mb-5" />

      <button class="halfhighlight-button flex w-full items-baseline justify-between hover:underline">
        READ STORY<img class="inline invert delay-75 duration-300 ease-out group-hover:pr-4" src="/images/shared/desktop/arrow.svg" alt="" />
      </button>
    </div>
    <div class="decrative-gradient duration-400 hidden transition-all ease-out lg:group-hover:block"></div>
  </article>
</template>

<script setup>
  const props = defineProps({
    "img-src": { type: String, required: false },
    title: { type: String, required: false },
    author: { type: String, required: false },
    "cta-link": { type: String, required: false },
    "cta-text": { type: String, required: false },
    date: { type: String, required: false },
  });
</script>

<style scoped>
  .decrative-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 6px;

    @apply bg-gradient-to-tr from-orange via-pink to-blue;
  }

  .gridHighlight-overlay {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 1) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 33%;
  }
</style>
