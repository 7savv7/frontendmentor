import { useEffect, useState } from "react";

interface Props {
  time: number;
  title: string;
}

function Card({ time, title }: Props) {
  const [prevTime, setPrevTime] = useState(time);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (time === prevTime) return;
    setFlipping(true);
  }, [time, prevTime]);

  const handleBottomFlapEnd = () => {
    setPrevTime(time);
    setFlipping(false);
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      <div className="relative w-full h-20 lg:w-35 lg:h-35 rounded-sm perspective-[400px] shadow-xl">
        <div className="bg-slate700 rounded-lg justify-center flex perspective-[400px] flex-col w-full h-full">
          <div className="relative z-0 bg-slate750 rounded-t-lg overflow-hidden h-1/2 text-[2.5em] text-pink100 lg:text-[5em] border-b border-slate900">
            <p className="absolute top-full left-1/2 -translate-1/2">
              {time.toString().padStart(2, "0")}
            </p>

            <div className="absolute w-5 h-5 top-full right-full translate-x-1/2 -translate-y-1/2 rounded-full bg-slate900" />
            <div className="absolute w-5 h-5 top-full left-full -translate-1/2 rounded-full bg-slate900" />

            {flipping && (
              <div
                className="bg-slate750 absolute w-full h-full top-0 left-0 z-10 origin-bottom flip-top backface-hidden"
              >
                <div className="absolute w-5 h-5 top-full right-full translate-x-1/2 -translate-y-1/2 rounded-full bg-slate900 z-11" />
                <div className="absolute w-5 h-5 top-full left-full -translate-1/2 rounded-full bg-slate900 z-11" />

                <p className="absolute top-full left-1/2 -translate-1/2">
                  {prevTime.toString().padStart(2, "0")}
                </p>
              </div>
            )}
          </div>

          <div className="relative bg-slate700 rounded-b-lg overflow-hidden h-1/2 text-pink100 text-[2.5em] lg:text-[5em]">
            <p className="absolute top-0 left-1/2 -translate-1/2">
              {(flipping ? prevTime : time).toString().padStart(2, "0")}
            </p>

            <div className="absolute w-5 h-5 bottom-full right-full translate-1/2 rounded-full bg-slate900" />
            <div className="absolute w-5 h-5 bottom-full left-full translate-y-1/2 -translate-x-1/2 rounded-full bg-slate900" />

            {flipping && (
              <div
                onAnimationEnd={handleBottomFlapEnd}
                className="bg-slate700 absolute w-full h-full top-0 left-0 z-10 origin-top flip-bottom backface-hidden"
              >
                <div className="absolute w-5 h-5 bottom-full right-full translate-1/2 rounded-full bg-slate900 z-11" />
                <div className="absolute w-5 h-5 bottom-full left-full translate-y-1/2 -translate-x-1/2 rounded-full bg-slate900 z-11" />

                <p className="absolute top-0 left-1/2 -translate-1/2">
                  {time.toString().padStart(2, "0")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-lavender300 text-[0.5em] tracking-[0.4em] uppercase lg:text-[1em]">
        {title}
      </p>
    </div>
  );
}

export default Card;
