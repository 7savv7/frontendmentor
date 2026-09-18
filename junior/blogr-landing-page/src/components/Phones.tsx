function Phones() {
  return (
    <div className="text-white -mt-50 text-center">
      <img
        className="relative top-50 z-1"
        src="/images/illustration-phones.svg"
        alt="phones"
      />

      <div className="overflow-hidden relative bg-linear-to-b from-purple950 to-purple900 pt-50 pb-20 p-5  rounded-tr-[80px] rounded-bl-[80px]">
        <img
          className="absolute bottom-[40%]"
          src="/images/bg-pattern-circles.svg"
          alt="circles"
        />

        <h2 className="relative z-1 text-[1.6em]">
          State of the Art Infrastructure
        </h2>
        <p className="relative z-1 mt-5">
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
