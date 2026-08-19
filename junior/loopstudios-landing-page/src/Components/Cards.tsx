import Card from "./Card";

function Cards() {
  const cards = [
    {
      title: "Deep earth",
      desktop: "/images/desktop/image-deep-earth.jpg",
      mobile: "/images/mobile/image-deep-earth.jpg",
    },
    {
      title: "Night arcade",
      desktop: "/images/desktop/image-night-arcade.jpg",
      mobile: "/images/mobile/image-night-arcade.jpg",
    },
    {
      title: "Soccer team VR",
      desktop: "/images/desktop/image-soccer-team.jpg",
      mobile: "/images/mobile/image-soccer-team.jpg",
    },
    {
      title: "The grid",
      desktop: "/images/desktop/image-grid.jpg",
      mobile: "/images/mobile/image-grid.jpg",
    },
    {
      title: "From up above VR",
      desktop: "/images/desktop/image-from-above.jpg",
      mobile: "/images/mobile/image-from-above.jpg",
    },
    {
      title: "Pocket borealis",
      desktop: "/images/desktop/image-pocket-borealis.jpg",
      mobile: "/images/mobile/image-pocket-borealis.jpg",
    },
    {
      title: "The curiosity",
      desktop: "/images/desktop/image-curiosity.jpg",
      mobile: "/images/mobile/image-curiosity.jpg",
    },
    {
      title: "Make it fisheye",
      desktop: "/images/desktop/image-fisheye.jpg",
      mobile: "/images/mobile/image-fisheye.jpg",
    },
  ];

  return (
    <section className="relative">
      <div className="flex items-center justify-center md:justify-between mb-5 md:mb-10">
        <p className="uppercase text-[3rem] text-black font-[Josefin_Sans] font-[300]">
          Our creations
        </p>

        <button
          className="absolute top-[100%] mt-5 border uppercase tracking-widest py-1 px-4 md:static"
          type="button"
        >
          See all
        </button>
      </div>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-4 ">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            desktop={card.desktop}
            mobile={card.mobile}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;
