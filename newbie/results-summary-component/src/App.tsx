function App() {
  const summary = [
    {
      title: "Reaction",
      percent: 80,
      color: {
        hue: 0,
        saturation: 100,
        lightness: 67,
      },
    },
    {
      title: "Memory",
      percent: 92,
      color: {
        hue: 39,
        saturation: 100,
        lightness: 56,
      },
    },
    {
      title: "Verbal",
      percent: 61,
      color: {
        hue: 166,
        saturation: 100,
        lightness: 37,
      },
    },
    {
      title: "Visual",
      percent: 72,
      color: {
        hue: 234,
        saturation: 85,
        lightness: 45,
      },
    },
  ];

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

        <div className="p-5">
          <p className="font-bold text-dark-gray-blue">Summary</p>

          <div className="flex flex-col gap-5 mt-5">
            {summary.map((sum) => (
              <div
                key={sum.title}
                style={{
                  backgroundColor: `hsla(${sum.color.hue + "," + sum.color.saturation + "%," + sum.color.lightness}%, 0.05)`,
                }}
                className="flex justify-between items-center p-4 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`/images/icon-${sum.title.toLowerCase()}.svg`}
                    alt={`${sum.title}`}
                  />
                  <p
                    style={{
                      color: `hsl(${sum.color.hue + "," + sum.color.saturation + "%," + sum.color.lightness}%)`,
                    }}
                    className="font-bold"
                  >
                    {sum.title}
                  </p>
                </div>

                <p className="text-dark-gray-blue/70 font-medium">
                  <span className="font-bold text-dark-gray-blue mr-1">{sum.percent}</span> / 100
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 w-full bg-dark-gray-blue text-white rounded-full p-4 font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
