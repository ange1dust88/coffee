"use client";

import { useEffect, useState } from "react";
import { menuItems } from "@/app/data/menuData";
import MenuItem from "../ui/menu-item";

const categories = [
  { label: "Coffee", value: "coffee" },
  { label: "Cold Drinks", value: "cold-drinks" },
  { label: "Desserts", value: "desserts" },
];

export default function FullMenu() {
  const [active, setActive] = useState("coffee");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = categories.map((cat) => {
        const el = document.getElementById(cat.value);
        if (!el) return { id: cat.value, top: Infinity };

        return {
          id: cat.value,
          top: Math.abs(el.getBoundingClientRect().top),
        };
      });

      const current = offsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev,
      );

      setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      const el = document.getElementById(cat.value);

                      if (el) {
                        const yOffset = -120;
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;

                        window.scrollTo({
                          top: y,
                          behavior: "smooth",
                        });

                        window.history.pushState(null, "", `#${cat.value}`);
                      }
                    }}
                    className={`calistoga cursor-pointer whitespace-nowrap text-left text-lg md:text-xl transition ${
                      active === cat.value
                        ? "text-hero"
                        : "text-secondary hover:text-hero"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 flex flex-col gap-20">
            {categories.map((cat) => {
              const items = menuItems.filter(
                (item) => item.category === cat.value,
              );

              if (!items.length) return null;

              return (
                <div
                  key={cat.value}
                  id={cat.value}
                  className="border-t border-secondary pt-8 scroll-mt-32"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl calistoga text-hero">
                      {cat.label}
                    </h2>

                    <span className="text-secondary text-sm">
                      {items.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {items.map((item) => (
                      <MenuItem
                        key={item.slug}
                        img={item.image}
                        title={item.title}
                        price={item.price}
                        slug={item.slug}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
