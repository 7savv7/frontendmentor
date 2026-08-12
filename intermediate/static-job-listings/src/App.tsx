import { useState } from "react";
import data from "./data.json";
import Item from "./Item";
import Filter from "./Filter";

export interface Card {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

function App() {
  const [filter, setFilter] = useState<string[]>([]);

  const filtered = data.filter((card) => {
    const chips = [card.role, card.level, ...card.languages, ...card.tools];

    return filter.every((f) => chips.includes(f));
  });

  const removeFilter = (f: string) => {
    setFilter((prev) => prev.filter((p) => p !== f));
  };

  return (
    <div className="bg-background min-h-svh md:min-h-screen">
      <div className="mb-5 md:mb-0">
        <div
          className="h-[156px] w-full bg-green400 bg-[url(/images/bg-header-mobile.svg)]
          md:bg-[url(/images/bg-header-desktop.svg)]"
        />

        {filter.length > 0 && (
          <Filter
            filter={filter}
            remove={removeFilter}
            clear={() => setFilter([])}
          />
        )}
      </div>

      <div
        className={`flex flex-col items-center p-5 ${filter.length > 0 ? "pt-0" : "pt-10"} md:px-20 lg:px-40`}
      >
        {filtered.map((card) => (
          <Item key={card.id} card={card} setFilter={setFilter} />
        ))}
      </div>
    </div>
  );
}

export default App;
