function Breakfast() {
  return (
    <div className="flex-1 flex flex-col gap-5 p-4 border border-neutral400 rounded-xl bg-neutral0 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-rose500 rounded-lg p-2">
            <img src="/images/icon-breakfast.svg" alt="arrival" />
          </div>

          <p className="uppercase font-[DM Mono] tracking-wider text-rose500 font-semibold">
            Breakfast
          </p>
        </div>

        <p className="text-rose500 font-[500] font-[Fraunces] text-[1.4rem]">
          03
        </p>
      </div>

      <div>
        <p className="text-[1.5rem] text-neutral900 font-[Fraunces]">Served 8 - 10:30</p>

        <p className="text-[14px] text-neutral600 font-[500]">On the terrace</p>

        <p className="text-neutral700 font-[500] mt-2">
          Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free
          option? Leave a note the night before.
        </p>
      </div>
    </div>
  );
}

export default Breakfast;
