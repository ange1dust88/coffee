"use client";

import { marqueeItems } from "@/app/data/marqueeItems";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full md:translate-y-0 -translate-y-10 overflow-hidden bg-primary border-y border-secondary py-2">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "linear",
        }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-2 text-hero whitespace-nowrap font-semibold"
          >
            <span className="mr-2">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
