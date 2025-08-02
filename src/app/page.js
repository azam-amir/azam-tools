"use client";

import { CategoryCard } from "@/components/Cards/CategoryCard";
import { ToolCard } from "@/components/cards/ToolCard";
import { animations, ROUTES } from "@/utils/constant";
import { categories, tools } from "@/utils/mock";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiLock,
  FiSearch,
  FiZap,
} from "react-icons/fi";
import Logo from "../../public/images/logo.png";

export default function Home() {
  const [search, setSearch] = useState("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredTools = useMemo(() => {
    return tools?.filter((item) => {
      const matchesSearch = [item?.name]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [search, tools]);

  if (!mounted) return null;

  return (
    <main>
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center py-20"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 10,
              },
            }}
            className="mx-auto mb-6"
          >
            <Image
              src={Logo}
              alt="AzamTools Logo"
              width={100}
              height={100}
              className={`mx-auto ${resolvedTheme === "dark" ? "invert" : ""}`}
              priority
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-sans leading-tight"
          >
            AzamTools – All-in-One Online Tools Hub
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground font-sans"
          >
            Fast, free & useful tools – all in one place.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <Link
              href="#tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-medium text-lg hover:opacity-90 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Tools
              <FiArrowRight className="mt-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Tools Categories Section */}
      <section
        id="tools"
        className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-sans mb-4"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Explore Our Tools</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-lg font-sans"
          >
            Browse popular tool categories to get started quickly.
          </motion.p>

          {/* Grid Layout */}
          <motion.div
            variants={animations.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {categories?.slice(0, 3).map((cat) => (
              <CategoryCard category={cat} key={cat?.name} />
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              href={ROUTES.TOOLS}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium text-lg hover:opacity-90 transition duration-200 shadow-md hover:shadow-lg"
            >
              View All Tools
              <FiArrowRight className="mt-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section
        id="feature-tools"
        className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold font-sans mb-4"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Top Featured Tools</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-secondary/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-lg font-sans"
          >
            Most-used and trending tools at your fingertips
          </motion.p>

          {/* Grid Layout */}
          <motion.div
            variants={animations.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {tools?.map((tool) => (
              <ToolCard tool={tool} key={tool?.name} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why AzamTools Section */}
      <section className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-sans mb-4"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Why AzamTools?</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-lg font-sans"
          >
            Here's why thousands trust our tools
          </motion.p>

          <motion.div
            variants={animations.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          >
            {[
              {
                icon: <FiCheck className="text-xl" />,
                title: "100% Free Tools",
                description: "Use all tools without any cost, forever.",
                bg: "bg-primary/10",
                color: "text-primary",
              },
              {
                icon: <FiZap className="text-xl" />,
                title: "Fast & Lightweight",
                description: "Built for speed – no lag, no loading.",
                bg: "bg-secondary/10",
                color: "text-secondary",
              },
              {
                icon: <FiGlobe className="text-xl" />,
                title: "Cross-Device Support",
                description: "Fully responsive, works on all screen sizes.",
                bg: "bg-primary/10",
                color: "text-primary",
              },
              {
                icon: <FiLock className="text-xl" />,
                title: "Privacy-respecting",
                description: "No data collection – your info stays with you.",
                bg: "bg-secondary/10",
                color: "text-secondary",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={animations.item}
                className="flex items-start gap-4 p-4 bg-muted rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`p-2 ${feature.bg} rounded-full ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search & Explore Tools Section */}
      <section
        id="explore-tools"
        className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold font-sans mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Search & Explore Tools</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-secondary/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className="relative mb-6"
          >
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Find a tool?..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm hover:shadow-md"
            />
          </motion.div>

          {/* Filtered Tool List */}
          <motion.div
            variants={animations.container}
            initial="hidden"
            whileInView="show"
            animate="show"
            // viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {filteredTools?.length > 0 ? (
              filteredTools?.map((tool) => (
                <motion.div
                  key={tool?.name}
                  variants={animations.item}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    href={ROUTES.TOOL(tool?.slug)}
                    className="block p-4 bg-muted border border-border rounded-lg text-left hover:shadow-md transition hover:bg-muted/70 group relative overflow-hidden"
                  >
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors relative z-10">
                      {tool?.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 relative z-10">
                      {tool?.description}
                    </p>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex flex-col items-center justify-center py-12 col-span-full"
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
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-sec"
        className="bg-background text-foreground pb-15 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who save time with our tools every day.
          </p>
          <Link
            href="#cta-sec"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-lg hover:opacity-90 transition duration-200"
          >
            Get Started Now
            <FiArrowRight className="mt-1" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
