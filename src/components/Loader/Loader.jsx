"use client";

import { motion } from "framer-motion";

const variants = {
  pulse: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const dotClasses = "w-5 h-5 rounded-[50%] bg-foreground will-change-transform";

function Loader() {
  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="flex items-center justify-center gap-5 min-h-screen"
    >
      <motion.div className={dotClasses} variants={variants} />
      <motion.div className={dotClasses} variants={variants} />
      <motion.div className={dotClasses} variants={variants} />
    </motion.div>
  );
}

export default Loader;
