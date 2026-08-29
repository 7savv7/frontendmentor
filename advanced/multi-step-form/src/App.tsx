import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ThankYouPage from "./components/ThankYouPage";

export interface Info {
  name: string;
  email: string;
  phone: string;
  yearly: boolean;
  plan: null | { name: string; price: number };
  adds: { name: string; price: number }[];
}

function App() {
  const [info, setInfo] = useState<Info>({
    name: "",
    email: "",
    phone: "",
    yearly: false,
    plan: null,
    adds: [],
  });

  const [step, setStep] = useState<number>(1);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [slideRight, setSlideRight] = useState<boolean>(false);
  const [slideLeft, setSlideLeft] = useState<boolean>(false);

  const changePlan = () => {
    setSlideLeft(false);

    requestAnimationFrame(() => {
      setSlideLeft(true);
    });

    setStep(2);

    setTimeout(() => {
      setSlideLeft(false);
    }, 450);
  };

  const steps = [
    {
      title: "Step 1",
      info: "Your info",
      component: <Step1 info={info} setInfo={setInfo} />,
    },
    {
      title: "Step 2",
      info: "Select plan",
      component: <Step2 info={info} setInfo={setInfo} />,
    },
    {
      title: "Step 3",
      info: "Add-ons",
      component: <Step3 info={info} setInfo={setInfo} />,
    },
    {
      title: "Step 4",
      info: "Summary",
      component: <Step4 info={info} setStep={changePlan} />,
    },
  ];

  const nextStep = () => {
    setSlideRight(false);

    requestAnimationFrame(() => {
      setSlideRight(true);
    });

    setStep((prev) => (prev < 4 ? prev + 1 : prev));

    setTimeout(() => {
      setSlideRight(false);
    }, 450);
  };

  const prevStep = () => {
    setSlideLeft(false);

    requestAnimationFrame(() => {
      setSlideLeft(true);
    });

    setStep((prev) => (prev > 1 ? prev - 1 : prev));

    setTimeout(() => {
      setSlideLeft(false);
    }, 450);
  };

  const confirmation = () => {
    if (step === 4) {
      setConfirm(true);
      setInfo({
        name: "",
        email: "",
        phone: "",
        yearly: false,
        plan: null,
        adds: [],
      });
      setSlideRight(true);
      setTimeout(() => {
        setSlideRight(false);
      }, 450);
    }
  };

  return (
    <div className="min-h-svh lg:min-h-screen">
      <div className="flex flex-col w-full h-full">
        <div
          className="flex items-center justify-center gap-4 w-full h-[172px] pb-22 pt-4 
          bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat"
        >
          {steps.map((s, index) => (
            <div key={s.title} className="text-white">
              <div
                className={`flex items-center justify-center border border-white rounded-full w-8 h-8 p-2 font-[700]
                ${index + 1 === step && "text-blue950 border-transparent bg-blue200"} transition-all duration-450`}
              >
                <p>{index + 1}</p>
              </div>

              <div className="hidden">
                <p>{s.title}</p>
                <p>{s.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden relative -top-22 w-full p-4">
          <div
            className={`bg-white w-full p-5 rounded-lg shadow-lg 
              ${slideRight && "animate-slide-left"} ${slideLeft && "animate-slide-right"} `}
          >
            {confirm ? <ThankYouPage /> : steps[step - 1].component}
          </div>

          {!confirm && (
            <div className="flex items-center justify-between fixed bottom-0 left-0 p-4 w-full bg-white">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-grey500 font-[500]"
                >
                  Go Back
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto bg-blue950 text-white p-2 px-4 rounded-sm"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={confirmation}
                  className="ml-auto bg-purple600 text-white p-2 px-4 rounded-sm"
                >
                  Confirm
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
