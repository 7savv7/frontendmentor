function App() {
  return (
    <div className="flex justify-center items-center min-h-svh relative overflow-hidden lg:min-h-screen">
      <div className="absolute -left-30 top-0 h-9/10 w-120 rounded-b-full bg-linear-to-r from-purple500 to-pink500" />

      <div className="relative z-1 flex items-center gap-30 w-6/10">
        <div className="relative bg-white p-2 h-100 w-60 rounded-4xl shadow-xl">
          <div className="absolute z-10 left-1/2 -translate-x-1/2 bg-white h-5 rounded-b-2xl w-1/2" />

          <div className="relative overflow-hidden w-full h-full bg-gray100 rounded-3xl">
            <div
              className="absolute top-0 left-0 flex items-center justify-between w-full pt-4 px-5 h-18 
              bg-linear-to-tr from-purple500 to-pink500 rounded-b-lg"
            >
              <div className="flex items-center gap-2 h-full">
                <div className="h-1/4">
                  <div className="relative left-0 top-[1px] rounded-full h-1/2 w-[2px] bg-white rotate-30" />

                  <div className="relative left-0 bottom-[1px] rounded-full h-1/2 w-[2px] bg-white -rotate-30" />
                </div>

                <img
                  className="w-6 h-6 border-1 border-white rounded-full"
                  src="/images/avatar.jpg"
                  alt="avatar"
                />

                <div className="text-white/90">
                  <p className="text-[0.7em] font-[500]">Samuel Green</p>
                  <p className="text-[0.5em] text-purple300">Available to Walk</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[2px]">
                <div className="w-[3px] h-[3px] bg-white rounded-full" />
                <div className="w-[3px] h-[3px] bg-white rounded-full" />
                <div className="w-[3px] h-[3px] bg-white rounded-full" />
              </div>
            </div>

            <div className="p-2 pt-18 h-full w-full border-3 border-gray300/20">
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="text-purple950 font-[500] text-[2em] mb-4">
            Simple booking
          </h1>

          <p className="text-gray500 leading-[1.8em]">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>

      <div className="absolute -right-40 bottom-0 h-9/10 w-120 rounded-t-full bg-purple500/4" />
    </div>
  );
}

export default App;
