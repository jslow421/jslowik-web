<template>
  <main class="bg-primary text-secondary min-h-screen">
    <div class="container mx-auto">
      <Navbar />
      <div class="py-4 sm:py-1 mb-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-4xl mb-32">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="relative">
    <div class="absolute bottom-0 left-0">
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
</script>
