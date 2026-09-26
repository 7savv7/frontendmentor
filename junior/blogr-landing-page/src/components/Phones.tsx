function Phones() {
  return (
    <div
      className="flex flex-col items-center text-white -mt-50 text-center lg:flex-row lg:mt-0
      lg:relative"
    >
      <img
        className="relative top-50 z-1 lg:-top-[16%] lg:pl-30 lg:absolute"
        src="/images/illustration-phones.svg"
        alt="phones"
      />

      <div
        className="overflow-hidden relative bg-linear-to-b from-purple950 to-purple900 pt-50 pb-20 p-10 
      rounded-tr-[80px] rounded-bl-[80px] lg:pl-[50%] lg:text-left lg:pt-34 lg:pb-34 lg:pr-30"
      >
        <img
          className="absolute bottom-[40%] lg:-left-[18%] lg:bottom-0"
          src="/images/bg-pattern-circles.svg"
          alt="circles"
        />

        <h2 className="relative z-1 text-[2em]">
          State of the Art Infrastructure
        </h2>
        <p className="relative z-1 mt-5 text-white/70">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
}

export default Phones;
