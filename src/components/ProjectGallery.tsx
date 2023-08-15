import { ProjectCard } from '@components/ProjectCard';
import type { CollectionEntry } from 'astro:content';

interface ProjectGalleryProps {
  projectList: CollectionEntry<'project'>[];
}

const ProjectGallery = (props: ProjectGalleryProps) => (
  <div className="flex flex-col gap-6">
    {props.projectList.map(
      (project: CollectionEntry<'project'>, index: number) => {
        return (
          <>
            <ProjectCard project={project} />
            {index !== props.projectList.length - 1 && (
              <div className="divider my-0"></div>
            )}
          </>
        );
      }
    )}
  </div>
);

export { ProjectGallery };
