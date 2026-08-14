import { useState } from "react";

function Wifi() {
  const [copy, setCopy] = useState<string>("Copy");
  const handleCopy = () => {
    setCopy("Copied");
    navigator.clipboard.writeText("soleil-2026");
    setTimeout(() => {
      setCopy("Copy");
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col gap-5 p-4 border border-neutral400 rounded-xl bg-neutral0 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue500 rounded-lg p-2">
            <img src="/images/icon-wifi.svg" alt="arrival" />
          </div>

          <p className="uppercase font-[DM Mono] tracking-wider text-blue500 font-semibold">
            Wifi
          </p>
        </div>

        <p className="text-blue500 font-[500] font-[Fraunces] text-[1.4rem]">
          02
        </p>
      </div>

      <div>
        <p className="text-[1.5rem] text-neutral900 font-[Fraunces]">
          Le Soleil · Guest
        </p>

        <p className="text-[14px] text-neutral600 font-[500]">Password below</p>

        <div className="mt-4 flex flex-col gap-1 text-[14px]">
          <div className="flex items-center justify-between bg-neutral200 rounded-md p-1 px-2">
            <p className="uppercase text-neutral600 font-[500] tracking-widest">
              Network
            </p>

            <p className="text-neutral900">Le Soleil · Guest</p>
          </div>

          <div className="flex items-center justify-between  bg-neutral200 rounded-md p-1 px-2">
            <p className="uppercase text-neutral600 font-[500] tracking-widest">
              Password
            </p>

            <div className="flex gap-2">
              <p className="text-neutral900">soleil-2026</p>

              <button
                type="button"
                onClick={handleCopy}
                className="cursor-pointer border rounded-full px-1 uppercase border-neutral600/60 font-[500]
               hover:bg-neutral400/60 text-neutral600/80 text-[12px] 
               focus-visible:outline-terracotta600 focus-visible:bg-neutral200 focus-visible:outline-offset-4"
              >
                {copy}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wifi;
