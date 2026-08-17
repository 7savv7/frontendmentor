function Intro() {
  return (
    <section className="relative bg-gray50 flex flex-col md:flex-row-reverse">
      <div className="relative md:bg-[url(/images/bg-intro-desktop.svg)] md:bg-[0px_-240px] md:bg-no-repeat">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/images/bg-intro-desktop.svg"
          />
          <img
            className="w-full object-cover md:invisible md:h-full"
            src="/images/bg-intro-mobile.svg"
            alt="bg-intro"
          />
        </picture>

        <img
          src="/images/image-mockups.png"
          alt="mockups"
          className="absolute top-[-125px] right-0 w-full md:right-[-150px] md:top-[-200px]"
        />
      </div>

      <div
        className="relative z-10 p-5 flex flex-col items-center text-center gap-4 -mt-[60px] 
      md:mt-0 md:text-left md:items-start md:justify-center md:pl-35 xl:pl-50"
      >
        <h1 className="font-medium text-[2rem] text-blue950 md:max-w-[60%]">
          Next generation digital banking
        </h1>

        <p className="text-gray600 text-[0.8rem] md:max-w-[60%] md:leading-[1.5rem]">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button
          type="button"
          className="cursor-pointer text-white text-[16px] font-semibold rounded-full px-8 py-3 
          bg-linear-to-tr from-cyan400 to-green500 hover:opacity-60"
        >
          Request Invite
        </button>
      </div>
    </section>
  );
}

export default Intro;
