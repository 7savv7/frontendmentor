import { useState } from "react";

interface Des {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

function Dessert({ dessert }: { dessert: Des }) {
  const [inCart, setInCart] = useState<boolean>(true);

  return (
    <div>
      <div className="relative flex flex-col items-center">
        <img
          className="rounded-2xl"
          src={dessert.image.mobile}
          alt={`${dessert.name}-image`}
        />

        {inCart ? (
          <button className="flex cursor-pointer gap-2 content-center items-center absolute top-[calc(100%-19px)] h-10 rounded-4xl border px-4 py-2 bg-white">
            <img
              src="images/icon-add-to-cart.svg"
              alt={`${dessert.name}-add-to-cart`}
            />
            <p>Add to Cart</p>
          </button>
        ) : (
          <div></div>
        )}
      </div>

      <div>
        <p>{dessert.category}</p>
        <p>{dessert.name}</p>
        <p>${dessert.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dessert;
