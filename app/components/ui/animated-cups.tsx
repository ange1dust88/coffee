"use client";

import { motion, Variants } from "framer-motion";

function AnimatedCups() {
  const cupVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 40 },

    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // 👈 FIX
      },
    }),
  };
  return (
    <div className="absolute -bottom-10 left-0 w-full flex justify-center items-end px-4 pointer-events-none">
      <motion.img
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cupVariants}
        src="Plastic_Coffee_Cup_PNG_Clipart_Image.png"
        alt=""
        className="h-[clamp(180px,55vh,560px)] -rotate-12 translate-y-20 md:flex hidden"
      />

      <motion.img
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cupVariants}
        src="Plastic_Coffee_Cup_PNG_Clipart_Image.png"
        alt=""
        className="md:h-[clamp(280px,70vh,620px)] translate-y-15 h-[55vh]"
      />

      <motion.img
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cupVariants}
        src="Plastic_Coffee_Cup_PNG_Clipart_Image.png"
        alt=""
        className="h-[clamp(180px,55vh,560px)] rotate-12 translate-y-20 md:flex hidden"
      />
    </div>
  );
}

export default AnimatedCups;
