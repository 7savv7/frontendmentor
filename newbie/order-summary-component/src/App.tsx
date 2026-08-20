function App() {
  return (
    <div
      className="flex justify-center items-center min-h-svh bg-[url(/images/pattern-background-mobile.svg)] 
      bg-no-repeat p-5 bg-[100%_auto] md:bg-[url(/images/pattern-background-desktop.svg)] md:min-h-screen"
    >
      <main className="bg-white w-full max-w-[450px] overflow-hidden rounded-xl flex flex-col shadow-xl shadow-blue950/10">
        <img
          className=" w-full"
          src="/images/illustration-hero.svg"
          alt="hero"
        />

        <div className="flex flex-col items-center gap-5 text-center p-10">
          <h1 className="text-[1.6rem] font-[900] text-blue950">
            Order Summary
          </h1>

          <p className="text-gray600 font-[500] w-[80%]">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="flex items-center justify-between bg-blue50 rounded-xl w-full p-5">
            <div className="flex items-center gap-4">
              <img src="/images/icon-music.svg" alt="music" />

              <div className="flex flex-col justify-between">
                <p className="text-blue950 font-[900]">Annual Plan</p>
                <p className="text-gray600 font-[500]">$59.99/year</p>
              </div>
            </div>

            <p className="cursor-pointer text-blue700 font-[700] underline hover:no-underline hover:opacity-60">
              Change
            </p>
          </div>

          <button
            type="button"
            className="cursor-pointer text-white bg-blue700 w-full rounded-lg p-2 
            font-[700] shadow-xl shadow-blue700/20 hover:opacity-60"
          >
            Proceed to Payment
          </button>

          <p className="cursor-pointer text-gray600 font-[900] hover:text-blue950">
            Cancel Order
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
