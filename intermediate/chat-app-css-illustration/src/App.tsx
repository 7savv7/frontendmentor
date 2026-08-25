function App() {
  return (
    <div className="flex justify-center items-center min-h-svh relative overflow-hidden lg:min-h-screen">
      <div className="absolute -left-30 top-0 h-9/10 w-120 rounded-b-full bg-linear-to-r from-purple500 to-pink500" />

      <div className="relative z-1 flex items-center gap-30 w-6/10">
        <div className="bg-white h-100 w-1/2">

        </div>

        <div className="w-1/2">
          <h1 className="text-purple950 font-[700] text-[2em] mb-4">
            Simple booking
          </h1>

          <p className="text-gray500">
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
