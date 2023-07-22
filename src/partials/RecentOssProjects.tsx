import { ProjectGallery } from '@components/ProjectGallery';
import type { MarkdownInstance } from 'astro';
import { GradientText, Section } from 'astro-boilerplate-components';

import type { Project as IProject } from '../types/project';

type IRecentOssProjectProps = {
  projectList: MarkdownInstance<IProject>[];
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
