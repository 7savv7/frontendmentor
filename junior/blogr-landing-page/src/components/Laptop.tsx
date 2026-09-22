function Laptop() {
  return (
    <div className="flex flex-col items-center gap-5 text-center p-5">
      <picture className="lg:w-1/2 lg:relative lg:-right-70">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/illustration-laptop-desktop.svg"
        />
        <img src="/images/illustration-laptop-mobile.svg" alt="laptop" />
      </picture>

      <div className="flex flex-col items-center gap-5">
        <div>
          <h2 className="text-[1.4em] font-[600] text-blue900">Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>

        <div>
          <h2 className="text-[1.4em] font-[600] text-blue900">Powerful tooling</h2>
          <p>
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
