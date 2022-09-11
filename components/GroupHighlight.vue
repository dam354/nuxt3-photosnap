<template>
  <section class="container mx-auto my-24 flex flex-col items-center justify-between first:my-[120px] lg:flex-row lg:items-end">
    <GroupHighlightItem img="responsive.svg" title="100% Responsive" description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen." />
    <GroupHighlightItem img="no-limit.svg" title="No Photo Upload Limit" description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go." />
    <GroupHighlightItem img="embed.svg" title="Available to Embed" description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more." />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  .grouphighlight-item {
    max-width: 350px;
  }
</style>
