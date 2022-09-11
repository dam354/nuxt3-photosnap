<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <GridHighlightItem v-bind="grid1" />
    <GridHighlightItem v-bind="grid2" />
    <GridHighlightItem v-bind="grid3" />
    <GridHighlightItem v-bind="grid4" />
  </section>
</template>

<script setup>
  const grid1 = reactive({
    "img-src": "mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid2 = reactive({
    "img-src": "cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid3 = reactive({
    "img-src": "18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid4 = reactive({
    "img-src": "architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
</script>

<style></style>
