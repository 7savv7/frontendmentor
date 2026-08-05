import { createPortal } from "react-dom";
import type { CartItem } from "./App";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}

function Confirmation({ cart, setCart, setConfirm }: Props) {
  return createPortal(
    <div className="bg-[hsl(0,0%,0%,0.5)] fixed top-0 left-0 w-full h-full">
      {cart.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>,
    document.body,
  );
}

export default Confirmation;
