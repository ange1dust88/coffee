"use client";

import { marqueeItems } from "@/app/data/marqueeItems";
import { motion } from "framer-motion";

const Marquee = () => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden bg-primary border-y border-secondary py-2">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-hero font-semibold"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
