import { BlogGallery } from '@components/BlogGallery';
import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Blogs</GradientText>
        </div>

        <div className="text-sm">
          <a href="/blogs/">View all Blogs →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
