import type { ReactNode } from "react";
import { useTheme } from "./ThemeContext";

interface Props {
  children: ReactNode;
}

function Background({ children }: Props) {
  const [theme] = useTheme();

  return (
    <div className="relative bg-gray50 dark:bg-navy950 min-h-svh md:min-h-screen">
      <picture key={theme} className="absolute top-0 left-0 w-full">
        <source
          media="(min-width: 1024px)"
          srcSet={
            theme === "dark"
              ? "/images/bg-desktop-dark.jpg"
              : "/images/bg-desktop-light.jpg"
          }
        />
        <img
          className="object-cover w-full"
          src={
            theme === "dark"
              ? "/images/bg-mobile-dark.jpg"
              : "/images/bg-mobile-light.jpg"
          }
          alt={theme === "dark" ? "bg-dark" : "bg-light"}
        />
      </picture>

      <div className="relative z-1 flex justify-center p-5 pt-20">
        {children}
      </div>
    </div>
  );
}

export default Background;
