<template>
  <div class="prose">
    <ContentDoc />
  </div>
  <div
    data-iframe-width="150"
    data-iframe-height="270"
    data-share-badge-id="84b32074-d0f9-422d-a472-92b8af0c82fb"
    data-share-badge-host="https://www.credly.com"
  ></div>
</template>
<script setup lang="ts">
onMounted(async () => {
  let credlyScript = document.createElement("script");
  credlyScript.setAttribute(
    "src",
    "https://cdn.credly.com/assets/utilities/embed.js"
  );
  document.head.appendChild(credlyScript);
});
</script>
