<template>
  <div class="prose prose-zinc">
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>Post not found</div>
  </div>
</template>
<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>
