import type { ProjectType } from "./App";

interface Props {
  project: ProjectType;
  diffClass: (val: string) => string;
  addDifficulty: (val: string) => void;
  addTag: (val: string) => void;
}

function Project({ project, diffClass, addDifficulty, addTag }: Props) {
  return (
    <div className=" rounded-lg w-80 h-100 overflow-hidden border border-black/20">
      <div className="h-[60%] relative">
        <a target="_blank" href={project.link}>
          <img
            className={`h-full w-full object-cover ${project.difficulty === "junior" && "object-top"}`}
            src={project.image}
            alt={`${project.title}-showcase`}
          />
        </a>

        <div
          className={`cursor-pointer ${diffClass(project.difficulty)} rounded-md
                px-2 py-1 font-semibold h-fit absolute top-2 right-2 hover:opacity-75`}
          onClick={() => addDifficulty(project.difficulty)}
        >
          {project.difficulty}
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between h-[40%]">
        <p className="text-lg font-semibold">{project.title}</p>

        <div className="flex gap-2 items-center">
          <a
            className="rounded-full w-fit flex"
            target="_blank"
            href={project.github}
          >
            <img
              className="rounded-full w-10 h-10"
              src="images/github.png"
              alt="github"
            />
          </a>

          <a
            className="rounded-full w-fit flex"
            target="_blank"
            href={project.frontendmentor}
          >
            <img
              className="rounded-full w-10 h-10 border border-black/20"
              src="images/favicon-32x32.png"
              alt="github"
            />
          </a>
        </div>

        <div className="flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory whitespace-nowrap gap-2">
          {project.tools.map((tool) => (
            <p
              key={tool}
              onClick={() => addTag(tool)}
              className="cursor-pointer snap-start"
            >
              #{tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
