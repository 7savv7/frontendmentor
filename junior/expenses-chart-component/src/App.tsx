function App() {
  return (
    <div className="min-h-svh lg:min-h-screen bg-red-100 p-5 flex justify-center items-center">
      <div className="w-full flex flex-col gap-5">
        <div className="bg-red-500 rounded-xl p-5 flex justify-between">
          <div className="text-white flex flex-col justify-between gap-1">
            <p>My balance</p>

            <p className="font-bold text-[1.5em]">$921.48</p>
          </div>

          <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className="bg-white p-5 rounded-xl">
          <div className="border-t-2 border-red-100 pt-5">
            <p className="text-brown-400 text-[0.8em]">Total this month</p>

            <div className="flex items-center justify-between">
              <p className="font-bold text-[2em]">$478.33</p>

              <div className="text-right text-[0.8em]">
                <p className="font-bold">+2.4%</p>
                <p className="text-brown-400">from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
