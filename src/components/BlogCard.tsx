import type { CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

interface BlogCardProps {
  blog: CollectionEntry<'post'>;
}

const BlogCard = (props: BlogCardProps) => {
  const { blog } = props;
  const dateStr = format(new Date(blog.data.pubDate), 'yyyy-MM-dd');

  return (
    <a className="block transition-transform hover:-translate-y-1" href={blog.data.url} target="_blank">
      <div className="terminal-window h-full transition-all duration-200 hover:shadow-terminal-emerald">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="terminal-dot terminal-dot-red"></span>
            <span className="terminal-dot terminal-dot-yellow"></span>
            <span className="terminal-dot terminal-dot-green"></span>
          </div>
          <span className="terminal-title">{dateStr}.md</span>
        </div>

        <div className="aspect-h-2 aspect-w-3 overflow-hidden">
          <img
            className="size-full object-cover object-center"
            src={blog.data.imgSrc}
            alt={blog.data.imgAlt}
            loading="eager"
          />
        </div>

        <div className="p-4">
          {/* Title with # prefix */}
          <h2 className="text-lg font-semibold">
            <span className="text-terminal-gray-500"># </span>
            <span className="text-terminal-green">{blog.data.title}</span>
          </h2>

          {/* Date as metadata */}
          <div className="mt-1 text-xs text-terminal-gray-500">
            <span>published: </span>
            <span className="text-terminal-emerald">{format(new Date(blog.data.pubDate), 'LLL d, yyyy')}</span>
          </div>

          {/* Description as comment */}
          <div className="mt-3 text-sm text-terminal-gray-400">
            <span className="text-terminal-gray-600">{'// '}</span>
            {blog.data.description}
          </div>
        </div>
      </div>
    </a>
  );
};

export { BlogCard };
