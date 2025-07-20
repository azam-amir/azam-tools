"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Logo from "../../public/images/logo.png";
import { allTools, categories, featuredTools } from "@/utils/mock";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiArrowRight,
  FiCheck,
  FiZap,
  FiGlobe,
  FiLock,
} from "react-icons/fi";
import Head from "next/head";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardHover = {
  scale: 1.03,
  transition: { duration: 0.3 },
};

export default function Home() {
  const [search, setSearch] = useState("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredTools = useMemo(() => {
    return allTools?.filter((item) => {
      const matchesSearch = [item?.name]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [search, allTools]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Head>
        <title>AzamTools – Free Online Tools Hub</title>
        <meta
          name="description"
          content="Free and fast online tools – PDF, image, text, and developer tools. No sign-up, no cost."
        />
        <meta
          name="keywords"
          content="online tools, free tools, pdf tools, image to pdf, image compressor, QR generator, text converter, JSON formatter"
        />
        <meta name="author" content="Muhammad Azam Raza" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="AzamTools – All-in-One Tools Hub" />
        <meta
          property="og:description"
          content="Use free online tools without any cost. Built for speed and privacy."
        />
        <meta
          property="og:image"
          content="https://azamtools.com/preview-image.png"
        />
        <meta property="og:url" content="https://azamtools.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mx-auto mb-6"
          >
            <Image
              src={Logo}
              alt="AzamTools Logo"
              width={100}
              height={100}
              className={`mx-auto ${resolvedTheme === "dark" ? "invert" : ""}`}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-medium text-lg hover:opacity-90 transition duration-200"
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
            // viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-sans mb-4"
          >
            Explore Our Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-lg font-sans"
          >
            Choose a category to get started
          </motion.p>

          {/* Grid Layout */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {categories?.map((cat) => (
              <motion.div key={cat.name} variants={item}>
                <Link
                  href="#tools"
                  className="bg-muted hover:bg-muted/70 border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all shadow-sm hover:shadow-md group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-3 text-3xl text-primary group-hover:text-secondary transition-colors"
                  >
                    {cat.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold font-sans">
                    {cat.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {cat.description}
                  </p>
                </Link>
              </motion.div>
            ))}
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
            // viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-sans mb-4"
          >
            Top Featured Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-lg font-sans"
          >
            Most-used and trending tools at your fingertips
          </motion.p>

          {/* Grid Layout */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {featuredTools?.map((tool) => (
              <motion.div
                key={tool.name}
                variants={item}
                whileHover={cardHover}
                className="bg-muted border border-border rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 text-primary">{tool.icon}</div>
                  <h3 className="text-xl font-semibold font-sans mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <a
                    href="#feature-tools"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:opacity-90 transition group"
                  >
                    Use Now
                    <FiArrowRight className="mt-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
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
            // viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-sans mb-4"
          >
            Why AzamTools?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-lg font-sans"
          >
            Here's why thousands trust our tools
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          >
            <motion.div
              variants={item}
              className="flex items-start gap-4 p-4 bg-muted rounded-lg"
            >
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                <FiCheck className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">100% Free Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Use all tools without any cost, forever.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start gap-4 p-4 bg-muted rounded-lg"
            >
              <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                <FiZap className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fast & Lightweight</h3>
                <p className="text-muted-foreground text-sm">
                  Built for speed – no lag, no loading.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start gap-4 p-4 bg-muted rounded-lg"
            >
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                <FiGlobe className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cross-Device Support</h3>
                <p className="text-muted-foreground text-sm">
                  Fully responsive, works on all screen sizes.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start gap-4 p-4 bg-muted rounded-lg"
            >
              <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                <FiLock className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Privacy-respecting</h3>
                <p className="text-muted-foreground text-sm">
                  No data collection – your info stays with you.
                </p>
              </div>
            </motion.div>
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
            // viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-sans mb-6"
          >
            Search & Explore Tools
          </motion.h2>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // viewport={{ once: true }}
            className="relative mb-6"
          >
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Find a tool..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </motion.div>

          {/* Filtered Tool List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            animate="show"
            // viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {filteredTools?.length > 0 ? (
              filteredTools?.map((tool) => (
                <motion.div key={tool.name} variants={item}>
                  <Link
                    href="#explore-tools"
                    className="block p-4 bg-muted border border-border rounded-lg text-left hover:shadow-sm transition hover:bg-muted/70 group"
                  >
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {tool.description}
                    </p>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground col-span-full"
              >
                No tools found matching your search.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-sec"
        className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
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
