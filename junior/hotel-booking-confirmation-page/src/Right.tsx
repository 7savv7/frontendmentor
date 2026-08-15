function Right() {
  return (
    <div
      className="flex flex-col justify-between w-full h-100 rotate-2 
      from-terracotta600 via-terracotta600 to-terracotta600/80 bg-linear-to-tr 
      text-neutral400 rounded-2xl shadow-2xl shadow-terracotta600 p-5 md:w-100
      md:translate-x-[-106px] md:rotate-3 group-hover:translate-x-0 group-hover:rotate-[-5deg] transition"
    >
      <div className="flex justify-between border-t border-neutral400/40 border-dashed pt-2 w-full">
        <p className="uppercase text-[12px]">Welcome Card</p>
        <img className="" src="/images/icon-sun.svg" alt="sun" />
      </div>

      <div>
        <p className="font-[Fraunces] italic text-sun300">
          A note from your host, <br />{" "}
          <span className="text-neutral400 text-[2rem]">Margaux.</span>
        </p>

        <p className="text-[12px] mt-4">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </div>

      <div className="mt-10">
        <p className="uppercase text-[12px]">Room</p>

        <p className="font-[Fraunces]">La Garrigue</p>
      </div>
    </div>
  );
}

export default Right;
