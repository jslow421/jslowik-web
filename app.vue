<template>
  <main class="bg-gray-50 min-h-screen">
    <div class="container mx-auto mb-2">
      <Navbar />
      <div class="py-4 sm:py-1">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
</script>
