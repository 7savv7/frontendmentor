function Laptop() {
  return (
    <div className="flex flex-col items-center gap-10 text-center p-10 lg:flex-row lg:py-30">
      <picture className="lg:w-1/2 lg:relative lg:right-50">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/illustration-laptop-desktop.svg"
        />
        <img src="/images/illustration-laptop-mobile.svg" alt="laptop" />
      </picture>

      <div className="flex flex-col items-center gap-10 lg:text-left lg:w-1/2 lg:pr-50">
        <div>
          <h2 className="text-[1.4em] font-[600] text-blue900 lg:text-[1.8em]">Free, open, simple</h2>
          <p className="text-gray600 mt-5">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>

        <div>
          <h2 className="text-[1.4em] font-[600] text-blue900 lg:text-[1.8em]">Powerful tooling</h2>
          <p className="text-gray600 mt-5">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
