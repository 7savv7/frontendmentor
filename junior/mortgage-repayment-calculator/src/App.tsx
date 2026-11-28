import { useState } from "react";

interface Error {
  errorAmount: string;
  errorTerm: string;
  errorRate: string;
  errorType: string;
}

function App() {
  const [type, setType] = useState<"Repayment" | "Interest Only" | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [term, setTerm] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  const [results, setResults] = useState<boolean>(false);
  const [price, setPrice] = useState<[number, number]>([0, 0]);

  const [error, setError] = useState<Error>({
    errorAmount: "",
    errorTerm: "",
    errorRate: "",
    errorType: "",
  });

  const CalculateResults = () => {
    if (!amount) {
      setError((prev) => ({ ...prev, errorAmount: "This field is required" }));
    } else {
      setError((prev) => ({ ...prev, errorAmount: "" }));
    }

    if (!type) {
      setError((prev) => ({ ...prev, errorType: "This field is required" }));
    } else {
      setError((prev) => ({ ...prev, errorType: "" }));
    }

    if (!term) {
      setError((prev) => ({ ...prev, errorTerm: "This field is required" }));
    } else {
      setError((prev) => ({ ...prev, errorTerm: "" }));
    }

    if (!rate) {
      setError((prev) => ({ ...prev, errorRate: "This field is required" }));
    } else {
      setError((prev) => ({ ...prev, errorRate: "" }));
    }

    if (!type || !amount || !term || !rate) return;

    let r = rate / 100 / 12;
    let n = term * 12;

    if (type === "Repayment") {
      let repayment =
        amount * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
      setPrice([repayment, repayment * n]);
    } else if (type === "Interest Only") {
      let intrestOnly = amount * r;
      setPrice([intrestOnly, intrestOnly * n]);
    }

    setResults(true);
  };

  const clear = () => {
    setAmount(null);
    setTerm(null);
    setRate(null);
    setType(null);
    setResults(false);
    setPrice([0, 0]);
    setError({
      errorAmount: "",
      errorTerm: "",
      errorRate: "",
      errorType: "",
    });
  };

  return (
    <div className="min-h-svh lg:min-h-screen text-slate-700">
      <div className="p-5 flex flex-col gap-5">
        <div>
          <h1 className="font-bold text-slate-900 text-[1.4em]">
            Mortgage Calculator
          </h1>
          <button
            onClick={clear}
            type="button"
            className="underline underline-offset-2"
          >
            Clear All
          </button>
        </div>

        <div>
          <label htmlFor="amount">Mortgage Amount</label>

          <div
            className={`w-full border rounded-md flex overflow-hidden mt-2 
            ${error.errorAmount ? "border-red" : "border-slate-700"}`}
          >
            <p
              className={`${error.errorAmount ? "bg-red text-white" : "bg-slate-100"} p-2 px-4 font-bold`}
            >
              £
            </p>

            <input
              type="number"
              min={0}
              value={amount != null ? amount : ""}
              onChange={(e) => setAmount(Number(e.target.value))}
              id="amount"
              className="w-full h-full p-2.5 outline-none text-slate-900 font-bold"
            />
          </div>

          <p className="text-red font-medium mt-3">{error.errorAmount}</p>
        </div>

        <div>
          <label htmlFor="term">Mortgage Term</label>

          <div
            className={`w-full border rounded-md flex overflow-hidden mt-2 
            ${error.errorTerm ? "border-red" : "border-slate-700"}`}
          >
            <input
              type="number"
              min={0}
              value={term != null ? term : ""}
              onChange={(e) => setTerm(Number(e.target.value))}
              id="term"
              className="w-full h-full p-2.5 outline-none text-slate-900 font-bold"
            />

            <p
              className={`${error.errorTerm ? "bg-red text-white" : "bg-slate-100"} p-2 px-4 font-bold`}
            >
              years
            </p>
          </div>

          <p className="text-red font-medium mt-3">{error.errorTerm}</p>
        </div>

        <div>
          <label htmlFor="rate">Interest Rate</label>

          <div
            className={`w-full border rounded-md flex overflow-hidden mt-2 
            ${error.errorRate ? "border-red" : "border-slate-700"}`}
          >
            <input
              type="number"
              min={0}
              value={rate != null ? rate : ""}
              onChange={(e) => setRate(Number(e.target.value))}
              id="rate"
              className="w-full h-full p-2.5 outline-none text-slate-900 font-bold"
            />

            <p
              className={`${error.errorRate ? "bg-red text-white" : "bg-slate-100"} p-2 px-4 font-bold`}
            >
              %
            </p>
          </div>

          <p className="text-red font-medium mt-3">{error.errorRate}</p>
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

          <p className="text-red font-medium">{error.errorType}</p>
        </div>

        <button
          type="button"
          onClick={CalculateResults}
          className="cursor-pointer rounded-full bg-lime flex items-center justify-center p-3 font-bold text-slate-900 gap-2"
        >
          <img src="/images/icon-calculator.svg" alt="calculator" /> Calculate
          Repayments
        </button>
      </div>

      <div className="bg-slate-900/95 p-5 text-white ">
        {results ? (
          <div className="flex flex-col gap-5 text-slate-300">
            <p className="font-bold text-[1.2em] text-white">Your results</p>

            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>

            <div className="bg-slate-900 p-5 border-t-5 border-lime rounded-lg">
              <div>
                <p>Your monthly repayments</p>
                <p className="text-lime font-bold text-[1.6em] border-b border-slate-700 pb-3 mb-3">
                  £
                  {new Intl.NumberFormat("en-US").format(
                    Number(price[0].toFixed(2)),
                  )}
                </p>
              </div>

              <div>
                <p>Total you'll repay over the term</p>
                <p className="text-white font-bold text-[1.2em]">
                  £
                  {new Intl.NumberFormat("en-US").format(
                    Number(price[1].toFixed(2)),
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 text-center">
            <img src="/images/illustration-empty.svg" alt="empty" />

            <p className="text-[1.4em] font-bold">Results shown here</p>

            <p className="text-slate-300">
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
