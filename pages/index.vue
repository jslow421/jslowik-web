<template>
  <div class="prose prose-invert">
    <ContentRenderer v-if="page" :value="page" />
  </div>
  <div class="mt-8 bg-white p-4 rounded-lg inline-block">
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="84b32074-d0f9-422d-a472-92b8af0c82fb"
      data-share-badge-host="https://www.credly.com"
    ></div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

onMounted(async () => {
  let credlyScript = document.createElement("script");
  credlyScript.setAttribute(
    "src",
    "https://cdn.credly.com/assets/utilities/embed.js"
  );
  document.head.appendChild(credlyScript);
});
</script>
