import { useState } from "react";

function App() {
  const [type, setType] = useState<"Repayment" | "Interest Only" | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [term, setTerm] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  return (
    <div className="min-h-svh lg:min-h-screen text-slate-700">
      <div className="p-5 flex flex-col gap-5">
        <div>
          <h1 className="font-bold text-slate-900 text-[1.4em]">
            Mortgage Calculator
          </h1>
          <button
            onClick={() => {
              setAmount(null);
              setTerm(null);
              setRate(null);
              setType(null);
            }}
            type="button"
            className="underline underline-offset-2"
          >
            Clear All
          </button>
        </div>

        <div>
          <label htmlFor="amount">Mortgage Amount</label>

          <div className="w-full border border-slate-700 rounded-md flex overflow-hidden mt-2">
            <p className="bg-slate-100 p-2 px-4 font-bold">£</p>

            <input
              type="number"
              min={0}
              value={amount != null ? amount : ""}
              onChange={(e) => setAmount(Number(e.target.value))}
              id="amount"
              className="w-full h-full p-2.5 outline-none text-slate-900 font-bold"
            />
          </div>
        </div>

        <div>
          <label htmlFor="term">Mortgage Term</label>

          <div className="w-full border border-slate-700 rounded-md flex overflow-hidden mt-2">
            <input
              type="number"
              min={0}
              value={term != null ? term : ""}
              onChange={(e) => setTerm(Number(e.target.value))}
              id="term"
              className="w-full h-full p-2.5 outline-none text-slate-900 font-bold"
            />

            <p className="bg-slate-100 p-2 px-4 font-bold">years</p>
          </div>
        </div>

        <div>
          <label htmlFor="rate">Interest Rate</label>

          <div className="w-full border border-slate-700 rounded-md flex overflow-hidden mt-2">
            <input
              type="number"
              min={0}
              value={rate != null ? rate : ""}
              onChange={(e) => setRate(Number(e.target.value))}
              id="rate"
              className="w-full h-full p-2.5 outline-none text-slate-900 font-bold"
            />

            <p className="bg-slate-100 p-2 px-4 font-bold">%</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p>Mortgage Type</p>

          {(
            ["Repayment", "Interest Only"] as ("Repayment" | "Interest Only")[]
          ).map((option) => (
            <div
              onClick={() => setType(option)}
              key={option}
              className={`w-full border rounded-md p-2.5 px-4 flex gap-4 items-center 
              ${type === option && "border-lime bg-lime/10"}`}
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center 
                ${type === option && "border-lime"}`}
              >
                <div
                  className={`w-2 h-2 rounded-full bg-lime ${type === option ? "visible" : "hidden"}`}
                />
              </div>

              <p className="text-slate-900 font-bold">{option}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-full bg-lime flex items-center justify-center p-3 font-bold text-slate-900 gap-2"
        >
          <img src="/images/icon-calculator.svg" alt="calculator" /> Calculate
          Repayments
        </button>
      </div>
    </div>
  );
}

export default App;
