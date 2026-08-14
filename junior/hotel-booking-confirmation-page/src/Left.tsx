function Left() {
  return (
    <div className="rotate-[-5deg] translate-x-[110px] bg-neutral0 w-fit rounded-xl p-4 shadow-lg">
      <div className="border-b border-dashed pb-2">
        <div className="flex justify-between">
          <p>Receipt</p>

          <p>
            {" "}
            № MS-2026 <br /> 0421-AH
          </p>
        </div>

        <p>Your stay</p>
      </div>

      <div className="flex py-2 border-b border-dashed">
        <div>
          <p>Check in</p>

          <p>25 Apr</p>

          <p>Saturday · 15:00</p>
        </div>

        <div>
          <p>Check out</p>
          <p>29 Apr</p>
          <p>Wednesday · 11:00</p>
        </div>
      </div>

      <div className="border-b py-2">
        <div className="flex justify-between">
          <p>Room · La Garrigue · 4 nights</p>

          <p>€ 620.00</p>
        </div>

        <div className="flex justify-between">
          <p>Breakfast · 2 guests</p>

          <p>€ 96.00</p>
        </div>

        <div className="flex justify-between">
          <p>Tourist tax</p>

          <p>€ 14.40</p>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex justify-between">
          <p>Total paid</p>

          <p>€ 730.40</p>
        </div>

        <div className="flex justify-between">
          <p>Paid · Wise · GBP</p>

          <img src="/images/icon-barcode.svg" alt="barcode" />
        </div>
      </div>
    </div>
  );
}

export default Left;
