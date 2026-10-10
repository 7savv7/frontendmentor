import { useState } from "react";

function App() {
  const [email, setEmail] = useState<string>("");
  const [validateEmail, setValidateEmail] = useState<boolean | null>();
  function isValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidateEmail(regex.test(email));
  }
  return (
    <div className="min-h-svh flex justify-center items-center bg-blue-700 lg:min-h-screen">
      <div
        className="bg-white min-h-svh w-full lg:min-h-fit flex flex-col-reverse justify-end 
        lg:w-fit lg:flex-row lg:rounded-4xl lg:p-5 lg:gap-10 lg:justify-normal"
      >
        <div className="p-5 py-10 flex flex-col justify-between flex-1 gap-5 lg:justify-center">
          <h1 className="text-[2em] font-bold lg:text-[4em]">Stay updated!</h1>

          <div>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className="mt-5 flex flex-col gap-2">
              {[
                "Product discovery and building what matters",
                "Measuring to ensure updates are a success",
                "And much more!",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    className="rounded-full"
                    src="images/icon-list.svg"
                    alt="icon-list"
                  />
                  <p>{i}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-full lg:mt-5">
            <div className="flex justify-between items-center">
              <p className="font-bold">Email address</p>

              {validateEmail === false && (
                <p className="text-red font-bold">Valid email required</p>
              )}
            </div>

            <input
              type="text"
              className={`border-2 border-grey/40 focus:border-black focus:text-black rounded-md p-4 mt-2 outline-none 
                ${validateEmail === false && "border-red text-red bg-red/20"}`}
              placeholder="email@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidateEmail(null);
              }}
            />

            <button
              onClick={isValidEmail}
              className="cursor-pointer rounded-md p-4 bg-blue-800 text-white mt-5 hover:shadow-2xl
              hover:bg-linear-to-br hover:from-pink-400 hover:to-red"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>

        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="images/illustration-sign-up-desktop.svg"
          />
          <img
            className="w-full"
            src="images/illustration-sign-up-mobile.svg"
            alt="illustration"
          />
        </picture>
      </div>
    </div>
  );
}

export default App;
