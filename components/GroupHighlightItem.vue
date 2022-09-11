<template>
  <section class="grouphighlight-item mb-20 mr-4 ml-4 flex flex-col items-center justify-end text-center first:ml-0 last:mr-0 lg:mb-0">
    <img class="mb-12" :src="`/images/features/desktop/${props.img}`" alt="" />
    <h3>{{ props.title }}</h3>

    <p>{{ props.description }}</p>
  </section>
</template>

<script setup>
  const props = defineProps({
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  });
</script>

<style lang="scss" scoped></style>
