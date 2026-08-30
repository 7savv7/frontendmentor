import type { Info } from "../App";

interface Props {
  info: Info;
  setStep: () => void;
}

function Step4({ info, setStep }: Props) {
  const total = () => {
    const adds =
      info.adds.length > 0
        ? info.adds.reduce((total, add) => total + add.price, 0)
        : 0;
    return info.plan?.price + adds;
  };

  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Finishing up</h1>
      <p className="mt-2 text-grey500">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-blue50 p-4 rounded-lg text-grey500 mt-5">
        <div
          className={`flex items-center justify-between 
            ${info.adds.length > 0 && "border-b pb-2"} border-grey500/40`}
        >
          <div>
            <p className="text-blue950 font-[500]">
              {info.plan.name} ({info.yearly ? "Yearly" : "Monthly"})
            </p>

            <button
              onClick={setStep}
              type="button"
              className="font-[500] underline"
            >
              Change
            </button>
          </div>

          <p className="text-blue950 font-[700]">
            ${info.yearly ? info.plan.price * 10 : info.plan.price}/
            {info.yearly ? "yr" : "mo"}
          </p>
        </div>

        {info.adds.length > 0 && (
          <div className="flex flex-col gap-3 mt-3">
            {info.adds.map((add) => (
              <div key={add.name} className="flex items-center justify-between">
                <p className="font-[500]">{add.name}</p>
                <p className="text-blue950">
                  +${info.yearly ? add.price * 10 : add.price}/
                  {info.yearly ? "yr" : "mo"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-4 mt-5">
        <p className="font-[500] text-grey500">
          Total (per {info.yearly ? "year" : "month"})
        </p>

        <p className="text-purple600 font-[700] text-[1.1em]">
          ${info.yearly ? total() * 10 : total()}/{info.yearly ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
}

export default Step4;
