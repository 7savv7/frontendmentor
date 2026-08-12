import type { Dispatch, SetStateAction } from "react";
import type { Card } from "./App";

interface Props {
  card: Card;
  setFilter: Dispatch<SetStateAction<string[]>>;
}

function Item({ card, setFilter }: Props) {
  const chips = [card.role, card.level, ...card.languages, ...card.tools];

  const addFilter = (chip: string) => {
    setFilter((prev) => (prev.includes(chip) ? prev : [...prev, chip]));
  };

  return (
    <div
      className={`relative min-w-full rounded-md bg-white flex flex-col p-[20px] pt-[40px] mb-[50px] 
        shadow-lg border-green400 ${card.featured && "border-l-5 "} 
        md:flex-row md:items-center md:gap-5 md:pt-[20px] md:mb-[20px]`}
    >
      <img
        className="absolute rounded-full h-[60px] w-[60px] bottom-[calc(100%-30px)] md:static md:h-20 md:w-20"
        src={card.logo}
        alt={`${card.company}-logo`}
      />

      <div className="flex flex-col gap-2 border-b border-gray400 pb-4 md:border-none md:pb-0">
        <div className="flex items-center gap-2">
          <p className="text-green400 font-bold mr-4">{card.company}</p>
          {card.new && (
            <p
              className="flex items-center justify-center bg-green400 rounded-full
             text-white uppercase text-[14px] px-2 pt-1 font-semibold"
            >
              New!
            </p>
          )}
          {card.featured && (
            <p
              className="flex items-center justify-center bg-green900 rounded-full
             text-white uppercase text-[14px] px-2 pt-1 font-semibold"
            >
              Featured
            </p>
          )}
        </div>

        <p className="cursor-pointer text-green900 font-bold hover:text-green400 md:text-[20px]">
          {card.position}
        </p>

        <div className="flex items-center gap-2">
          <p className="text-gray400">{card.postedAt}</p>
          <div className="h-1 w-1 bg-gray400 rounded-full" />
          <p className="text-gray400">{card.contract}</p>
          <div className="h-1 w-1 bg-gray400 rounded-full" />
          <p className="text-gray400">{card.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-4 md:flex-1 md:justify-end">
        {chips.map((chip) => (
          <p
            key={chip}
            onClick={() => addFilter(chip)}
            className="cursor-pointer bg-green400/10 py-1 px-2 rounded-sm text-green400 font-bold hover:bg-green400 hover:text-white"
          >
            {chip}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Item;
