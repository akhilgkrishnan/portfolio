import { BlogGallery } from '@components/BlogGallery';
import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { GradientText, Section } from 'astro-boilerplate-components';

interface BlogPostFrontmatter extends IFrontmatter {
  url: string;
}

type IRecentPostsProps = {
  postList: MarkdownInstance<BlogPostFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
