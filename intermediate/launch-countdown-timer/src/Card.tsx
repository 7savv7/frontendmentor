import { useState } from "react";

interface Props {
  time: number;
  title: string;
}

function Card({ time, title }: Props) {
  const [prevTime, setPrevTime] = useState(time);
  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      <div className="overflow-hidden flex justify-center items-center relative w-full h-18 rounded-sm">
        <div className="w-2 h-2 z-3 absolute bottom-1/2 translate-y-1/2 -left-1 bg-slate900 rounded-full" />

        <div className="absolute top-0 bg-slate700/60 w-full h-1/2" />
        <div className="absolute rotate-x-100 top-0 bg-slate700/60 w-full h-1/2" />

        <div className="w-full z-3 h-[0.5px] absolute bottom-1/2 translate-y-1/2 left-0 bg-slate900 rounded-full" />

        <div className="absolute bottom-0 bg-slate700 w-full h-1/2" />

        <p className="relative text-[2.5em] z-2 text-pink100 lg:text-[5em]">
          {time.toString().padStart(2, "0")}
        </p>

        <div className="w-2 h-2 absolute z-3 bottom-1/2 translate-y-1/2 -right-1 bg-slate900 rounded-full" />
      </div>

      <p className="text-lavender300 text-[0.5em] tracking-[0.4em] uppercase lg:text-[1em]">
        {title}
      </p>
    </div>
  );
}

export default Card;
