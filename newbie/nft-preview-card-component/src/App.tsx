function App() {
  return (
    <div className="text-white h-fit max-w-[320px] w-full bg-[hsl(216,50%,16%)] p-6 rounded-xl">
      <div className="group cursor-pointer relative rounded-xl">
        <img
          className="rounded-xl"
          src="images/image-equilibrium.jpg"
          alt="equilibrium"
        />

        <div className="absolute top-0 left-0 w-full h-full hidden items-center justify-center bg-c/50 rounded-xl group-hover:flex">
          <img src="images/icon-view.svg" alt="view" />
        </div>
      </div>

      <h1 className="cursor-pointer font-bold mt-5 text-[1.4rem] hover:text-c">
        Equilibrium #3429
      </h1>

      <p className="text-[1rem] mt-3 text-b">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="flex items-center justify-between gap-2 border-b border-line pb-3 mt-4 text-[1rem]">
        <div className="flex items-center gap-2">
          <img
            className="w-[11px] h-[18px]"
            src="images/icon-ethereum.svg"
            alt="ethereum"
          />

          <p className="text-c">0.041 ETH</p>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-[17px] h-[17px]"
            src="images/icon-clock.svg"
            alt="clock"
          />

          <p className="text-b">3 days left</p>
        </div>
      </div>

      <div className="flex gap-4 mt-3 text-[1rem]">
        <img
          className="w-[25px] h-[25px] border border-white rounded-full"
          src="images/image-avatar.png"
          alt="avatar"
        />

        <p className="text-b">
          Creation of{" "}
          <span className="cursor-pointer text-white hover:text-c">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
