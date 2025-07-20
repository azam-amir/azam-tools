"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Logo from "../../public/images/logo.png";
import { allTools, categories, featuredTools } from "@/utils/mock";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredTools = useMemo(() => {
    return allTools?.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  if (!mounted) return null;
  return (
    <main className="min-h-screen bg-background text-foreground px-10">
      <section className="flex items-center justify-center">
        {/* Hero Section */}
        <div className="max-w-4xl text-center py-20">
          {/* Logo or Icon */}
          <div className="mx-auto mb-6">
            {theme === "light" && (
              <Image
                src={Logo}
                alt="AzamTools Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            )}
            {theme === "dark" && (
              <Image
                src={Logo}
                alt="AzamTools Logo"
                width={100}
                height={100}
                className="mx-auto invert"
              />
            )}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
            AzamTools – All-in-One Online Tools Hub
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-sans">
            Fast, free & useful tools – all in one place.
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <Link
              href="#tools"
              className="inline-block px-6 py-3 rounded-2xl bg-foreground text-background font-medium text-lg hover:opacity-90 transition duration-200"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Categories Section */}
      <section id="tools" className="bg-background text-foreground py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Explore Our Tools
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-sans">
            Choose a category to get started
          </p>

          {/* Grid Layout */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categories?.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="bg-muted hover:bg-muted/70 border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all shadow-sm hover:shadow-md"
              >
                <div className="mb-3">{cat.icon}</div>
                <h3 className="text-lg font-semibold font-sans">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="bg-background text-foreground py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Top Featured Tools
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-sans">
            Most-used and trending tools at your fingertips
          </p>

          {/* Grid Layout */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {featuredTools?.map((tool) => (
              <div
                key={tool.name}
                className="bg-muted border border-border rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold font-sans mb-2">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <a
                  href={tool.href}
                  className="inline-block px-4 py-2 text-sm font-medium rounded-md bg-foreground text-background hover:opacity-90 transition"
                >
                  Use Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AzamTools Section */}
      <section className="bg-background text-foreground py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Why AzamTools?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-sans">
            Here's why thousands trust our tools
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-semibold text-lg">100% Free Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Use all tools without any cost, forever.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold text-lg">Fast & Lightweight</h3>
                <p className="text-muted-foreground text-sm">
                  Built for speed – no lag, no loading.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🌐</span>
              <div>
                <h3 className="font-semibold text-lg">Cross-Device Support</h3>
                <p className="text-muted-foreground text-sm">
                  Fully responsive, works on all screen sizes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold text-lg">Privacy-respecting</h3>
                <p className="text-muted-foreground text-sm">
                  No data collection – your info stays with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Explore Tools Section */}
      <section className="bg-background text-foreground py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
            Search & Explore Tools
          </h2>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Find a tool..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 mb-6 border border-border rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition"
          />

          {/* Filtered Tool List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTools?.length > 0 ? (
              filteredTools?.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="block p-4 bg-muted border border-border rounded-lg text-left hover:shadow-sm transition"
                >
                  <h3 className="font-semibold text-lg">{tool.name}</h3>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground">No tools found.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
