function App() {
  return (
    <div className="min-h-svh flex justify-center items-center bg-blue-700 lg:min-h-screen">
      <div className="bg-white min-h-svh w-full lg:min-h-fit flex flex-col-reverse justify-end lg:w-fit">
        <div className="p-10 flex flex-col gap-5">
          <h1>Stay updated!</h1>

          <div>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
              {[
                "Product discovery and building what matters",
                "Measuring to ensure updates are a success",
                "And much more!",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <img src="images/icon-list.svg" alt="icon-list" />
                  <p>{i}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <p>Email address</p>

            <input type="text" placeholder="email@company.com " />

            <button>Subscribe to monthly newsletter</button>
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
