function App() {
  return (
    <div className="min-h-svh lg:min-h-screen text-slate-700">
      <div className="p-5 flex flex-col gap-5">
        <div>
          <h1>Mortgage Calculator</h1>
          <button type="button">Clear All</button>
        </div>

        <div>
          <label htmlFor="amount">Mortgage Amount</label>

          <div className="w-full border border-slate-700 rounded-md flex overflow-hidden mt-2">
            <p className="bg-slate-100 p-2 px-4 font-bold">£</p>

            <input
              type="text"
              id="amount"
              className="w-full h-full p-2.5 outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="term">Mortgage Term</label>

          <div className="w-full border border-slate-700 rounded-md flex overflow-hidden mt-2">
            <input
              type="text"
              id="term"
              className="w-full h-full p-2.5 outline-none"
            />

            <p className="bg-slate-100 p-2 px-4 font-bold">years</p>
          </div>
        </div>

        <div>
          <label htmlFor="rate">Interest Rate</label>

          <div className="w-full border border-slate-700 rounded-md flex overflow-hidden mt-2">
            <input
              type="text"
              id="rate"
              className="w-full h-full p-2.5 outline-none"
            />

            <p className="bg-slate-100 p-2 px-4 font-bold">%</p>
          </div>
        </div>

        <div>
          <p>Mortgage Type</p>

          <input type="radio" value="Repayment" name="type" />
          <input type="radio" value="Interest Only" name="type" />
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
