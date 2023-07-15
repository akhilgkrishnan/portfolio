import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

interface BlogPostFrontmatter extends IFrontmatter {
  url: string;
}
export const sortByDate = (posts: MarkdownInstance<BlogPostFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
