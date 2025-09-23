"use client";

import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { FaCopy, FaDownload } from "react-icons/fa";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [qrData, setQrData] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!text) return;
    setLoading(true);
    setTimeout(() => {
      setQrData(text);
      setLoading(false);
      setText("");
    }, 500);
  };

  const handleCopy = async () => {
    const canvas = document.getElementById("qr-code");
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch (err) {
      console.error("Failed to copy QR code image:", err);
    }
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center text-foreground"
      >
        QR Code Generator
      </motion.h2>

      {/* Text Input */}
      <div className="mb-6">
        <textarea
          className="w-full p-4 border rounded-xl shadow-sm bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none transition"
          rows={4}
          placeholder="Enter text to generate QR code..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Generate Button */}
      <div className="text-center mb-6">
        <motion.button
          whileHover={{ scale: text || loading ? 1.05 : 1 }}
          whileTap={{ scale: text || loading ? 0.95 : 1 }}
          className={`px-8 py-2 rounded-xl shadow-md font-semibold transition ${
            text
              ? "bg-foreground text-background cursor-pointer"
              : "bg-foreground/50 text-background cursor-not-allowed"
          }`}
          onClick={handleGenerate}
          disabled={!text}
        >
          {loading ? "Generating..." : "Generate QR Code"}
        </motion.button>
      </div>

      {/* Loading Animation */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center mt-6 p-6 bg-muted rounded-xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-foreground border-t-transparent rounded-full mb-4"
          />
          <p className="text-foreground">Generating QR Code...</p>
        </motion.div>
      )}

      {/* QR Code Display */}
      {qrData && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="p-6 bg-muted rounded-xl shadow-lg border border-border inline-block">
            <QRCodeCanvas
              id="qr-code"
              value={qrData}
              size={256}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-xl shadow hover:opacity-90 transition"
            >
              <FaCopy /> {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-xl shadow hover:opacity-90 transition"
            >
              <FaDownload /> Download
            </button>
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      {!qrData && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-muted rounded-xl"
        >
          <h3 className="font-semibold text-xl mb-4 text-foreground">
            How to use:
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-foreground">
            <li>Enter the text you want to convert into a QR code</li>
            <li>Click the "Generate QR Code" button</li>
            <li>Copy the QR code image or download as PNG</li>
          </ol>
          <p className="mt-4 text-sm text-foreground">
            Note: All processing happens in your browser. Your data is never
            uploaded to any server.
          </p>
        </motion.div>
      )}
    </div>
  );
}
