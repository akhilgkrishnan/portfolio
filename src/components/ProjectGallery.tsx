import { ProjectCard } from '@components/ProjectCard';
import type { MarkdownInstance } from 'astro';

import type { Project } from '../types/project';

type IRecentProjectProps = {
  projectList: MarkdownInstance<Project>[];
};

const ProjectGallery = (props: IRecentProjectProps) => (
  <div className="flex flex-col gap-6">
    {props.projectList.map((project, index) => {
      return (
        <>
          <ProjectCard
            title={project.frontmatter.title}
            description={project.frontmatter.description}
            link={project.frontmatter.link}
            imgSrc={project.frontmatter.imgSrc}
            imgAlt={project.frontmatter.imgAlt}
            startDate={project.frontmatter.startDate}
            openSource={project.frontmatter.openSource}
            category={project.frontmatter.category}
          />
          {index !== props.projectList.length - 1 && (
            <div className="divider my-0"></div>
          )}
        </>
      );
    })}
  </div>
);

export { ProjectGallery };
