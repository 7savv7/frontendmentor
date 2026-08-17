interface Props {
  image: string;
  title: string;
  text: string;
}

function Pro({ image, title, text }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 flex-1 md:items-start">
      <img className="rounded-full mb-5" src={image} />

      <h3 className="text-[1.8rem] text-blue950">{title}</h3>

      <p className="text-gray600 ">{text}</p>
    </div>
  );
}

export default Pro;
