import Header from "./Header";

function Intro() {
  return (
    <div className="relative overflow-hidden p-5 bg-linear-to-br from-orange300 to-red550 rounded-bl-[80px]">
      <div className="relative z-10">
        <Header />
      </div>

      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/bg-pattern-intro-desktop.svg"
        />
        <img
          className="absolute w-full lg:left-100 h-full object-cover inset-0 object-center scale-200"
          src="/images/bg-pattern-intro-mobile.svg"
          alt="pattern"
        />
      </picture>

      <div className="relative z-1 text-center py-30 text-white">
        <h1 className="text-[2em] font-medium lg:text-[4em]">
          A modern publishing platform
        </h1>

        <p className="mt-4 text-white/60 lg:text-[1.5em]">
          Grow your audience and build your online brand
        </p>

        <div className="flex justify-center items-center gap-5">
          <button
            type="button"
            className="cursor-pointer bg-white mt-10 rounded-full p-3 px-5 text-red550 font-medium 
            hover:bg-red400/80 hover:text-white"
          >
            Start for Free
          </button>

          <button
            type="button"
            className="cursor-pointer bg-transparent border border-white mt-10 rounded-full p-3 px-5 font-medium
             hover:bg-white hover:text-red550"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
