import { ColorTags, Tags } from 'astro-boilerplate-components';

import type { Project } from '../types/project';

const ProjectCard = (props: Project) => {
  const categories = props.category.split(', ');

  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
      <div className="shrink-0">
        <a href={props.link}>
          <img
            className="h-36 w-36 hover:translate-y-1"
            src={props.imgSrc}
            alt={props.imgAlt}
            loading="lazy"
          />
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={props.link}>
            <div className="text-xl font-semibold">{props.name}</div>
          </a>

          <div className="ml-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Tags color={ColorTags.SLATE}>{category}</Tags>
            ))}
          </div>
        </div>

        <p className="mt-3 text-gray-400">{props.description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };
