function App() {
  return (
    <div className="min-h-svh lg:min-h-screen bg-pale-blue flex justify-center items-center flex-col">
      <div className="w-full h-full flex-1 bg-white lg:h-fit lg:w-fit lg:flex-none">
        <div
          className="text-center text-white rounded-bl-3xl rounded-br-3xl p-8
          flex flex-col items-center gap-6
          bg-linear-to-b from-light-slate-blue to-light-royal-blue"
        >
          <p className="text-white/70">Your Result</p>

          <div className="bg-linear-to-b from-violet-blue to-persian-blue rounded-full w-35 h-35 p-5">
            <p className="font-bold text-[3em]">76</p>
            <p className="text-white/70">of 100</p>
          </div>

          <div>
            <p className="font-bold text-[1.3em]">Great</p>

            <p className="text-white/70 mt-2">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
