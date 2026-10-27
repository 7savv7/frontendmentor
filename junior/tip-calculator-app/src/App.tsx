function App() {
  return (
    <div
      className="min-h-svh lg:min-h-screen bg-green-400/20 flex flex-col items-center gap-10 pt-10 
      lg:gap-20 lg:pt-0 lg:justify-center"
    >
      <img src="/images/logo.svg" alt="logo" />

      <div className="bg-white w-full flex-1 rounded-t-3xl p-5 flex flex-col lg:flex-none lg:w-fit lg:rounded-3xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <label htmlFor="bill">Bill</label>
            <div className="flex justify-between items-center gap-2 w-full bg-grey-50 p-3 rounded-md">
              <img src="images/icon-dollar.svg" alt="dollar" className="h-5" />
              <input type="text" id="bill" className="" />
            </div>
          </div>

          <div>
            <p>Select Tip %</p>
            <div className="flex flex-wrap gap-3 mt-5">
              {["5%", "10%", "15%", "25%", "50%"].map((p) => (
                <div
                  key={p}
                  className="text-white bg-green-900 p-3 flex-[1_1_100px] text-center rounded-md"
                >
                  {p}
                </div>
              ))}

              <input
                type="text"
                placeholder="Custom"
                className="bg-green-900 p-3 flex-[1_1_100px] text-center w-0 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="people">Number of People</label>
            <input type="text" id="people" />
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
          </div>

          <div>
            <div>
              <p>Total</p>

              <p>/ person</p>
            </div>
          </div>

          <button type="button">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
