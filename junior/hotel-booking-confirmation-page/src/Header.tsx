function Header() {
  return (
    <header className="flex gap-4 flex-col md:items-center md:flex-row md:justify-between">
      <div>
        <p className="uppercase text-neutral600 text-[12px] tracking-wider">
          Booking · Confirmed
        </p>
        <p className="font-[Fraunces] text-[2rem]">
          Bienvenue, <span className="italic text-terracotta600">Lucia.</span>
        </p>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 cursor-pointer border border-neutral400 
        rounded-full px-3 py-2 text-[14px] md:flex-initial hover:bg-neutral200 font-[500]
        focus-visible:outline-terracotta600 focus-visible:bg-neutral200 focus-visible:outline-offset-4"
        >
          Print receipt
        </button>
        <button
          type="button"
          className="flex-1 cursor-pointer border rounded-full font-[500]
        text-white text-[14px] px-3 py-2 bg-neutral900 md:flex-initial hover:bg-neutral900/80
        focus-visible:outline-terracotta600 focus-visible:bg-neutral900/80 focus-visible:outline-offset-4"
        >
          Add to calendar
        </button>
      </div>
    </header>
  );
}

export default Header;
