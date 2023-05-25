<template>
  <div class="container mx-auto lg:m-10 nuxt-content">
    <ContentDoc />
  </div>
</template>
<style lang="scss">
$linkColor: #3182ce;

.nuxt-content {
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 1rem;

    > a {
      color: $linkColor;
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  pre {
    background-color: lightgray;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  code {
    font-family: monospace;
  }

  ul {
    list-style-type: disc;
    margin-bottom: 1rem;

    li {
      margin-left: 1rem;
      > a {
        color: $linkColor;
      }
    }
  }
}
</style>
