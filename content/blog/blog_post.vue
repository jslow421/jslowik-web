<!-- pages/blog/_slug.vue -->

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.bodyHtml" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug;
    const post = await $content("blog", slug).fetch();

    return { post };
  },
};
</script>
