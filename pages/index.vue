<template>
  <div>
    <HalfHighlight v-bind="post1Object" />
    <HalfHighlight v-bind="post2Object" />
    <HalfHighlight v-bind="post3Object" />
    <GridHighlight />
    <GroupHighlight />
  </div>
</template>

<script setup>
  import HalfHighlight from "@/components/HalfHighlight.vue";

  const post1Object = reactive({
    background: "black",
    "img-orientation": "right",
    "img-src": "create-and-share.jpg",
    title: "Create and share your photo stories. ",
    description: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    "cta-text": "GET AN INVITE",
    "cta-link": "/",
    featured: true,
  });

  const post2Object = reactive({
    background: "white",
    "img-orientation": "left",
    "img-src": "beautiful-stories.jpg",
    title: "Beautiful stories every time. ",
    description: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    "cta-text": "VIEW THE STORIES",
    "cta-link": "/",
  });

  const post3Object = reactive({
    background: "black",
    "img-orientation": "right",
    "img-src": "designed-for-everyone.jpg",
    title: "Designed for everyone",
    description: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    "cta-text": "VIEW THE STORIES",
    "cta-link": "/",
  });
</script>

<style lang="scss" scoped></style>
