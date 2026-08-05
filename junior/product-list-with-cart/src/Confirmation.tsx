import { createPortal } from "react-dom";
import type { CartItem } from "./App";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}

function Confirmation({ cart, setCart, setConfirm }: Props) {
  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );
  const reset = () => {
    setConfirm(false);
    setCart([]);
  };

  return createPortal(
    <div className="flex justify-center items-center p-5 bg-[hsl(0,0%,0%,0.5)] fixed top-0 left-0 w-full h-full">
      <div className="bg-white w-full max-w-140 p-8 rounded-xl">
        <img src="images/icon-order-confirmed.svg" alt="confirmation" />

        <h2 className="font-bold text-3xl mt-4">Order Confirmed</h2>

        <p className="mt-2 text-rose500">We hope you enjoy your food!</p>

        <div className="bg-rose100 rounded-lg p-5 mt-6">
          <div className="h-40 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {cart.map((item, index) => (
              <div
                key={item.name}
                className={`flex gap-2 ${index === 0 ? "pt-0" : "pt-5"} pb-5 border-b border-rose300/20`}
              >
                <img
                  className="rounded-md w-12 h-12"
                  src={item.image.thumbnail}
                  alt={`${item.name}-thumbnail`}
                />

                <div className="flex justify-between items-center gap-2 flex-1">
                  <div className="flex flex-col justify-between h-full">
                    <p className="font-semibold font-rose500">{item.name}</p>

                    <div className="flex gap-4">
                      <p className="text-r font-semibold">{item.quantity}x</p>
                      <p className="text-rose500">@ ${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 pt-5">
            <p className="text-[14px] font-semibold text-rose500">
              Order Total
            </p>
            <p className="font-bold text-xl">${totalCost.toFixed(2)}</p>
          </div>
        </div>

        <button
          className="cursor-pointer w-full bg-r rounded-full p-2 text-white mt-6 hover:bg-[hsl(14,86%,32%)]"
          onClick={reset}
        >
          Start New Order
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default Confirmation;
