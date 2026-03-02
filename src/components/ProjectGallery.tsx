import { ProjectCard } from '@components/ProjectCard';
import type { CollectionEntry } from 'astro:content';

interface ProjectGalleryProps {
  projectList: CollectionEntry<'project'>[];
}

const ProjectGallery = (props: ProjectGalleryProps) => (
  <div className="flex flex-col gap-4">
    {props.projectList.map((project: CollectionEntry<'project'>) => (
      <ProjectCard key={project.data.link} project={project} />
    ))}
  </div>
);

export { ProjectGallery };
