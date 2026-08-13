import { useEffect, useState } from "react";

interface Advice {
  slip: { id: number; advice: string };
}

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const getAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="min-h-svh flex justify-center items-center p-5">
      <div className="flex flex-col w-full max-w-100 text-center items-center rounded-lg p-8 pb-0 text-white bg-blue900">
        <p className="uppercase text-green300 text-[12px] font-semibold tracking-[0.3rem]">
          Advice #{advice?.slip.id}
        </p>
        <p className="my-5 text-[28px] font-semibold">
          "{advice?.slip.advice}"
        </p>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/pattern-divider-desktop.svg"
          />
          <img src="/images/pattern-divider-mobile.svg" alt="divider" />
        </picture>

        <div className="w-full flex justify-center">
          <button
            onClick={getAdvice}
            type="button"
            className="relative top-6 cursor-pointer bg-green300 w-12 h-12 rounded-full flex justify-center items-center shadow-green300 transition duration-300 hover:shadow-[0_0_20px_0px]"
          >
            <img className="w-5 h-5" src="/images/icon-dice.svg" alt="dice" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
