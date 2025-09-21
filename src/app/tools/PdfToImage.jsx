"use client";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import JSZip from "jszip";
import * as pdfjsLib from "pdfjs-dist";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";

export default function PdfToImage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setError("File size should be less than 50MB");
      return;
    }

    setError("");
    setImages([]);
    setLoading(true);

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      setLoading(false);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = async function () {
      try {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument(typedarray).promise;

        let imgs = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          imgs.push(canvas.toDataURL("image/png"));
        }
        setImages(imgs);
      } catch (error) {
        console.error("Error processing PDF:", error);
        setError("Failed to process PDF. Please try another file.");
      } finally {
        setLoading(false);
      }
    };
    fileReader.onerror = () => {
      setError("Failed to read file");
      setLoading(false);
    };
    fileReader.readAsArrayBuffer(file);
  };

  const downloadAll = async () => {
    try {
      const zip = new JSZip();
      images?.forEach((img, index) => {
        zip.file(`page-${index + 1}.png`, img.split("base64,")[1], {
          base64: true,
        });
      });
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "pdf-images?.zip");
    } catch (error) {
      console.error("Error creating ZIP:", error);
      setError("Failed to create download. Please try again.");
    }
  };

  const downloadSingle = (img, index) => {
    try {
      saveAs(img, `page-${index + 1}.png`);
    } catch (error) {
      console.error("Error downloading image:", error);
      setError("Failed to download image. Please try again.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        const event = { target: { files: [file] } };
        handleFileUpload(event);
      } else {
        setError("Please drop a PDF file");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center flex justify-center items-center gap-3"
      >
        <FaFilePdf className="text-[28px]" /> PDF to Image Converter
      </motion.h2>

      {/* Upload Section with Drag & Drop */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="border-2 border-dashed rounded-xl p-10 text-center bg-muted cursor-pointer mb-8"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          className="hidden"
          id="pdfUpload"
        />
        <label
          htmlFor="pdfUpload"
          className="cursor-pointer px-6 py-3 rounded-lg shadow transition inline-block mb-3 bg-foreground text-background hover:opacity-90"
        >
          Upload PDF
        </label>
        <p className="text-sm text-muted-foreground">
          or drag & drop a PDF file here
        </p>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg mb-6"
        >
          {error}
        </motion.div>
      )}

      {/* Loading Animation */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center mt-8 p-6 bg-muted rounded-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mb-4"
          ></motion.div>
          <p className="text-muted-foreground">Processing PDF...</p>
        </motion.div>
      )}

      {/* Images Preview */}
      {images?.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h3 className="font-semibold text-xl">
              Preview {images?.length > 1 && `(${images?.length} pages)`}
            </h3>

            {/* Ye condition add karo */}
            {images?.length > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadAll}
                className="px-5 py-2.5 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition font-medium cursor-pointer"
              >
                Download All
              </motion.button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images?.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {images?.length > 1 && (
                  <div className="p-4 text-center font-medium bg-muted text-foreground border border-border">
                    Page {index + 1}
                  </div>
                )}
                <img src={img} alt={`Page ${index + 1}`} className="" />
                <div className="p-3 text-center bg-muted border-t">
                  <button
                    onClick={() => downloadSingle(img, index)}
                    className="px-4 py-2 text-sm rounded-md font-medium bg-foreground text-background hover:opacity-90 transition shadow cursor-pointer"
                  >
                    Download Page {index + 1}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      {images?.length === 0 && !loading && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-muted rounded-xl"
        >
          <h3 className="font-semibold text-xl mb-4">How to use:</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>Click the "Upload PDF" button or drag & drop a PDF file</li>
            <li>Select a PDF file from your device</li>
            <li>Wait for the conversion to complete</li>
            <li>Download individual pages or all pages as a ZIP file</li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            Note: All processing happens in your browser. Your files are never
            uploaded to any server.
          </p>
        </motion.div>
      )}
    </div>
  );
}
