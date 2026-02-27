import { ProjectGallery } from '@components/ProjectGallery';
import type { CollectionEntry } from 'astro:content';
import { Section } from 'astro-boilerplate-components';

type IRecentProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentProjects = (props: IRecentProjectProps) => {
  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div className="font-mono">
            <span className="text-terminal-gray-500">## </span>
            <span className="text-terminal-green">Recent</span>
            <span className="text-terminal-gray-300"> Projects</span>
          </div>

          <a
            href="/projects/"
            className="text-sm font-mono text-terminal-emerald hover:text-terminal-green transition-colors"
          >
            <span className="text-terminal-gray-500">$ </span>
            ls -la ./projects/
          </a>
        </div>
      }
    >
      <ProjectGallery projectList={props.projectList} />
    </Section>
  );
};

export { RecentProjects };
