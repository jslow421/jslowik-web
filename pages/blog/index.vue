<template>
  <div>
    <h1>John's Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts"></script>
