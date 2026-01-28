import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { postSchema, projectSchema } from './content/_schemas';

const post = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/post' }),
  schema: postSchema,
});

const project = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/project' }),
  schema: projectSchema,
});

export const collections = { post, project };
