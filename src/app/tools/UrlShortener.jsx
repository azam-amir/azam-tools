"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function shortURL(e) {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setShortenedUrl("");

    try {
      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
      );
      const data = await res.text();
      setShortenedUrl(data);
    } catch {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:px-10 md:pb-8 md:pt-3"
    >
      <div className="flex justify-center mb-10">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-foreground">
          <FaLink className="text-2xl text-background" />
        </div>
      </div>

      <form onSubmit={shortURL} className="flex flex-col gap-5">
        <input
          type="url"
          placeholder="Enter long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-4 rounded-xl border border-foreground focus:outline-none focus:ring-2 focus:ring-foreground dark:focus:ring-foreground text-base transition"
        />

        <button
          disabled={loading}
          type="submit"
          className="w-full py-3.5 rounded-xl font-semibold text-lg bg-foreground text-background cursor-pointer"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {/* Output */}
      {shortenedUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-5 rounded-xl bg-white dark:bg-black border border-gray-400 dark:border-gray-600 text-center"
        >
          <p className="text-gray-800 dark:text-gray-200 mb-1 text-sm">
            Shortened URL:
          </p>
          <a
            href={shortenedUrl}
            target="_blank"
            className="text-black dark:text-white font-medium text-lg break-all hover:underline"
          >
            {shortenedUrl}
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
