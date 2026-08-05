import { useState } from "react";
import data from "./data.json";

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [diffs, setDiffs] = useState<string[]>([]);

  const diffClass = (diff: string) => {
    switch (diff) {
      case "newbie":
        return "bg-[rgb(6,182,212)]";
      case "junior":
        return "bg-[rgb(34,197,94)]";
      case "intermediate":
        return "bg-[rgb(250,204,21)]";
      case "advanced":
        return "bg-[rgb(249,115,22)]";
      case "guru":
        return "bg-[rgb(239,68,68)]";
    }
  };

  const addTag = (tag: string) => {
    setTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  const addDifficulty = (diff: string) => {
    setDiffs((prev) => (prev.includes(diff) ? prev : [...prev, diff]));
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const removeDiff = (diff: string) => {
    setDiffs((prev) => prev.filter((d) => d !== diff));
  };

  return (
    <div className="p-20">
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-2xl font-bold">Frontend Mentor Challenges</h1>
        <a target="_blank" href="https://www.frontendmentor.io/">
          <img
            className="rounded-full border border-black/20"
            src="images/favicon-32x32.png"
            alt="frontendmentor"
          />
        </a>
      </div>

      <div className="flex gap-2">
        {diffs.map((diff) => (
          <div
            key={diff}
            className="flex gap-2 items-center justifyc-center border rounded-md py-1 px-2"
          >
            <p>{diff}</p>

            <button className="cursor-pointer" onClick={() => removeDiff(diff)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="black"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </button>
          </div>
        ))}
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex gap-2 items-center justifyc-center border rounded-md py-1 px-2"
          >
            <p>{tag}</p>

            <button className="cursor-pointer" onClick={() => removeTag(tag)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="black"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-15">
        {data
          .filter(
            (project) =>
              (tags.length === 0 ||
                tags.every((tag) => project.tools.includes(tag))) &&
              (diffs.length === 0 || diffs.includes(project.difficulty)),
          )
          .map((project) => (
            <div
              key={project.title}
              className=" rounded-lg overflow-hidden border border-black/20"
            >
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

                <div className="flex gap-2">
                  {project.tools.map((tool) => (
                    <p
                      key={tool}
                      onClick={() => addTag(tool)}
                      className="cursor-pointer"
                    >
                      #{tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
