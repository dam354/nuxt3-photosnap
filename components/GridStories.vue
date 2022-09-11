<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <GridHighlightItem v-bind="grid1" />
    <GridHighlightItem v-bind="grid2" />
    <GridHighlightItem v-bind="grid3" />
    <GridHighlightItem v-bind="grid4" />
    <GridHighlightItem v-bind="grid5" />
    <GridHighlightItem v-bind="grid6" />
    <GridHighlightItem v-bind="grid7" />
    <GridHighlightItem v-bind="grid8" />

    <GridHighlightItem v-bind="grid9" />
    <GridHighlightItem v-bind="grid10" />
    <GridHighlightItem v-bind="grid11" />
    <GridHighlightItem v-bind="grid12" />
    <GridHighlightItem v-bind="grid13" />
    <GridHighlightItem v-bind="grid14" />
    <GridHighlightItem v-bind="grid15" />
    <GridHighlightItem v-bind="grid16" />
  </section>
</template>

<script setup>
  const grid1 = reactive({
    "img-src": "mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
    "cta-link": "/",
    "cta-text": "READ STORY",
    date: "April 16th 2020",
  });

  const grid2 = reactive({
    "img-src": "cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    "cta-link": "/",
    "cta-text": "READ STORY",
    date: "April 14th 2020",
  });

  const grid3 = reactive({
    "img-src": "18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    "cta-link": "/",
    "cta-text": "READ STORY",
    date: "April 11th 2020",
  });

  const grid4 = reactive({
    "img-src": "architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
    "cta-link": "/",
    "cta-text": "READ STORY",
    date: "April 9th 2020",
  });
  const grid5 = reactive({
    date: "April 7th 2020",
    title: "World Tour 2019",
    author: "Timothy Wagner",
    "img-src": "world-tour.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
  const grid6 = reactive({
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    author: "William Malcolm",
    "img-src": "unforeseen-corners.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
  const grid7 = reactive({
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    "img-src": "king-on-africa.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
  const grid8 = reactive({
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    "img-src": "trip-to-nowhere.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid9 = reactive({
    date: "March 19th 2020",
    title: "Rage of The Sea",
    author: "Mohammed Abdul",
    "img-src": "rage-of-the-sea.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
  const grid10 = reactive({
    date: "March 16th 2020",
    title: "Running Free",
    author: "Michelle",
    "img-src": "running-free.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
  const grid11 = reactive({
    date: "March 11th 2020",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    "img-src": "behind-the-waves.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
  const grid12 = reactive({
    date: "March 9th 2020",
    title: "Calm Waters",
    author: "Samantha Brooke",
    "img-src": "calm-waters.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid13 = reactive({
    date: "March 5th 2020",
    title: "The Milky Way",
    author: "Benjamin Cruz",
    "img-src": "milky-way.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid14 = reactive({
    date: "March 4th 2020",
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
    "img-src": "dark-forest.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid15 = reactive({
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    author: "Michelle",
    "img-src": "somwarpet.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });

  const grid16 = reactive({
    date: "February 25th 2020",
    title: "Land of Dreams",
    author: "William Malcolm",
    "img-src": "land-of-dreams.jpg",
    "cta-link": "/",
    "cta-text": "READ STORY",
  });
</script>

<style></style>
