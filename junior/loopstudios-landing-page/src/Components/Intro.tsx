import Header from "./Header";

function Intro() {
  return (
    <section
      className="flex flex-col bg-[url(/images/mobile/image-hero.jpg)] h-[1300px] bg-cover bg-no-repeat p-10 
      md:bg-[url(/images/desktop/image-hero.jpg)] md:gap-30 md:h-[650px] lg:px-30"
    >
      <Header />

      <div className="w-full flex-1 flex items-center">
        <div
          className="uppercase border-3 p-5 sm:p-10 text-white border-white text-[2rem] sm:text-[4rem] 
          leading-[4.8rem] font-[Josefin_Sans] font-[300] 
          xl:w-[50%] md:text-[4rem] md:p-4 md:mb-30"
        >
          <p>Immersive experiences that deliver</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
