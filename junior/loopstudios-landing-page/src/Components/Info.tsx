function Info() {
  return (
    <div className="text-center w-full flex flex-col items-center gap-10 md:flex-row md:relative md:text-left">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/desktop/image-interactive.jpg"
        />

        <img src="/images/mobile/image-interactive.jpg" alt="interactive" />
      </picture>

      <div
        className="flex flex-col items-center gap-4 md:absolute md:bottom-0 
      md:right-0 md:items-start md:bg-white md:w-[50%] md:pt-20 md:pl-20"
      >
        <p className="text-[3rem] tracking-wider w-[80%] leading-[3rem] text-black uppercase font-[Josefin_Sans] font-[300]">
          The leader in interactive VR
        </p>

        <p className="w-[90%] text-[1.6rem] text-black/50 md:text-[1rem]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Info;
