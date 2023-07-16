import { ProjectGallery } from '@components/ProjectGallery';
import type { MarkdownInstance } from 'astro';
import { GradientText, Section } from 'astro-boilerplate-components';

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  category: string;
}

type IRecentProjectProps = {
  projectList: MarkdownInstance<ProjectProps>[];
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
