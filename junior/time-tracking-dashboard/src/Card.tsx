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
      ${cardData.image} bg-position-[90%_-10%] bg-no-repeat`}
    >
      <div className="h-[80%] bg-navy900 p-6 flex flex-col justify-between rounded-xl text-white">
        <div className="flex items-center justify-between">
          <p>{data.title}</p>
          <img className="cursor-pointer" src="images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>

        <div>
          <p>{data.timeframes[period].current}hrs</p>

          <p>
            {period === "daily"
              ? "Yesterday"
              : period === "weekly"
                ? "Last Week"
                : "Last Month"}
            -{data.timeframes[period].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
