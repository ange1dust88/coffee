"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const linksLeft = ["Menu", "Locations"];
const linksRight = ["About Us", "News"];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-8 left-0 w-full flex justify-center z-50">
      <div
        className={`w-full max-w-lg transition duration-400 h-16 px-8 rounded-full flex items-center justify-between ${scrolled ? "bg-header-scroll " : "bg-hero"}`}
      >
        <nav>
          <ul className="flex gap-6  font-medium">
            {linksLeft.map((item) => (
              <li
                key={item}
                className="cursor-pointer bg-transparent rounded-full px-2 py-1 transition duration-200 text-primary hover:bg-primary hover:text-hero "
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/"
          className="bg-primary rounded-[50%] h-12 w-12 flex justify-center items-center"
        >
          <Image
            src="/logo-semibold.png"
            alt="Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav>
          <ul className="flex gap-6 font-medium">
            {linksRight.map((item) => (
              <li
                key={item}
                className="cursor-pointer bg-transparent rounded-full px-2 py-1 transition duration-200 text-primary hover:bg-primary hover:text-hero "
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
