function Right() {
  return (
    <div className="rotate-[2deg] translate-x-[-100px] bg-terracotta600 w-80 rounded-xl shadow-lg p-4">
      <div className="w-full h-[1px] border-t border-dashed" />

      <div>
        <p>Welcome Card</p>
        <img src="/images/icon-sun.svg" alt="sun" />
      </div>

      <div>
        <p>
          A note from your host, <span>Margaux.</span>
        </p>

        <p>
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </div>

      <div>
        <p>Room</p>

        <p>La Garrigue</p>
      </div>
    </div>
  );
}

export default Right;
