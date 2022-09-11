<script setup>
  import "@/assets/css/tailwind.scss";
</script>

<template>
  <div>
    <HeaderBlock />
    <main class="pt-[76px]">
      <slot />
    </main>
    <FooterBlock />
  </div>
</template>
