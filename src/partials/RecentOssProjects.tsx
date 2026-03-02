import { ProjectGallery } from '@components/ProjectGallery';
import type { CollectionEntry } from 'astro:content';
import { Section } from 'astro-boilerplate-components';

type IRecentOssProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentOssProjects = (props: IRecentOssProjectProps) => {
  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div className="font-mono">
            <span className="text-terminal-gray-500">## </span>
            <span className="text-terminal-green">Open Source</span>
            <span className="text-terminal-gray-300"> Contributions</span>
          </div>

          <a
            href="/projects/"
            className="text-sm font-mono text-terminal-emerald hover:text-terminal-green transition-colors"
          >
            <span className="text-terminal-gray-500">$ </span>
            ls -la ./oss/
          </a>
        </div>
      }
    >
      <ProjectGallery projectList={props.projectList} />
    </Section>
  );
};

export { RecentOssProjects };
