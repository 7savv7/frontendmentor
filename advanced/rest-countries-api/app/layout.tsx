import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Script from "next/script";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | REST Countries API",
  description: "REST Countries API with color theme switcher",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunitoSans.variable} h-full antialiased`}>
      <Script
        dangerouslySetInnerHTML={{
          __html: `const stored = localStorage.getItem("theme");
          const dark = stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
          document.documentElement.classList.toggle("dark", dark);`,
        }}
      />

      <body className="min-h-svh flex flex-col lg:min-h-screen">
        <Header />

        {children}
      </body>
    </html>
  );
}
