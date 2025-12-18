import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // "content" is the default collection name used for basic setups
    content: defineCollection({
      type: 'page', // 'page' for routing, 'data' for json/yaml data
      source: '**/*.md', // Look for all markdown files
      schema: z.object({
        title: z.string(),
        date: z.date().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        author: z.object({
          name: z.string(),
          role: z.string(),
          imageUrl: z.string()
        }).optional(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})