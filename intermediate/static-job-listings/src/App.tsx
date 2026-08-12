import data from "./data.json";
import Item from "./Item";

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
  return (
    <div className="bg-background min-h-svh md:min-h-screen">
      <div
        className="relative h-[156px] w-full bg-green400 bg-[url(/images/bg-header-mobile.svg)]
     md:bg-[url(/images/bg-header-desktop.svg)]"
      ></div>

      <div className="flex flex-col items-center p-5 pt-[50px] md:px-20 lg:px-40">
        {data.map((card) => (
          <Item key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
