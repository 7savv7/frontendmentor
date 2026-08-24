import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  setCart: Dispatch<SetStateAction<number>>;
}

function Info({ setCart }: Props) {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="flex flex-col gap-5 p-5 lg:w-1/2 lg:justify-center">
      <p className="font-bold uppercase text-dgblue tracking-widest">
        Sneaker Company
      </p>

      <h1 className="font-bold text-[2em] xl:text-[3em]">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-dgblue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex items-center justify-between lg:flex-col lg:items-start">
        <div className="flex items-center gap-4">
          <p className="font-bold text-[2em]">$125.00</p>

          <div className="bg-black rounded-sm px-2  px-1 text-white font-bold">
            <p>50%</p>
          </div>
        </div>

        <p className="line-through text-dgblue font-bold text-[1.2em]">
          $250.00
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex w-full justify-between items-centers p-4 rounded-lg bg-lgblue lg:w-[35%]">
          <button
            onClick={() => setQuantity((prev) => (prev <= 0 ? 0 : prev - 1))}
            type="button"
            className="cursor-pointer"
          >
            <img src="images/icon-minus.svg" alt="minus" />
          </button>

          <p className="font-bold text-[1.2em]">{quantity}</p>

          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            type="button"
            className="cursor-pointer"
          >
            <img src="images/icon-plus.svg" alt="plus" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setCart((prev) => prev + quantity);
            setQuantity(0);
          }}
          className="cursor-pointer flex items-center justify-center gap-4 bg-orange rounded-lg p-4 w-full 
          shadow-xl shadow-orange/25 lg:flex-1 lg:shadow-none"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="black"
              fillRule="nonzero"
            />
          </svg>
          <p className="font-bold text-[1.2em]">Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default Info;
