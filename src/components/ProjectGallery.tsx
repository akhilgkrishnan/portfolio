import { ProjectCard } from '@components/ProjectCard';
import type { MarkdownInstance } from 'astro';

type IProjectProps = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
  link: string;
  category: string;
};

type IRecentProjectProps = {
  projectList: MarkdownInstance<IProjectProps>[];
};

const ProjectGallery = (props: IRecentProjectProps) => (
  <div className="flex flex-col gap-6">
    {props.projectList.map((elt) => (
      <ProjectCard
        key={elt.frontmatter.link}
        name={elt.frontmatter.name}
        description={elt.frontmatter.description}
        link={elt.frontmatter.link}
        imgSrc={elt.frontmatter.imgSrc}
        imgAlt={elt.frontmatter.imgAlt}
        category={elt.frontmatter.category}
      />
    ))}
  </div>
);

export { ProjectGallery };
