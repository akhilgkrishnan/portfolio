import { BlogCard } from '@components/BlogCard';
import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';

interface BlogPostProps extends IFrontmatter {
  url: string;
}

type IRecentPostsProps = {
  postList: MarkdownInstance<BlogPostProps>[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
