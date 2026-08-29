import type { Dispatch, SetStateAction } from "react";
import type { Info } from "../App";

interface Props {
  info: Info;
  setInfo: Dispatch<SetStateAction<Info>>;
}

const addOns = [
  { add: "Online service", text: "Access to multiplayer games", price: 1 },
  { add: "Larger storage", text: "Extra 1TB of cloud save", price: 2 },
  {
    add: "Customizable Profile",
    text: "Custom theme on your profile",
    price: 2,
  },
];

function Step3({ info, setInfo }: Props) {
  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Pick add-ons</h1>
      <p className="mt-2 text-grey500">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {addOns.map((a) => (
          <div
            key={a.add}
            className="flex items-center justify-between gap-2 border border-grey500 rounded-lg p-3 py-2"
          >
            <div className="flex items-center gap-2">
              <div
                onClick={() =>
                  setInfo((prev) => ({
                    ...prev,
                    adds: [...prev.adds, { name: a.add, price: a.price }],
                  }))
                }
                className={`w-5 h-5 mx-1 rounded border border-grey500
                ${info.adds.map((ad) => ad.name).includes(a.add) && "bg-purple600 border-transparent"}
                flex items-center justify-center transition-all`}
              >
                {info.adds.map((ad) => ad.name).includes(a.add) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                  >
                    <path
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="2"
                      d="m1 4 3.433 3.433L10.866 1"
                    />
                  </svg>
                )}
              </div>

              <div>
                <p className="font-[500]">{a.add}</p>
                <p className="text-[0.9em] text-grey500">{a.text}</p>
              </div>
            </div>

            <p className="text-[0.9em] text-purple600">
              +${info.yearly ? a.price * 10 : a.price}/mo
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step3;
