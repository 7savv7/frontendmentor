import { useEffect, useState } from "react";
import data from "./data.json";
import Project from "./Project";
import Tags from "./Tags";

export interface ProjectType {
  title: string;
  difficulty: string;
  image: string;
  tools: string[];
  frontendmentor: string;
  github: string;
  link: string;
}

function App() {
  const [projects, setProjects] = useState<ProjectType[]>(data);
  const [tags, setTags] = useState<string[]>([]);
  const [diffs, setDiffs] = useState<string[]>([]);

  const diffClass = (diff: string): string => {
    switch (diff) {
      case "newbie":
        return "bg-[rgb(6,182,212)]";
      case "junior":
        return "bg-[rgb(34,197,94)]";
      case "intermediate":
        return "bg-[rgb(250,204,21)]";
      case "advanced":
        return "bg-[rgb(249,115,22)]";
      default:
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

  useEffect(() => {
    setProjects(
      data.filter(
        (project) =>
          (tags.length === 0 ||
            tags.every((tag) => project.tools.includes(tag))) &&
          (diffs.length === 0 || diffs.includes(project.difficulty)),
      ),
    );
  }, [tags, diffs]);

  return (
    <div className="p-10">
      <div className="flex items-center justify-center gap-5 mb-10">
        <h1 className="text-2xl font-bold">Frontend Mentor Challenges</h1>

        <a target="_blank" href="https://www.frontendmentor.io/">
          <img
            className="rounded-full border border-black/20"
            src="images/favicon-32x32.png"
            alt="frontendmentor"
          />
        </a>
      </div>

      <div className="flex gap-2 mb-5">
        {diffs.map((diff) => (
          <Tags key={diff} tag={diff} removeTag={removeDiff} />
        ))}
        {tags.map((tag) => (
          <Tags key={tag} tag={tag} removeTag={removeTag} />
        ))}
      </div>

      <div className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <Project
            key={project.title}
            project={project}
            diffClass={diffClass}
            addDifficulty={addDifficulty}
            addTag={addTag}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
