interface Props {
  title: string;
  desktop: string;
  mobile: string;
}

function Card({ title, desktop, mobile }: Props) {
  return (
    <div className="cursor-pointer group relative w-full">
      <p
        className="absolute z-10 bottom-2 left-2 md:bottom-5 md:left-5 text-white uppercase 
        font-[Josefin_Sans] font-[300] text-[1.8rem] md:text-[2rem] w-45 group-hover:text-black transition-all"
      >
        {title}
      </p>

      <div className="absolute top-0 left-0 w-full h-full bg-black/20 group-hover:bg-white/80 transition-all" />

      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />

        <img className="w-full" src={mobile} alt={title} />
      </picture>
    </div>
  );
}

export default Card;
