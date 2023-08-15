import { ProjectGallery } from '@components/ProjectGallery';
import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';

type IRecentProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentProjects = (props: IRecentProjectProps) => {
  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Projects</GradientText>
          </div>

          <div className="text-sm">
            <a href="/projects/">View all Projects →</a>
          </div>
        </div>
      }
    >
      <ProjectGallery projectList={props.projectList} />
    </Section>
  );
};

export { RecentProjects };
