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
    <div className="bg-navy950 h-full w-full flex justify-center items-center  p-10">
      <div className="grid grid-cols-4 content-center items-stretch gap-5 max-w-250 w-full h-full">
        <div className="bg-navy900 rounded-xl row-span-2">
          <div className="bg-purple600 h-[70%] rounded-xl p-6">
            <img className="h-10 w-10" src="/images/image-jeremy.png" alt="image-jeremy" />
            <p>
              Report for <span>Jeremy Robson</span>
            </p>
          </div>

          <div className="flex flex-col h-[30%] gap-2 p-6">
            {["daily", "weekly", "monthly"].map((p) => (
              <p
                key={p}
                className={`cursor-pointer ${period === p ? "text-white" : "text-navy200"} capitalize hover:text-white w-fit`}
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
