import { ProjectGallery } from '@components/ProjectGallery';
import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';

type IRecentOssProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentOssProjects = (props: IRecentOssProjectProps) => {
  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Open Source Contributions</GradientText>
          </div>

          <div className="text-sm">
            <a href="/projects/">View all Contributions →</a>
          </div>
        </div>
      }
    >
      <ProjectGallery projectList={props.projectList} />
    </Section>
  );
};

export { RecentOssProjects };
