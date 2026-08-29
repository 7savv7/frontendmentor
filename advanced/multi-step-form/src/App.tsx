import { useState } from "react";

const steps = [
  { title: "Step 1", info: "Your info", component: <p>Your info</p> },
  { title: "Step 2", info: "Select plan", component: <p>Select plan</p> },
  { title: "Step 3", info: "Add-ons", component: <p>Add-ons</p> },
  { title: "Step 4", info: "Summary", component: <p>Summary</p> },
];

function App() {
  const [step, setStep] = useState(1);

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
                ${index + 1 === step && "text-blue950 border-transparent bg-blue200"}`}
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

        <div className="relative -top-22 w-full p-4">
          <div className="bg-white w-full">{steps[step - 1].component}</div>

          <div className="flex items-center justify-between fixed bottom-0 left-0 p-4 w-full bg-white">
            {step > 1 && (
              <button type="button" className="text-grey500 font-[500]">
                Go Back
              </button>
            )}

            <button
              type="button"
              className="ml-auto bg-blue950 text-white p-2 px-4 rounded-sm"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
