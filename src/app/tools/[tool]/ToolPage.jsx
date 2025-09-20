"use client";

import { animations, ROUTES, toolComponents } from "@/utils/constant";
import { tools } from "@/utils/mock";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ToolPage({ tool }) {
  const singleTool = tools?.find((t) => t?.slug === tool);

  if (!singleTool) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-500">Tool not found</h1>
        <p className="text-muted-foreground mt-2">
          Please check the URL or go back to tools directory.
        </p>
      </main>
    );
  }

  const ToolComponent = toolComponents[singleTool?.component];

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">{singleTool?.name}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {singleTool?.description ||
            `Use ${singleTool?.name} directly in your browser for free.`}
        </p>
      </motion.div>

      {/* Tool UI Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="border rounded-2xl p-8 shadow-md bg-muted/40 dark:bg-muted/20"
      >
        {ToolComponent ? (
          <ToolComponent />
        ) : (
          <p className="text-center text-muted-foreground">
            {singleTool?.name} functionality coming soon...
          </p>
        )}
      </motion.div>

      {/* SEO Friendly Extra Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold mb-4">
          About {singleTool?.name}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {singleTool?.name} is a free online tool by AzamTools. You can use it
          without installing anything, directly in your browser. Our tools are
          fast, secure, and user-friendly.
        </p>
      </motion.section>

      {/* Related Tools */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Explore More Tools</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools
            ?.filter((t) => t?.slug !== singleTool?.slug)
            ?.slice(0, 3)
            ?.map((t) => (
              <motion.div
                key={t?.slug}
                variants={animations.item}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={ROUTES.TOOL(t?.slug)}
                  className="block p-4 bg-muted border border-border rounded-lg text-left hover:shadow-md transition hover:bg-muted/70 group relative overflow-hidden"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors relative z-10">
                    {t?.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 relative z-10">
                    {t?.description}
                  </p>
                </Link>
              </motion.div>
            ))}
        </div>
      </motion.section>
    </>
  );
}
