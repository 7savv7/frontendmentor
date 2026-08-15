function Right() {
  return (
    <div
      className="rotate-2 from-terracotta600 via-terracotta600 to-terracotta600/80 bg-linear-to-tr 
    text-neutral400 w-80 rounded-2xl shadow-2xl shadow-terracotta600 p-4"
    >
      <div className="w-full h-[1px] border-t border-neutral400/40 border-dashed" />

      <div className="flex justify-between pt-2 w-full">
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
