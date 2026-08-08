import { useState } from "react";
import Card from "./Card";
import data from "./data.json";

export interface Data {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

const cardData = {
  Work: {
    color: "bg-orange",
    image: "bg-[url(/images/icon-work.svg)]",
  },
  Play: {
    color: "bg-blue",
    image: "bg-[url(/images/icon-play.svg)]",
  },
  Study: {
    color: "bg-pink",
    image: "bg-[url(/images/icon-study.svg)]",
  },
  Exercise: {
    color: "bg-green",
    image: "bg-[url(/images/icon-exercise.svg)]",
  },
  Social: {
    color: "bg-purple",
    image: "bg-[url(/images/icon-social.svg)]",
  },
  "Self Care": {
    color: "bg-yellow",
    image: "bg-[url(/images/icon-self-care.svg)]",
  },
};

type Title = keyof typeof cardData;

type Period = "daily" | "weekly" | "monthly";

function App() {
  const [period, setPeriod] = useState<Period>("weekly");

  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      <div className="row-span-2 border">
        <p onClick={() => setPeriod("daily")}>daily</p>
        <p onClick={() => setPeriod("weekly")}>weekly</p>
        <p onClick={() => setPeriod("monthly")}>monthly</p>
      </div>

      {data.map((d) => (
        <Card data={d} cardData={cardData[d.title as Title]} period={period} />
      ))}
    </div>
  );
}

export default App;

/*   Report for
  Jeremy Robson

  Daily
  Weekly
  Monthly

  Work
  5hrs <!-- daily -->
  Previous - 7hrs <!-- daily -->
  32hrs <!-- weekly -->
  Previous - 36hrs <!-- weekly -->
  103hrs <!-- monthly -->
  Previous - 128hrs <!-- monthly -->

  Play
  1hr <!-- daily -->
  Previous - 2hrs <!-- daily -->
  10hrs <!-- weekly -->
  Previous - 8hrs <!-- weekly -->
  23hrs <!-- monthly -->
  Previous - 29hrs <!-- monthly -->

  Study
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 7hrs <!-- weekly -->
  13hrs <!-- monthly -->
  Previous - 19hrs <!-- monthly -->

  Exercise
  1hr <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 5hrs <!-- weekly -->
  11hrs <!-- monthly -->
  Previous - 18hrs <!-- monthly -->

  Social
  1hr <!-- daily -->
  Previous - 3hrs <!-- daily -->
  5hrs <!-- weekly -->
  Previous - 10hrs <!-- weekly -->
  21hrs <!-- monthly -->
  Previous - 23hrs <!-- monthly -->

  Self Care
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  2hrs <!-- weekly -->
  Previous - 2hrs <!-- weekly -->
  7hrs <!-- monthly -->
  Previous - 11hrs <!-- monthly -->
 */
