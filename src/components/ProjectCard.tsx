import { ColorTags, Tags } from 'astro-boilerplate-components';

import type { Project } from '../types/project';

const ProjectCard = (props: Project) => {
  const categories = props.category.split(', ');

  return (
    <div
      key={props.link}
      className="flex flex-col items-center gap-x-8 rounded-md bg-slate-200 p-3 dark:bg-slate-800 md:flex-row"
    >
      <div className="relative shrink-0">
        <a href={props.link}>
          <img
            className="h-36 w-36 hover:translate-y-1"
            src={props.imgSrc}
            alt={props.imgAlt}
            loading="lazy"
          />
          {props.openSource && (
            <div className="absolute left-0 top-0 -translate-y-3/4 rotate-0 rounded bg-green-500 px-2 py-1 text-white">
              Open Source
            </div>
          )}
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={props.link}>
            <div className="text-xl font-semibold">{props.title}</div>
          </a>

          <div className="ml-3 flex flex-wrap gap-2">
            {categories.map((category) => {
              const color =
                Object.values(ColorTags)[
                  Math.floor(Math.random() * Object.values(ColorTags).length)
                ];
              return <Tags color={color}>{category}</Tags>;
            })}
          </div>
        </div>

        <p className="mt-3 text-gray-800 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export { ProjectCard };
