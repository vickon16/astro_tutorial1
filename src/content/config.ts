import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: image(),
    categories: z.array(z.string()),
    featured: z.boolean(),
  }),
});

export const collections = {posts};
