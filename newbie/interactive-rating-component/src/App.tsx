import { useState } from "react";

function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);
  const rates = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center items-center p-5 min-h-svh md:min-h-screen">
      <main
        className={`flex flex-col ${submit && "items-center text-center"} gap-5 bg-grey900/50 text-grey500 
        rounded-xl p-6 w-full max-w-100`}
      >
        {submit ? (
          <>
            <img
              className="w-[162px] h-[108px]"
              src="/images/illustration-thank-you.svg"
              alt="thank-you"
            />

            <div className="bg-grey900 rounded-full py-1 px-3">
              <p className="text-orange500">You selected {rating} out of 5</p>
            </div>

            <h1 className="text-white text-[2rem] font-[700]">Thank you!</h1>

            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </>
        ) : (
          <>
            <div className="rounded-full bg-grey900 flex justify-center items-center p-3 w-fit">
              <img src="/images/icon-star.svg" alt="star" />
            </div>

            <h1 className="text-white text-[1.6rem] font-[700]">
              How did we do?
            </h1>

            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            <ul className="flex justify-between items-center">
              {rates.map((rate) => (
                <li
                  className={`bg-grey900 rounded-full w-12 h-12 flex justify-center 
              items-center font-[700] cursor-pointer hover:bg-orange500 hover:text-grey950 
              ${rating === rate && "bg-white text-grey950 hover:bg-white"}`}
                  key={rate}
                  onClick={() => setRating(rate)}
                >
                  {rate}
                </li>
              ))}
            </ul>

            <button
              className="cursor-pointer w-full bg-orange500 text-grey950 uppercase 
          font-[700] tracking-widest p-2 rounded-full hover:bg-white"
              type="button"
              onClick={() => rating !== null && setSubmit(true)}
            >
              Submit
            </button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
