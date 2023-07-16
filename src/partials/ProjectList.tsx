import { ProjectGallery } from '@components/ProjectGallery';
import type { MarkdownInstance } from 'astro';
import { GradientText, Section } from 'astro-boilerplate-components';

import type { Project as IProject } from '../types/project';

type IRecentProjectProps = {
  projectList: MarkdownInstance<IProject>[];
};

const ProjectList = (props: IRecentProjectProps) => {
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

export { ProjectList };
