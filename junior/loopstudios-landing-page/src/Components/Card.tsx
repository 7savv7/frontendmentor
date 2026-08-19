interface Props {
  title: string;
  desktop: string;
  mobile: string;
}

function Card({ title, desktop, mobile }: Props) {
  return (
    <div className="relative w-full">
      <p className="absolute bottom-5 left-5 text-white uppercase font-[Josefin_Sans] font-[300] text-[2rem] w-45">{title}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img className="w-full" src={mobile} alt={title} />
      </picture>
    </div>
  );
}

export default Card;
