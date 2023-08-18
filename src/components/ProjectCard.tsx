import type { CollectionEntry } from 'astro:content';
import { ColorTags, Tags } from 'astro-boilerplate-components';

interface ProjectCardProps {
  project: CollectionEntry<'project'>;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  const categories = project.data.category.split(', ');

  return (
    <div
      key={project.data.link}
      className="flex flex-col items-center gap-x-8 rounded-md bg-base-100 p-3 transition ease-in-out hover:scale-[102%] hover:shadow-xl md:flex-row"
    >
      <div className="relative shrink-0">
        <a href={project.data.link}>
          <div className="indicator">
            {project.data.openSource && (
              <span className="indicator-center badge indicator-item badge-primary indicator-top">
                Open Source
              </span>
            )}
            <img
              className="aspect-1 h-36 w-36 hover:translate-y-1"
              src={project.data.imgSrc}
              alt={project.data.imgAlt}
              loading="lazy"
            />
          </div>
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a
            className="hover:text-cyan-400"
            href={project.data.link}
            target="_blank"
          >
            <div className="text-xl font-semibold">{project.data.title}</div>
          </a>

          <div className="ml-3 flex flex-wrap gap-2">
            {categories.map((category: string) => {
              const color =
                Object.values(ColorTags)[
                  Math.floor(Math.random() * Object.values(ColorTags).length)
                ];
              return <Tags color={color}>{category}</Tags>;
            })}
          </div>
        </div>

        <p className="mt-3">{project.data.description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };
