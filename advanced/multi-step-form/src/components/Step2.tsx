import { type Dispatch, type SetStateAction } from "react";
import type { Info } from "../App";

interface Props {
  info: Info;
  setInfo: Dispatch<SetStateAction<Info>>;
}

const plans = [
  { image: "arcade", plan: "Arcade", price: 9 },
  { image: "advanced", plan: "Advanced", price: 12 },
  { image: "pro", plan: "Pro", price: 15 },
];

function Step2({ info, setInfo }: Props) {
  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Select your plan</h1>
      <p className="mt-2 text-grey500">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col gap-3 mt-5">
        {plans.map((p) => (
          <div
            key={p.plan}
            onClick={() =>
              setInfo((prev) => ({
                ...prev,
                plan: { name: p.plan, price: p.price },
              }))
            }
            className={`flex items-start gap-3 border rounded-lg p-3
              ${info.plan.name === p.plan ? "border-purple600 bg-blue50" : "border-grey500"}`}
          >
            <img src={`/images/icon-${p.image}.svg`} alt={p.image} />

            <div>
              <p className="font-[500]">{p.plan}</p>
              <p className="text-grey500">
                ${info.yearly ? p.price * 10 : p.price}/
                {info.yearly ? "yr" : "mo"}
              </p>
              {info.yearly && <p className="font-[500]">2 months free</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center text-grey500 font-[500] gap-5 p-2 px-5 mt-5 bg-blue50 rounded-lg">
        <button
          type="button"
          onClick={() => setInfo((prev) => ({ ...prev, yearly: false }))}
          className={`${!info.yearly && "text-blue950"} transition-all`}
        >
          Monthly
        </button>

        <div
          onClick={() => setInfo((prev) => ({ ...prev, yearly: !prev.yearly }))}
          className="relative bg-blue950 h-5 w-10 rounded-full"
        >
          <div
            className={`absolute w-[12px] top-[4px] h-[12px] bg-white rounded-full 
              ${info.yearly ? "left-[calc(100%-4px)] -translate-x-full" : "left-[4px]"} transition-all`}
          />
        </div>

        <button
          type="button"
          onClick={() => setInfo((prev) => ({ ...prev, yearly: true }))}
          className={`${info.yearly && "text-blue950"} transition-all`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}

export default Step2;
