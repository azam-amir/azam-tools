"use client";

import { CategoryCard } from "@/components/Cards/CategoryCard";
import { ToolCard } from "@/components/cards/ToolCard";
import { animations } from "@/utils/constant";
import { categories, tools } from "@/utils/mock";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const filteredTools = useMemo(() => {
    return tools?.filter((tool) =>
      tool?.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, tools]);

  if (!mounted) return null;

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-foreground mb-10">
      {/* Title with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8,
        }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover All Tools & Categories
        </motion.h1>
        <motion.div
          className="h-1 bg-gradient-to-r from-primary/30 to-secondary/30 mx-auto max-w-xs"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>

      {/* Search with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        whileHover={{ y: -2 }}
        className="relative max-w-xl mx-auto mb-12"
      >
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm hover:shadow-md"
        />
      </motion.div>

      {/* Categories Grid with enhanced animations */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Tool Categories</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>

        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {categories?.map((cat) => (
            <CategoryCard category={cat} key={cat?.name} />
          ))}
        </motion.div>
      </section>

      {/* Tools Grid with enhanced animations */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          <span className="relative inline-block">
            <span className="relative z-10">All Tools</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-secondary/20 -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>

        {filteredTools?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="text-6xl mb-4"
            >
              🔍
            </motion.div>
            <h3 className="text-xl font-medium mb-2">No tools found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={animations.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {filteredTools?.map((tool) => (
              <ToolCard tool={tool} key={tool?.name} />
            ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}
