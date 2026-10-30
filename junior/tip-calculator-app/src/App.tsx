import { useState } from "react";

function App() {
  const [percent, setPercent] = useState<string>("");
  const [custom, setCustom] = useState<string>("");

  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  return (
    <div
      className="min-h-svh lg:min-h-screen bg-green-400/20 flex flex-col items-center gap-10 pt-10 
      lg:gap-20 lg:pt-0 lg:justify-center"
    >
      <img src="/images/logo.svg" alt="logo" />

      <div className="bg-white w-full flex-1 rounded-t-3xl p-5 flex flex-col gap-6 lg:flex-none lg:w-fit lg:rounded-3xl">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="bill" className="text-grey-500 text-[0.8em]">
              Bill
            </label>
            <div className="flex justify-between items-center gap-2 w-full bg-grey-50 p-3 rounded-md mt-2">
              <img src="images/icon-dollar.svg" alt="dollar" className="h-5" />
              <input
                type="number"
                id="bill"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="outline-none text-green-900 text-right w-full"
              />
            </div>
          </div>

          <div>
            <p className="text-grey-500 text-[0.8em]">Select Tip %</p>
            <div className="flex flex-wrap gap-3 mt-3">
              {["5%", "10%", "15%", "25%", "50%"].map((p) => (
                <div
                  key={p}
                  onClick={() => {
                    setCustom("");
                    setPercent(p);
                  }}
                  className={`${percent == p ? "text-green-900 bg-green-400" : "text-white bg-green-900"} 
                  p-3 flex-[1_1_100px] text-center rounded-md`}
                >
                  {p}
                </div>
              ))}

              <input
                type="text"
                placeholder="Custom"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setPercent("");
                }}
                className="bg-grey-50 outline-none p-3 flex-[1_1_100px] text-center w-0 rounded-md text-green-900"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="people" className="text-grey-500 text-[0.8em]">
              Number of People
            </label>
            <div className="flex justify-between items-center gap-2 w-full bg-grey-50 p-3 rounded-md mt-2">
              <img src="images/icon-person.svg" alt="person" className="h-5" />
              <input
                type="number"
                id="people"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="outline-none text-green-900 text-right w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-green-900 rounded-xl p-5 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-[0.7em]">Tip Amount</p>

              <p className="text-grey-400 text-[0.6em]">/ person</p>
            </div>

            <p className="text-green-400 text-[1.2em]">${0}</p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-[0.7em]">Total</p>

              <p className="text-grey-400 text-[0.6em]">/ person</p>
            </div>

            <p className="text-green-400 text-[1.2em]">${0}</p>
          </div>

          <button
            type="button"
            className="bg-green-400 w-full rounded-md p-2 uppercase text-green-900"
            onClick={() => {
              setBill(0);
              setPeople(0);
              setCustom("");
              setPercent("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
