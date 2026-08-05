import { useState, type Dispatch, type SetStateAction } from "react";
import type { CartItem } from "./App";
import Confirmation from "./Confirmation";

interface Props {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

function Cart({ cart, setCart }: Props) {
  const [confirm, setConfirm] = useState<boolean>(false);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const removeCartItem = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <div className="w-full min-w-70 h-fit bg-white p-5 rounded-xl lg:w-180">
      <h3 className="self-start text-r font-bold text-[20px]">
        Your Cart ({totalQuantity})
      </h3>

      {totalQuantity > 0 ? (
        <div className="flex flex-col">
          {cart.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-2 border-b border-rose100 py-4"
            >
              <div className="flex flex-col gap-1 text-[14px]">
                <p className="font-semibold">{item.name}</p>

                <div className="flex gap-2">
                  <p className="mr-2 text-r font-semibold">{item.quantity}x</p>
                  <p className="text-rose400">@ ${item.price.toFixed(2)}</p>
                  <p className="text-rose400 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div
                onClick={() => removeCartItem(item.name)}
                className="group cursor-pointer flex rounded-full p-1 border border-rose400 hover:border-rose900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    className="group-hover:fill-rose900"
                    fill="#CAAFA7"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between gap-2 py-6">
            <p className="text-[14px] font-semibold text-rose500">
              Order Total
            </p>

            <p className="font-bold text-2xl text-rose900">
              ${totalCost.toFixed(2)}
            </p>
          </div>

          <div className="flex gap-2 justify-center items-center text-center bg-rose50 p-4 w-full rounded-xl">
            <img src="images/icon-carbon-neutral.svg" alt="carbon-neutral" />
            <p className="text-rose900">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <button
            onClick={() => setConfirm(true)}
            className="cursor-pointer bg-r rounded-full p-3 text-white mt-5 hover:bg-[hsl(14,86%,32%)]"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 my-5">
          <img
            className="w-[50%] h-[50%]"
            src="images/illustration-empty-cart.svg"
            alt="empty-cart"
          />

          <p className="text-rose500 font-semibold text-center text-sm">
            Your added items will appear here
          </p>
        </div>
      )}

      {confirm && (
        <Confirmation cart={cart} setCart={setCart} setConfirm={setConfirm} />
      )}
    </div>
  );
}

export default Cart;
