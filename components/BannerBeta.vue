<template>
  <section class="banner-beta bg-slate-200 py-16">
    <div class="mx-7 flex flex-col items-baseline justify-between md:flex-row">
      <div class="mb-6 text-2xl font-bold text-pure-white md:mb-0">We’re in beta. Get your invite today!</div>
      <ButtonBlock />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  .banner-beta {
    background-image: url("images/shared/mobile/bg-beta.jpg");
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .banner-beta::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    @apply bg-gradient-to-tr from-orange via-pink to-blue;
  }
  @media (min-width: 768px) {
    .banner-beta {
      background-image: url("images/shared/tablet/bg-beta.jpg");
    }
  }
  @media (min-width: 768px) {
    .banner-beta {
      background-image: url("images/shared/desktop/bg-beta.jpg");
    }
  }
</style>
