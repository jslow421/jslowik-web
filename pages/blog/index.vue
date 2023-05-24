<template>
  <div>
    <h1>Blog Posts</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts"></script>
