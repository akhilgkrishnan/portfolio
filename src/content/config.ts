import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    url: z.string(),
    imgSrc: z.string(),
    imgAlt: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    imgSrc: z.string(),
    startDate: z.date(),
    imgAlt: z.string(),
    openSource: z.boolean(),
    category: z.string(),
    runningOrder: z.number(),
  }),
});

export const collections = {
  post: postCollection,
  project: projectCollection,
};
