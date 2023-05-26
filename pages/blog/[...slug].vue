<template>
  <div class="prose prose-zinc">
    <ContentDoc />
  </div>
</template>
<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
<style lang="scss">
a[target="_blank"] {
  &:after {
    content: url("/img/external.svg");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
}
</style>
