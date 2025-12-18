import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // "content" is the default collection name used for basic setups
    content: defineCollection({
      type: 'page', // 'page' for routing, 'data' for json/yaml data
      source: '**/*.md' // Look for all markdown files
    })
  }
})