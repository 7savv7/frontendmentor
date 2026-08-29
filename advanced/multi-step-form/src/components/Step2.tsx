import { useState } from "react";

function Step2() {
  const [yearly, setYearly] = useState<boolean>(false);

  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Select your plan</h1>
      <p className="mt-2 text-grey500">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col gap-3 mt-5">
        <div className="flex items-start gap-3 border border-grey500 rounded-md p-3">
          <img src="/images/icon-arcade.svg" alt="arcade" />

          <div>
            <p>Arcade</p>
            <p>$9/mo</p>
            <p className="hidden">2 months free</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border border-grey500 rounded-md p-3">
          <img src="/images/icon-advanced.svg" alt="advanced" />
          <div>
            <p>Advanced</p>
            <p>$12/mo</p>
            <p className="hidden">2 months free</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border border-grey500 rounded-md p-3">
          <img src="/images/icon-pro.svg" alt="pro" />
          <div>
            <p>Pro</p>
            <p>$15/mo</p>
            <p className="hidden">2 months free</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-grey500 font-[500] gap-5 p-2 px-5 mt-5 bg-blue50 rounded-lg">
        <button
          type="button"
          onClick={() => setYearly(false)}
          className={`${!yearly && "text-blue950"} transition-all`}
        >
          Monthly
        </button>

        <div
          onClick={() => setYearly((prev) => !prev)}
          className="relative bg-blue950 h-5 w-10 rounded-full"
        >
          <div
            className={`absolute w-[12px] top-[4px] h-[12px] bg-white rounded-full 
              ${yearly ? "left-[calc(100%-4px)] -translate-x-full" : "left-[4px]"} transition-all`}
          />
        </div>

        <button
          type="button"
          onClick={() => setYearly(true)}
          className={`${yearly && "text-blue950"} transition-all`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}

export default Step2;
