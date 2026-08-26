interface Props {
  time: number;
  title: string;
}

function Card({ time, title }: Props) {
  return (
    <div>
      <p className="uppercase">{title}</p>
    </div>
  );
}

export default Card;
