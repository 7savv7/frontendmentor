function App() {
  return (
    <div className="min-h-svh flex justify-center items-center bg-blue-700 lg:min-h-screen">
      <div className="bg-white min-h-svh w-full lg:min-h-fit flex flex-col-reverse justify-end lg:w-fit">
        <div>Hey</div>

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
