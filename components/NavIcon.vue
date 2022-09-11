<template>
  <div class="flex h-5 flex-col items-center justify-center" @click="active = !active">
    <div :class="{ '-translate-y-1': active, 'rotate-45': active }" class="h-[1px] w-5 origin-center translate-y-1 bg-pure-black duration-300"></div>
    <div :class="{ 'translate-y-1': active, '-rotate-45': active }" class="h-[1px] w-5 origin-center -translate-y-1 bg-pure-black duration-300"></div>
  </div>
</template>

<script setup>
  // const active = ref(false);

  const props = defineProps({
    active: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped></style>
