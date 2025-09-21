"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaFont, FaRandom } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { RiTextSpacing } from "react-icons/ri";
import { TbLetterCaseToggle } from "react-icons/tb";

export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const [converted, setConverted] = useState("");
  const [copied, setCopied] = useState(false);

  const cases = {
    UPPERCASE: (txt) => txt.toUpperCase(),
    lowercase: (txt) => txt.toLowerCase(),
    Capitalized: (txt) => txt.replace(/\b\w/g, (c) => c.toUpperCase()),
    "Sentence Case": (txt) =>
      txt.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()),
    "Title Case": (txt) => {
      const smallWords =
        /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v\.?|vs\.?|via)$/i;
      return txt
        .split(/\s+/)
        .map((w, i, arr) =>
          i === 0 || i === arr.length - 1 || !smallWords.test(w)
            ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
            : w.toLowerCase()
        )
        .join(" ");
    },
    "Toggle Case": (txt) =>
      [...txt]
        .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join(""),
    Alternating: (txt) =>
      [...txt]
        .map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase()))
        .join(""),
    "Inverse Case": (txt) =>
      [...txt]
        .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join(""),
    "Reverse Text": (txt) => [...txt].reverse().join(""),
    "Remove Spaces": (txt) => txt.replace(/\s+/g, " ").trim(),
    "Remove Punctuation": (txt) =>
      txt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
    "Small Caps": (txt) =>
      txt
        .toLowerCase()
        .replace(/[a-z]/g, (c) =>
          String.fromCharCode(c.charCodeAt(0) + 0x1d00)
        ),
    "Leet Speak": (txt) =>
      txt
        .replace(/a/gi, "4")
        .replace(/e/gi, "3")
        .replace(/i/gi, "1")
        .replace(/o/gi, "0")
        .replace(/s/gi, "5"),
    "Remove Numbers": (txt) => txt.replace(/[0-9]/g, ""),
    "Reverse Words": (txt) => txt.split(" ").reverse().join(" "),
    "Cap Each Word": (txt) => txt.replace(/\b\w/g, (c) => c.toUpperCase()),
    "Double Spaces": (txt) => txt.split(" ").join("  "),
    "Base64 Encode": (txt) => btoa(txt),
    "Base64 Decode": (txt) => {
      try {
        return atob(txt);
      } catch {
        return "Invalid Base64";
      }
    },
    ROT13: (txt) =>
      txt.replace(/[A-Za-z]/g, (c) =>
        String.fromCharCode(
          (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        )
      ),
  };

  const buttons = [
    {
      label: "UPPERCASE",
      icon: <FaFont />,
      color: "from-blue-500 to-blue-700",
    },
    {
      label: "lowercase",
      icon: <FaFont />,
      color: "from-green-500 to-green-700",
    },
    {
      label: "Capitalized",
      icon: <TbLetterCaseToggle />,
      color: "from-purple-500 to-purple-700",
    },
    {
      label: "Sentence Case",
      icon: <IoMdText />,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      label: "Title Case",
      icon: <RiTextSpacing />,
      color: "from-orange-500 to-orange-700",
    },
    {
      label: "Toggle Case",
      icon: <TbLetterCaseToggle />,
      color: "from-pink-500 to-pink-700",
    },
    {
      label: "Alternating",
      icon: <FaRandom />,
      color: "from-teal-500 to-teal-700",
    },
    {
      label: "Inverse Case",
      icon: <FaRandom />,
      color: "from-red-500 to-red-700",
    },
    {
      label: "Reverse Text",
      icon: <FaRandom />,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      label: "Remove Spaces",
      icon: <FaRandom />,
      color: "from-gray-500 to-gray-700",
    },
    {
      label: "Remove Punctuation",
      icon: <FaRandom />,
      color: "from-pink-600 to-pink-800",
    },
    {
      label: "Small Caps",
      icon: <FaRandom />,
      color: "from-cyan-500 to-cyan-700",
    },
    {
      label: "Leet Speak",
      icon: <FaRandom />,
      color: "from-lime-500 to-lime-700",
    },
    {
      label: "Remove Numbers",
      icon: <FaRandom />,
      color: "from-orange-400 to-orange-600",
    },
    {
      label: "Reverse Words",
      icon: <FaRandom />,
      color: "from-purple-400 to-purple-600",
    },
    {
      label: "Cap Each Word",
      icon: <FaRandom />,
      color: "from-blue-400 to-blue-600",
    },
    {
      label: "Double Spaces",
      icon: <FaRandom />,
      color: "from-teal-400 to-teal-600",
    },
    {
      label: "Base64 Encode",
      icon: <FaRandom />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      label: "Base64 Decode",
      icon: <FaRandom />,
      color: "from-red-400 to-red-600",
    },
    {
      label: "ROT13",
      icon: <FaRandom />,
      color: "from-green-400 to-green-600",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(converted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Input */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-lg font-medium">{`Input Text`}</label>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setText("");
              setConverted("");
            }}
            className="px-3 py-1 text-sm bg-muted rounded-md cursor-pointer"
          >
            Clear
          </motion.button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          rows={5}
          className="w-full p-4 border rounded-lg bg-muted text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p className="text-sm mt-2">
          Characters: {text?.length} | Words:{" "}
          {text?.split(/\s+/).filter(Boolean).length}
        </p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6"
      >
        {buttons?.map((b) => (
          <motion.button
            key={b?.label}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setConverted(cases[b?.label](text))}
            className={`flex items-center justify-center px-3 py-2 rounded-lg text-white bg-gradient-to-r ${b?.color} shadow-md cursor-pointer`}
          >
            {b?.icon}{" "}
            <span className="text-xs md:text-sm ml-1">{b?.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Output */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="flex justify-between items-center mb-2">
          <label className="text-lg font-medium">Converted Text</label>
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-sm text-green-600"
              >
                Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="relative">
          <textarea
            value={converted}
            readOnly
            rows={5}
            placeholder="Converted text appears here..."
            className="w-full p-4 border rounded-lg bg-muted text-foreground resize-none focus:!outline-none focus:ring-2 focus:ring-primary"
          />
          {converted && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              className="absolute top-3 right-3 p-2 bg-primary text-foreground rounded-full shadow-md cursor-pointer"
            >
              <FaCopy />
            </motion.button>
          )}
        </div>
      </motion.div>
    </>
  );
}
