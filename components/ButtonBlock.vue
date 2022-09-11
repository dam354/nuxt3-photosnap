<template>
  <button :class="`button-block-${[props.ctaColor]}`" v-if="props.ctaText" class="button-block group flex items-baseline hover:underline">
    {{ props.ctaText }} <img class="ml-4 inline duration-300 ease-out group-hover:ml-6" src="/images/shared/desktop/arrow.svg" alt="" />
  </button>
</template>

<script setup>
  //   const props = defineProps({
  //     ctaText: { type: String, required: true },
  //     ctaLink: { type: String, required: true },
  //     ctaType: { type: String, required: true },
  //     ctaColor: { type: String, required: true },
  //   });

  const props = ref({
    ctaText: "GET AN INVITE",
    ctaLink: "/",
    ctaType: "text",
    ctaColor: "black",
  });
</script>

<style lang="scss" scoped>
  .button-block {
    &-white {
      @apply text-pure-black;
    }
    &-black {
      @apply text-pure-white;

      img {
        -webkit-filter: invert(100%); /* Safari/Chrome */
        filter: invert(100%);
      }
    }
  }
</style>
