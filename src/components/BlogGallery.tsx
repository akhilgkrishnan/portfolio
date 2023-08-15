import { BlogCard } from '@components/BlogCard';
import type { CollectionEntry } from 'astro:content';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.data.url} blog={elt} />
    ))}
  </div>
);

export { BlogGallery };
