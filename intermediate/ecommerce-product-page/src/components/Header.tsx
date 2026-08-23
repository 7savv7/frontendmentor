import { useState } from "react";

function Header() {
  const [side, setSide] = useState<boolean>(false);
  return (
    <header className="flex items-center">
      <div className="flex items-center">
        <img onClick={() => setSide(true)} src="/images/icon-menu.svg" alt="menu" />
        <img src="/images/logo.svg" alt="logo" />

        <nav className={`absolute ${side ? "bg-black/75" : "bg-transparent"} top-0 left-0 h-full w-full`}>
          <ul className={`bg-white h-full overflow-hidden ${side ? "max-w-[60%]" : "max-w-0"} w-[60%] p-6 flex flex-col gap-5 [&>li]:font-bold`}>
            <img
              onClick={() => setSide(false)}
              className="w-[14px] h-[15px] mb-6"
              src="/images/icon-close.svg"
              alt="close"
            />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center">
        <img src="/images/icon-cart.svg" alt="cart" />
        <img src="/images/image-avatar.png" alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
