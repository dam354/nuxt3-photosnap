<template>
  <section>
    <HalfHighlight v-bind="post1Object" />
    <GroupHighlight />
    <GroupHighlight2 />
    <BannerBeta />
  </section>
</template>

<script setup>
  const post1Object = reactive({
    background: "black",
    "img-orientation": "right",
    "img-src": "hero.jpg",
    imgDirectory: "features",
    title: "FEATURES ",
    description: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",

    featured: true,
  });
</script>

<style lang="scss" scoped></style>
