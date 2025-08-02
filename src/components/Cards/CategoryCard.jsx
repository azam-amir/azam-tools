"use client";

import { animations, ROUTES } from "@/utils/constant";
import { motion } from "framer-motion";
import Link from "next/link";

export const CategoryCard = ({ category }) => (
  <motion.div variants={animations.item} whileHover={animations.cardHover}>
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
