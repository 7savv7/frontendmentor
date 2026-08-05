import { type Dispatch, type SetStateAction } from "react";
import type { CartItem, Des } from "./App";

interface Props {
  dessert: Des;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

function Dessert({ dessert, cart, setCart }: Props) {
  const inCart = cart?.find((des) => des.name === dessert.name);

  const addToCart = () => {
    setCart((prev) => {
      return [...prev, { ...dessert, quantity: 1 }];
    });
  };

  const decreaseQuantity = () => {
    setCart((prev) =>
      inCart?.quantity === 1
        ? prev.filter((des) => des.name !== dessert.name)
        : prev.map((des) =>
            des.name === dessert.name && des.quantity > 1
              ? { ...des, quantity: des.quantity - 1 }
              : des,
          ),
    );
  };

  const increaseQuantity = () => {
    setCart((prev) =>
      prev.map((des) =>
        des.name === dessert.name
          ? { ...des, quantity: des.quantity + 1 }
          : des,
      ),
    );
  };

  return (
    <div className="flex flex-col w-fit">
      <div className="relative flex flex-col items-center mb-6">
        <img
          className={`rounded-2xl outline-3 ${inCart ? "outline-r" : "outline-transparent"}`}
          src={dessert.image.mobile}
          alt={`${dessert.name}-image`}
        />

        <div className="absolute top-[calc(100%-19px)] h-10 w-40">
          {inCart ? (
            <div className="flex gap-8 justify-between items-center h-full w-full rounded-4xl border border-transparent px-4 py-2 bg-r">
              <button
                onClick={decreaseQuantity}
                className="group cursor-pointer border border-white rounded-full p-1 py-2 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    className="group-hover:fill-r"
                    fill="#fff"
                    d="M0 .375h10v1.25H0V.375Z"
                  />
                </svg>
              </button>

              <p className="text-white">{inCart?.quantity}</p>

              <button
                onClick={increaseQuantity}
                className="group cursor-pointer border border-white rounded-full p-1 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    className="group-hover:fill-r"
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="group flex cursor-pointer gap-2 items-center h-full w-full rounded-4xl border border-rose500 px-4 py-2 bg-white hover:border-r"
            >
              <img
                src="images/icon-add-to-cart.svg"
                alt={`${dessert.name}-add-to-cart`}
              />
              <p className="font-semibold text-rose900 group-hover:text-r">
                Add to Cart
              </p>
            </button>
          )}
        </div>
      </div>

      <div>
        <p className="text-rose400">{dessert.category}</p>
        <p className="font-semibold text-rose900">{dessert.name}</p>
        <p className="font-semibold text-r">${dessert.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dessert;
