import type { CollectionEntry } from 'astro:content';

export const sortPostByDate = (posts: CollectionEntry<'post'>[]) =>
  posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

export const sortProjectsByDate = (projects: CollectionEntry<'project'>[]) => {
  return projects.sort(
    (a, b) =>
      new Date(b.data.startDate).valueOf() -
      new Date(a.data.startDate).valueOf()
  );
};
