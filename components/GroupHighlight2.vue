<template>
  <section class="container mx-auto my-24 flex flex-col items-center justify-between first:my-[120px] lg:flex-row lg:items-end">
    <GroupHighlightItem img="custom-domain.svg" title="Custom Domain" description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!" />
    <GroupHighlightItem
      img="boost-exposure.svg"
      title="Boost Your Exposure"
      description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
    />
    <GroupHighlightItem
      img="drag-drop.svg"
      title="Drag & Drop Image"
      description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
    />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  .grouphighlight-item {
    max-width: 350px;
  }
</style>
