<template>
  <main class="bg-gray-50 min-h-screen">
    <div class="container mx-auto mb-2">
      <Navbar />
      <div class="py-4 sm:py-1 mb-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-4xl">
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

useHead({
  title: "John Slowik",
  meta: [
    {
      name: "description",
      content: "John Slowik | Software Engineer | Solutions Architect.",
    },
  ],
});
</script>
