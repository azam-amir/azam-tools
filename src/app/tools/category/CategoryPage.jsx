"use client";

import { ROUTES } from "@/utils/constant";
import { categories, tools } from "@/utils/mock";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const ToolCard = ({ tool }) => {
  return (
    <Link
      href={ROUTES.TOOL(tool?.slug)}
      className="block p-5 bg-background border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group h-full"
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg ${tool?.bg} ${tool?.color} flex-shrink-0`}
        >
          {tool?.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {tool?.name}
          </h3>
          <p className="text-muted-foreground mt-1 text-sm line-clamp-2">
            {tool?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function CategoryPage({ category }) {
  const singleCategory = categories?.find((cat) => cat?.slug === category);

  if (!singleCategory) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold">Category not found</h1>
      </main>
    );
  }

  const categoryTools = tools?.filter(
    (tool) =>
      tool?.category?.toLowerCase() === singleCategory?.slug?.toLowerCase()
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-14 mb-10">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          href={ROUTES.TOOLS}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <FiArrowLeft className="text-sm" />
          Back to All Categories
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <div className="flex justify-center mb-4">
          <div
            className={`p-4 rounded-xl ${singleCategory?.bg} ${singleCategory?.color}`}
          >
            {singleCategory?.icon}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">
          {singleCategory?.name} Tools
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-lg">
          Powerful and free {singleCategory?.name.toLowerCase()} tools to boost
          your productivity. No sign-up, no limits — just simple and fast online
          utilities.
        </p>
      </motion.div>

      {/* Tools Grid */}
      {categoryTools?.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categoryTools?.map((tool, index) => (
            <motion.div
              key={tool?.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              transition: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
            }}
            className="text-6xl mb-6"
          >
            {singleCategory?.icon}
          </motion.div>
          <h3 className="text-xl font-medium mb-2">
            No tools in this category yet
          </h3>
          <p className="text-muted-foreground max-w-md">
            We’re working on adding more {singleCategory?.name.toLowerCase()}{" "}
            tools. Check back soon!
          </p>
        </motion.div>
      )}

      {/* SEO / Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-20 bg-muted rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-4">
          Why Use Our {singleCategory?.name} Tools?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Completely free, no hidden costs</li>
          <li>No registration or sign-up required</li>
          <li>Fast, reliable, and secure processing</li>
          <li>Works directly in your browser</li>
          <li>Optimized for all devices</li>
        </ul>
      </motion.section>
    </main>
  );
}
