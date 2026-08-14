function Arrival() {
  return (
    <div className="flex-1 flex flex-col gap-5 p-4 border border-neutral400 rounded-xl bg-neutral0 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-terracotta600 rounded-lg p-2">
            <img src="/images/icon-key.svg" alt="arrival" />
          </div>

          <p className="uppercase font-[DM Mono] tracking-wider text-terracotta600 font-semibold">
            Arrival
          </p>
        </div>

        <p className="text-terracotta600 font-[500] font-[Fraunces] text-[1.4rem]">
          01
        </p>
      </div>

      <div>
        <p className="text-[1.5rem] text-neutral900 font-[Fraunces]">Check-in from 15:00</p>

        <p className="text-[14px] text-neutral600 font-[500]">Sat, 25 April</p>

        <p className="text-neutral700 font-[500] mt-2">
          Ring the brass bell by the blue door. If we're at the market, the key
          is in the terracotta pot by the olive tree.
        </p>
      </div>
    </div>
  );
}

export default Arrival;
