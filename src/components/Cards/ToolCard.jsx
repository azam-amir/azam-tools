"use client";

import { ROUTES } from "@/utils/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiStar, FiTrendingUp } from "react-icons/fi";

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
  y: -5,
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const ToolCard = ({ tool }) => (
  <motion.div
    variants={item}
    whileHover={cardHover}
    className="p-6 bg-muted border border-border rounded-xl shadow-sm hover:shadow-md transition group relative overflow-hidden"
  >
    {tool?.isNew && (
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 right-4 bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded-full"
      >
        New
      </motion.span>
    )}

    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <div className="text-3xl mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
        {tool?.icon}
      </div>
      <h3 className="text-lg font-semibold mb-1">{tool?.name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{tool?.description}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FiStar className="text-yellow-500" />
          </motion.div>
          <span>{tool?.rating || "4.5"}</span>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FiTrendingUp className="ml-2 text-blue-500" />
          </motion.div>
          <span>{tool?.usage || "100+"}</span>
        </div>
        <Link
          href={ROUTES.TOOL(tool?.slug)}
          className="inline-flex items-center gap-2 text-sm font-medium group-hover:underline"
        >
          Use Now
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <FiArrowRight className="mt-0.5" />
          </motion.span>
        </Link>
      </div>
    </div>
  </motion.div>
);
