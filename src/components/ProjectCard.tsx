import type { CollectionEntry } from 'astro:content';

interface ProjectCardProps {
  project: CollectionEntry<'project'>;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  const categories = project.data.category.split(', ');

  return (
    <div
      key={project.data.link}
      className="terminal-window transition-all duration-200 hover:shadow-terminal-emerald"
    >
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot terminal-dot-red"></span>
          <span className="terminal-dot terminal-dot-yellow"></span>
          <span className="terminal-dot terminal-dot-green"></span>
        </div>
        <span className="terminal-title">{project.data.title.toLowerCase().replace(/\s+/g, '-')}.sh</span>
        {project.data.openSource && (
          <span className="ml-auto rounded border border-terminal-green px-2 py-0.5 text-xs text-terminal-green">
            [open-source]
          </span>
        )}
      </div>
      <div className="flex flex-col items-center gap-x-6 p-4 md:flex-row">
        <div className="shrink-0">
          <a href={project.data.link} target="_blank">
            <img
              className="aspect-square size-28 rounded border border-terminal-gray-700 transition-transform hover:scale-105"
              src={project.data.imgSrc}
              alt={project.data.imgAlt}
              loading="eager"
            />
          </a>
        </div>

        <div className="mt-4 flex-1 md:mt-0">
          {/* Project name as command */}
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <a
              className="text-terminal-green hover:glow-green transition-all"
              href={project.data.link}
              target="_blank"
            >
              <span className="text-lg font-semibold">{project.data.title}</span>
            </a>

            {/* Tags as brackets */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category: string) => (
                <span key={category} className="terminal-tag">
                  [{category.toLowerCase()}]
                </span>
              ))}
            </div>
          </div>

          {/* Description as comment */}
          <p className="mt-3 text-terminal-gray-500">
            <span className="text-terminal-gray-600">{'// '}</span>
            {project.data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
