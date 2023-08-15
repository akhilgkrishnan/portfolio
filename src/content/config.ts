import { defineCollection } from 'astro:content';

import { postSchema, projectSchema } from './_schemas';

const post = defineCollection({
  schema: postSchema,
});

const project = defineCollection({
  schema: projectSchema,
});

export const collections = { post, project };
