interface Props {
  image: string;
  author: string;
  title: string;
  text: string;
}

function Article({ image, author, title, text }: Props) {
  return (
    <article className="w-full flex-1 overflow-hidden md:pb-5 rounded-md bg-white">
      <img className="h-[50%]" src={image} alt={title} />

      <div className="h-[50%] p-10 md:p-5">
        <p className="text-[0.8rem] text-gray600 mb-5">{author}</p>

        <h3 className="cursor-pointer hover:text-green500 text-[1.2rem] mb-2">{title}</h3>

        <p className="text-gray600 md:text-[0.8rem]">{text}</p>
      </div>
    </article>
  );
}

export default Article;
