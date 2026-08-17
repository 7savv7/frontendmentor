import Article from "./Article";

function Articles() {
  const articles = [
    {
      image: "/images/image-currency.jpg",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: `The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …`,
    },
    {
      image: "/images/image-restaurant.jpg",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: ` Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`,
    },
    {
      image: "/images/image-plane.jpg",
      author: "By Wilson Hutton",
      title: "Take your Digitalbank card wherever you go",
      text: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …`,
    },
    {
      image: "/images/image-confetti.jpg",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...`,
    },
  ];

  return (
    <section className="p-10 bg-gray50 md:px-5 lg:py-20 lg:px-35 xl:px-50">
      <h2 className="text-center mb-12 text-[2rem] text-blue950 md:text-left">
        Latest Articles
      </h2>

      <div className="flex flex-col gap-5 md:flex-row">
        {articles.map((article) => (
          <Article
            key={article.title}
            image={article.image}
            author={article.author}
            title={article.title}
            text={article.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Articles;
