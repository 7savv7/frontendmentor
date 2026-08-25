function App() {
  return (
    <div className="flex justify-center items-center p-5 min-h-svh relative overflow-hidden lg:min-h-screen">
      <div className="absolute -left-60 h-1/2 top-0 lg:-left-30 lg:h-9/10 w-120 rounded-b-full bg-linear-to-r from-purple500 to-pink500" />

      <div className="relative z-1 flex flex-col items-center gap-15 lg:gap-30 lg:flex-row lg:w-8/10 xl:w-6/10">
        <div className="relative bg-white p-2 w-72 rounded-4xl shadow-xl">
          <div className="absolute z-10 left-1/2 -translate-x-1/2 bg-white h-5 rounded-b-2xl w-1/2" />

          <div className="relative w-full h-full bg-gray100 rounded-3xl">
            <div
              className="absolute top-0 left-0 flex items-center justify-between w-full pt-4 px-5 h-18 
              bg-linear-to-tr from-purple500 to-pink500 rounded-t-3xl rounded-b-lg"
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
                  <p className="text-[0.5em] text-purple300">
                    Available to Walk
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[2px]">
                <div className="w-[3px] h-[3px] bg-white rounded-full" />
                <div className="w-[3px] h-[3px] bg-white rounded-full" />
                <div className="w-[3px] h-[3px] bg-white rounded-full" />
              </div>
            </div>

            <div
              className="overflow-hidden flex flex-col gap-5 p-2 pt-20 h-full w-full border-3 text-[0.6em] 
              text-purple600 border-gray300/20 rounded-3xl"
            >
              <div className="flex flex-col gap-2 w-65/100">
                <div className="slide bg-gray300/20 w-9/10 p-2 rounded-xl rounded-bl-md">
                  <p>That sounds great. I’d be happy with that.</p>
                </div>

                <div className="slide slide-2 bg-gray300/20 w-9/10 p-2 rounded-xl rounded-bl-md">
                  <p>Could you send over some pictures of your dog, please?</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 self-end w-65/100 text-gray500">
                <div className="flex items-center gap-2 [&>img]:rounded-xl [&>img]:w-12">
                  <img
                    className="image image-1"
                    src="/images/dog-image-1.jpg"
                    alt="dog-1"
                  />
                  <img
                    className="image image-2"
                    src="/images/dog-image-2.jpg"
                    alt="dog-2"
                  />
                  <img
                    className="image image-3"
                    src="/images/dog-image-3.jpg"
                    alt="dog-3"
                  />
                </div>

                <div className="slide-3 bg-white p-2 rounded-xl rounded-br-md">
                  <p>Here are a few pictures. She’s a happy girl!</p>
                </div>

                <div className="slide-4 bg-white p-2 rounded-xl rounded-br-md">
                  <p>Can you make it?</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-65/100">
                <div className="slide slide-5 bg-gray300/20 w-9/10 p-2 rounded-xl rounded-bl-md">
                  <p>
                    She looks so happy! The time we discussed works. How long
                    shall I take her out for?
                  </p>
                </div>

                <div
                  className="slide slide-6 flex items-center justify-between bg-linear-to-tr 
                  from-purple500 to-pink500 p-2 rounded-xl rounded-bl-md text-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-full p-[6px] rounded-full border border-pink400" />

                    <p>30 minute walk</p>
                  </div>

                  <p className="font-[700]">$29</p>
                </div>

                <div
                  className="slide slide-7 flex items-center justify-between bg-linear-to-tr 
                  from-purple500 to-pink500 p-2 rounded-xl rounded-bl-md text-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-full p-[6px] rounded-full border border-pink400" />

                    <p>1 hour walk</p>
                  </div>

                  <p className="font-[700]">$49</p>
                </div>
              </div>

              <div className="flex w-full bg-white rounded-full p-2">
                <input
                  className="flex-1 text-gray300 outline-none pl-2"
                  type="text"
                  placeholder="Type a message…"
                />

                <button
                  type="button"
                  className="cursor-pointer flex items-center justify-center rounded-full bg-purple950 h-6 w-6"
                >
                  <div className="relative h-full w-full">
                    <div className="absolute left-1/2  top-[6px] rounded-full h-1/3 w-[2px] bg-white -rotate-45" />

                    <div className="absolute left-1/2  bottom-[6px] rounded-full h-1/3 w-[2px] bg-white rotate-45" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left sm:w-1/2">
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

      <div className="absolute -right-60 h-1/2 bottom-0 lg:-right-40 lg:h-9/10 w-120 rounded-t-full bg-purple500/4" />
    </div>
  );
}

export default App;
