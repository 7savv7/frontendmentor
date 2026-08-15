function Left() {
  return (
    <div className="flex flex-col justify-between rotate-[-2deg] 
    bg-neutral0 w-full h-100 rounded-2xl p-5 shadow-2xl md:w-100
    md:translate-x-[106px] md:rotate-[-3deg] group-hover:translate-x-0 group-hover:rotate-5 transition">
      <div className="flex justify-between border-b border-neutral900/20 border-dashed pb-2">
        <div className="">
          <p className="uppercase text-[10px] text-neutral600">Receipt</p>

          <p className="font-[Fraunces] text-[1.2rem] mt-1">Your stay</p>
        </div>

        <p className="text-right text-[10px] text-neutral600">
          No MS-2026 <br /> 0421-AH
        </p>
      </div>

      <div className="flex gap-2 px-8 justify-between py-4 border-b border-neutral900/20 border-dashed">
        <div className="flex flex-col items-center text-neutral600">
          <p className="uppercase text-[12px] font-[400]">Check in</p>

          <p className="font-[Fraunces] text-[1.5rem] text-neutral900">25 Apr</p>

          <p className="text-[12px] font-[500]">Saturday · 15:00</p>
        </div>

        <div className="flex flex-col items-center text-neutral600">
          <p className="uppercase text-[12px] font-[400]">Check out</p>

          <p className="font-[Fraunces] text-[1.5rem] text-neutral900">29 Apr</p>

          <p className="text-[12px] font-[500]">Wednesday · 11:00</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-[14px] border-b border-neutral900/50 text-neutral900 font-[500] py-2 pb-4">
        <div className="flex items-center justify-between">
          <p>Room · La Garrigue · 4 nights</p>

          <p>€ 620.00</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Breakfast · 2 guests</p>

          <p>€ 96.00</p>
        </div>

        <div className="flex items-center justify-between text-neutral600">
          <p>Tourist tax</p>

          <p>€ 14.40</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-2 text-[14px]">
        <div className="flex justify-between items-center">
          <p className="uppercase text-neutral600 text-[12px] tracking-widest">Total paid</p>

          <p className="font-[Fraunces] text-[1.5rem]">€ 730.40</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="tracking-wider uppercase text-neutral600 text-[10px]">Paid · Wise · GBP</p>

          <img src="/images/icon-barcode.svg" alt="barcode" />
        </div>
      </div>
    </div>
  );
}

export default Left;
