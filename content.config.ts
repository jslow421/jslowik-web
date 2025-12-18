import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "**/*.md",
			schema: z.object({
				title: z.string(),
				date: z.date().optional(),
				description: z.string().optional(),
				imageUrl: z.string().optional(),
				author: z
					.object({
						name: z.string(),
						role: z.string(),
						imageUrl: z.string(),
					})
					.optional(),
				tags: z.array(z.string()).optional(),
			}),
		}),
	},
});
