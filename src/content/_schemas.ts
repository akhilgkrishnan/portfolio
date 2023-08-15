import { z } from 'astro:content';

export const postSchema = z.object({
  layout: z.string(),
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  url: z.string(),
  imgSrc: z.string(),
  imgAlt: z.string(),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
  imgSrc: z.string(),
  startDate: z.date(),
  imgAlt: z.string(),
  openSource: z.boolean(),
  category: z.string(),
});

export type BlogFrontMatter = z.infer<typeof postSchema>;
export type ProjectFrontMatter = z.infer<typeof projectSchema>;
