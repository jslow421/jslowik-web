import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: 'docs/**',
      type: 'page'
    }),
    posts: defineCollection({
      source: 'blog/**',
      type: 'page',
      // You can define a schema for frontmatter validation
      schema: z.object({
        date: z.string(),
        tags: z.array(z.string())
      })
    })
  }
})