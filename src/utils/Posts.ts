import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

import type { Project } from '../types/project';

interface BlogPostFrontmatter extends IFrontmatter {
  url: string;
}
export const sortPostByDate = (
  posts: MarkdownInstance<BlogPostFrontmatter>[]
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const sortProjectsByDate = (projects: MarkdownInstance<Project>[]) => {
  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.startDate).valueOf() -
      new Date(a.frontmatter.startDate).valueOf()
  );
};
