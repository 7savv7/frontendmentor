import { useState } from "react";

function App() {
  const [percent, setPercent] = useState<number>(0);
  const [custom, setCustom] = useState<number>(0);

  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  return (
    <div
      className="min-h-svh lg:min-h-screen bg-green-400/20 flex flex-col items-center gap-10 pt-10 
      lg:gap-20 lg:pt-0 lg:justify-center"
    >
      <img src="/images/logo.svg" alt="logo" />

      <div
        className="bg-white w-full flex-1 rounded-t-3xl p-5 flex flex-col gap-6 
        lg:flex-none lg:w-[60%] lg:rounded-3xl lg:flex-row lg:p-8 lg:gap-8 lg:shadow-2xl"
      >
        <div className="flex flex-col gap-5 lg:w-1/2">
          <div className="flex flex-col">
            <label htmlFor="bill" className="text-grey-500 text-[0.8em]">
              Bill
            </label>
            <div
              className="flex justify-between items-center gap-2 w-full bg-grey-50 p-3 
              rounded-md mt-2 border-2 border-transparent hover:border-green-400"
            >
              <img src="images/icon-dollar.svg" alt="dollar" className="h-5" />
              <input
                type="number"
                id="bill"
                value={bill}
                min={0}
                onChange={(e) => setBill(Number(e.target.value))}
                className="outline-none text-green-900 text-right w-full"
              />
            </div>
          </div>

          <div>
            <p className="text-grey-500 text-[0.8em]">Select Tip %</p>
            <div className="flex flex-wrap gap-3 mt-3">
              {[5, 10, 15, 25, 50].map((p) => (
                <div
                  key={p}
                  onClick={() => {
                    setCustom(0);
                    setPercent(p);
                  }}
                  className={`cursor-pointer ${percent == p ? "text-green-900 bg-green-400" : "text-white bg-green-900 hover:bg-grey-200 hover:text-green-900"} 
                  p-3 flex-[1_1_100px] text-center rounded-md`}
                >
                  {p}%
                </div>
              ))}

              <input
                type="text"
                placeholder="Custom"
                value={custom}
                onChange={(e) => {
                  setCustom(Number(e.target.value));
                  setPercent(0);
                }}
                className="bg-grey-50 outline-none p-3 flex-[1_1_100px] text-center w-0 
                rounded-md text-green-900 border-2 border-transparent hover:border-green-400"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor="people" className="text-grey-500 text-[0.8em]">
                Number of People
              </label>
              {people === 0 && bill != 0 && (
                <p className="text-[0.7em] text-red-400">Can't be zero</p>
              )}
            </div>
            <div
              className={`${people === 0 && bill != 0 ? "border-red-400" : "border-transparent"} border-2 
              flex justify-between items-center gap-2 w-full bg-grey-50 p-3 rounded-md mt-2`}
            >
              <img src="images/icon-person.svg" alt="person" className="h-5" />
              <input
                type="number"
                id="people"
                value={people}
                min={0}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="outline-none text-green-900 text-right w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-green-900 rounded-xl p-5 flex flex-col justify-between gap-5 lg:w-1/2 lg:p-8">
          <div className="flex flex-col gap-5 lg:gap-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-[0.7em]">Tip Amount</p>

                <p className="text-grey-400 text-[0.6em]">/ person</p>
              </div>

              <p className="text-green-400 text-[1.2em]">
                $
                {people > 0
                  ? ((bill * Math.max(percent, custom)) / 100 / people).toFixed(
                      2,
                    )
                  : 0}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-[0.7em]">Total</p>

                <p className="text-grey-400 text-[0.6em]">/ person</p>
              </div>

              <p className="text-green-400 text-[1.2em]">
                $
                {people > 0
                  ? (
                      (bill + (bill * Math.max(percent, custom)) / 100) /
                      people
                    ).toFixed(2)
                  : 0}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="cursor-pointer hover:bg-grey-200 bg-green-400 w-full rounded-md p-2 uppercase text-green-900"
            onClick={() => {
              setBill(0);
              setPeople(0);
              setCustom(0);
              setPercent(0);
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
