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
    <div className="bg-navy950 min-h-screen h-fit w-full flex justify-center items-center p-10">
      <div className="grid grid-cols-4 content-center items-stretch gap-5 max-w-250 w-full h-full max-md:grid-cols-1">
        <div className="bg-navy900 rounded-xl row-span-2">
          <div className="bg-purple600 h-[70%] rounded-xl p-6 flex flex-col gap-8 max-md:flex-row max-md:gap-5 max-md:h-fit">
            <img className="h-16 w-16 border-3 rounded-full border-white" src="/images/image-jeremy.png" alt="image-jeremy" />
            <p className="text-navy200 flex flex-col">
              Report for <span className="text-white text-[2em] leading-[1.2em] max-md:text-[1.6em]">Jeremy Robson</span>
            </p>
          </div>

          <div className="flex flex-col h-[30%] gap-2 p-6 max-md:flex-row">
            {["daily", "weekly", "monthly"].map((p) => (
              <p
                key={p}
                className={`cursor-pointer ${period === p ? "text-white" : "text-navy200"} capitalize hover:text-white w-fit max-md:flex-1 text-center`}
                onClick={() => setPeriod(p as Period)}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {data.map((d) => (
          <Card
            key={d.title}
            data={d}
            cardData={cardData[d.title as Title]}
            period={period}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
