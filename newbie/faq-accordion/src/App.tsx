import { useState } from "react";

function App() {
  const [active, setActive] = useState<number>(-1);
  const questions = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div
      className="flex items-center justify-center min-h-svh bg-purple100 bg-[url(/images/background-pattern-mobile.svg)] 
      bg-no-repeat bg-[100%_auto] p-5 text-purple950 lg:min-h-screen lg:bg-[url(/images/background-pattern-desktop.svg)]"
    >
      <div className="bg-white rounded-xl shadow-xl shadow-purple950/8 p-8 pb-4 w-full lg:w-[40%]">
        <div className="flex items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
          >
            <path
              fill="#AD28EB"
              d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
            />
          </svg>

          <h1 className="text-[3em] font-bold">FAQs</h1>
        </div>

        <div>
          {questions.map((q, i) => (
            <div
              key={i}
              className={`${i < questions.length - 1 && "border-b border-purple100"} pb-5`}
            >
              <div className="flex items-center justify-between gap-2 pt-5">
                <button
                  type="button"
                  aria-expanded={i == active}
                  onClick={() => setActive((prev) => (prev === i ? -1 : i))}
                  className="cursor-pointer text-left font-[600] hover:text-[#AD28EB]"
                >
                  {q.question}
                </button>

                {active !== i ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    fill="none"
                    viewBox="0 0 30 31"
                  >
                    <path
                      fill="#AD28EB"
                      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    fill="none"
                    viewBox="0 0 30 31"
                  >
                    <path
                      fill="#301534"
                      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                    />
                  </svg>
                )}
              </div>

              <p
                className={`overflow-hidden text-purple600 grid ${active === i ? "grid-rows-[1fr] pt-5" : "grid-rows-[0fr]"} transition-all`}
              >
                <span className="overflow-hidden">{q.answer}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
