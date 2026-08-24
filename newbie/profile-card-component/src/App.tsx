function App() {
  return (
    <div
      className="min-h-svh bg-[url(/images/bg-pattern-top.svg),url(/images/bg-pattern-bottom.svg)] 
      flex justify-center items-center p-5 bg-no-repeat bg-[position:100%_200%,-40%_-50%] 
      md:bg-[position:-50%_200%,140%_-140%] md:min-h-screen"
    >
      <div className="w-full max-w-90 overflow-hidden rounded-xl">
        <div className="flex justify-center pt-12 bg-[url(/images/bg-pattern-card.svg)]">
          <img
            className="relative top-[48px] w-[96px] h-[96px] border-5 border-white rounded-full"
            src="/images/image-victor.jpg"
            alt="victor"
          />
        </div>

        <div className="bg-white pt-[50px] text-center">
          <div className="flex flex-col justify-center items-center p-6 ">
            <div className="flex items-center gap-2 justofy-center">
              <p className="font-bold">Victor Crest</p>

              <p className="text-gray500 font-[400]">26</p>
            </div>

            <p className="text-gray500">London</p>
          </div>

          <div className="border-t border-gray100 flex justify-around items-center p-5">
            <div>
              <p className="font-bold">80K</p>
              <p className="text-gray500 text-[0.8em]">Followers</p>
            </div>

            <div>
              <p className="font-bold">803K</p>
              <p className="text-gray500 text-[0.8em]">Likes</p>
            </div>

            <div>
              <p className="font-bold">1.4K</p>
              <p className="text-gray500 text-[0.8em]">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
