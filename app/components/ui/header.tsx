"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PromoBar from "./promo-bar";

const linksLeft = [
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
];

const linksRight = [
  { label: "About Us", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
];

const allLinks = [...linksLeft, ...linksRight];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [promoOpen, setPromoOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {promoOpen && <PromoBar onClose={() => setPromoOpen(false)} />}
      <header
        className={`fixed left-0 w-full md:px-0 px-6 flex justify-center z-50 transition-all duration-300
  ${promoOpen ? "top-16" : "top-6"}`}
      >
        <div
          className={`w-full max-w-lg transition duration-400 h-16 px-6 rounded-full flex items-center justify-between
          ${scrolled ? "bg-header-scroll shadow-md" : "bg-hero"}`}
        >
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium">
              {linksLeft.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="cursor-pointer rounded-full px-2 py-1 transition duration-200 text-primary hover:bg-primary hover:text-hero"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </nav>

          <Link
            href="/"
            className="group bg-primary rounded-full h-12 w-12 flex items-center justify-center overflow-hidden"
          >
            <span className="relative h-12 w-12 flex justify-center items-center">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-400 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:-translate-y-full">
                <Image
                  src="/logo-semibold.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </span>

              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-400 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:translate-y-0">
                <Image
                  src="/logo-semibold.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </span>
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium">
              {linksRight.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="cursor-pointer rounded-full px-2 py-1 transition duration-200 text-primary hover:bg-primary hover:text-hero"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-primary/20"
          >
            <span
              className={`absolute w-5 h-0.5 bg-primary transition ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute w-5 h-0.5 bg-primary transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-5 h-0.5 bg-primary transition ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
    ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <nav
        className={`fixed ${promoOpen ? "top-36" : "top-26"} px-6 left-0 w-full flex justify-center transition-all duration-300 md:hidden z-50
    ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6 pointer-events-none"}`}
      >
        <div className="w-full max-w-lg bg-hero rounded-2xl p-6 flex flex-col items-center gap-3">
          {allLinks.map((item, i) => (
            <Link
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
              className={`w-full text-center rounded-full cursor-pointer px-4 py-2 text-primary text-lg transition-all duration-200 hover:bg-primary hover:text-hero
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Header;
