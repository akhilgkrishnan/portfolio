import { ProjectCard } from '@components/ProjectCard';
import type { MarkdownInstance } from 'astro';

import type { Project } from '../types/project';

type IRecentProjectProps = {
  projectList: MarkdownInstance<Project>[];
};

const ProjectGallery = (props: IRecentProjectProps) => (
  <div className="flex flex-col gap-6">
    {props.projectList.map((elt) => (
      <ProjectCard
        key={elt.frontmatter.link}
        title={elt.frontmatter.title}
        description={elt.frontmatter.description}
        link={elt.frontmatter.link}
        imgSrc={elt.frontmatter.imgSrc}
        imgAlt={elt.frontmatter.imgAlt}
        openSource={elt.frontmatter.openSource}
        category={elt.frontmatter.category}
      />
    ))}
  </div>
);

export { ProjectGallery };
