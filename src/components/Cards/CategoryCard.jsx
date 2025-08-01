"use client";

import { ROUTES } from "@/utils/constant";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const cardHover = {
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const CategoryCard = ({ category }) => (
  <motion.div variants={item} whileHover={cardHover}>
    <Link
      href={ROUTES.CATEGORY(category?.slug)}
      className="p-6 bg-muted border border-border rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="mb-3 text-3xl text-primary group-hover:text-secondary transition-colors duration-300">
        {category?.icon}
      </div>
      <h3 className="text-lg font-semibold relative z-10">{category?.name}</h3>
      <p className="text-sm text-muted-foreground mt-2 relative z-10">
        {category?.description}
      </p>
    </Link>
  </motion.div>
);
