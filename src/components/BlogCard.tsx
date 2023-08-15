import type { CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

interface BlogCardProps {
  blog: CollectionEntry<'post'>;
}

const BlogCard = (props: BlogCardProps) => {
  const { blog } = props;
  return (
    <a className="hover:translate-y-1" href={blog.data.url} target="_blank">
      <div className="overflow-hidden rounded-md bg-base-100">
        <div className="aspect-h-2 aspect-w-3">
          <img
            className="h-full w-full object-cover object-center"
            src={blog.data.imgSrc}
            alt={blog.data.imgAlt}
            loading="lazy"
          />
        </div>

        <div className="px-3 pb-6 pt-4 text-center">
          <h2 className="text-xl font-semibold">{blog.data.title}</h2>

          <div className="mt-1 text-xs">
            {format(new Date(blog.data.pubDate), 'LLL d, yyyy')}
          </div>

          <div className="mt-2 text-sm">{blog.data.description}</div>
        </div>
      </div>
    </a>
  );
};

export { BlogCard };
