import { BlogGallery } from '@components/BlogGallery';
import type { CollectionEntry } from 'astro:content';
import { Section } from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div className="font-mono">
          <span className="text-terminal-gray-500">## </span>
          <span className="text-terminal-green">Recent</span>
          <span className="text-terminal-gray-300"> Blogs</span>
        </div>

        <a
          href="/blogs/"
          className="text-sm font-mono text-terminal-emerald hover:text-terminal-green transition-colors"
        >
          <span className="text-terminal-gray-500">$ </span>
          ls -la ./blogs/
        </a>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
