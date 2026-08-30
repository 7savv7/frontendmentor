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
  plan: { name: string; price: number };
  adds: { name: string; price: number }[];
}

function App() {
  const [info, setInfo] = useState<Info>({
    name: "",
    email: "",
    phone: "",
    yearly: false,
    plan: { name: "Arcade", price: 9 },
    adds: [],
  });

  const [step, setStep] = useState<number>(1);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

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
      component: <Step1 info={info} setInfo={setInfo} errors={errors} />,
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
    if (step === 1) {
      const newErrors: Record<string, string> = {};

      if (!info.name.trim()) {
        newErrors.name = "This field is required";
      } else if (info.name.trim().length < 3) {
        newErrors.name = "Name must have at least 3 characters";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!info.email.trim()) {
        newErrors.email = "This field is required";
      } else if (!emailRegex.test(info.email.trim())) {
        newErrors.email = "Invalid email format";
      }

      const phoneRegex = /^[0-9]+$/;
      if (!info.phone.trim()) {
        newErrors.phone = "This field is required";
      } else if (!phoneRegex.test(info.phone.trim())) {
        newErrors.phone = "Phone must contain only numbers";
      } else if (info.phone.trim().length < 10) {
        newErrors.phone = "Phone must have at least 10 digits";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) return;
    }

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
        plan: { name: "Arcade", price: 9 },
        adds: [],
      });
      setSlideRight(true);
      setTimeout(() => {
        setSlideRight(false);
      }, 450);
    }
  };

  return (
    <div className="flex min-h-svh lg:min-h-screen lg:items-center lg:justify-center">
      <div
        className="flex flex-col w-full h-full lg:w-[60%] lg:max-w-[1000px] lg:h-fit
        lg:flex-row lg:bg-white lg:rounded-xl lg:p-4 lg:shadow-lg"
      >
        <div
          className="flex items-center justify-center gap-4 w-full h-[172px] pb-22 pt-4 
          bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat 
          lg:bg-[url(/images/bg-sidebar-desktop.svg)] lg:h-full lg:w-[274px] 
          lg:p-6 lg:flex-col lg:items-start lg:min-h-[568px] lg:rounded-lg lg:justify-start"
        >
          {steps.map((s, index) => (
            <div
              key={s.title}
              className="text-white lg:flex lg:items-center lg:gap-4"
            >
              <div
                className={`flex items-center justify-center border border-white rounded-full w-8 h-8 p-2 font-[700]
                ${index + 1 === step && "text-blue950 border-transparent bg-blue200"} transition-all duration-450`}
              >
                <p>{index + 1}</p>
              </div>

              <div className="hidden uppercase lg:flex lg:flex-col">
                <p className="text-blue300 text-[0.8em]">{s.title}</p>
                <p className="font-[700] text-[0.9em]">{s.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="overflow-hidden relative -top-22 w-full p-4 
          lg:flex-1 lg:static lg:px-2 xl:px-20 lg:py-0 lg:pt-5 lg:flex lg:flex-col lg:justify-between"
        >
          <div
            className={`bg-white w-full p-5 rounded-lg shadow-lg 
              ${slideRight && "animate-slide-left"} ${slideLeft && "animate-slide-right"} 
              lg:shadow-none`}
          >
            {confirm ? <ThankYouPage /> : steps[step - 1].component}
          </div>

          {!confirm && (
            <div className="flex items-center justify-between fixed bottom-0 left-0 p-4 w-full bg-white lg:static">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="cursor-pointer text-grey500 font-[500] hover:text-blue950"
                >
                  Go Back
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="cursor-pointer ml-auto bg-blue950 text-white p-2 px-4 rounded-sm hover:bg-blue950/80"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={confirmation}
                  className="cursor-pointer ml-auto bg-purple600 text-white p-2 px-4 
                  rounded-sm lg:px-6 transition-all hover:opacity-50"
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
