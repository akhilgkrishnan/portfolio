import { ColorTags, Tags } from 'astro-boilerplate-components';

import type { Project } from '../types/project';

const ProjectCard = (props: Project) => {
  const categories = props.category.split(', ');

  return (
    <div
      key={props.link}
      className="flex flex-col items-center gap-x-8 rounded-md bg-base-100 p-3 transition ease-in-out hover:scale-[102%] hover:shadow-xl md:flex-row"
    >
      <div className="relative shrink-0">
        <a href={props.link}>
          <div className="indicator">
            {props.openSource && (
              <span className="indicator-center badge indicator-item badge-primary indicator-top">
                Open Source
              </span>
            )}
            <img
              className="h-36 w-36 hover:translate-y-1"
              src={props.imgSrc}
              alt={props.imgAlt}
              loading="lazy"
            />
          </div>
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={props.link} target="_blank">
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

        <p className="mt-3">{props.description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };
