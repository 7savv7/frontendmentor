import type { Data } from "./App";

interface Card {
  color: string;
  image: string;
}

interface Props {
  data: Data;
  period: "daily" | "weekly" | "monthly";
  cardData: Card;
}

function Card({ data, cardData, period }: Props) {
  return (
    <div
      className={`${cardData.color} h-50 flex flex-col justify-end rounded-xl rounded-b-3xl 
      ${cardData.image} bg-position-[90%_-10%] bg-no-repeat max-md:h-40`}
    >
      <div className="cursor-pointer h-[80%] bg-navy900 p-6 flex flex-col gap-2 justify-between rounded-xl text-white text-[18px] hover:bg-[hsl(235,46%,30%)]">
        <div className="flex items-center justify-between">
          <p>{data.title}</p>
          <svg
            className="group cursor-pointer"
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white"
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex flex-col max-md:flex-row max-md:justify-between max-md:items-center">
          <p className="text-[2em]">{data.timeframes[period].current}hrs</p>

          <p className="text-navy200 text-[0.8em]">
            {period === "daily"
              ? "Yesterday"
              : period === "weekly"
                ? "Last Week"
                : "Last Month"}{" "}
            - {data.timeframes[period].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
