"use client";
import { useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { motion } from "framer-motion";
import { FaDownload, FaTrashAlt, FaUpload, FaImage } from "react-icons/fa";

export default function ImageCompressor() {
  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 25 * 1024 * 1024;
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

  const openPicker = () => fileInputRef.current?.click();

  const handleFiles = async (fileList) => {
    setError("");
    const arr = Array.from(fileList);
    const invalid = arr.find((f) => !ALLOWED_TYPES.includes(f.type));
    if (invalid) {
      setError("Only JPG, PNG and WebP images are allowed.");
      return;
    }
    const tooLarge = arr.find((f) => f.size > MAX_FILE_SIZE);
    if (tooLarge) {
      setError("Each file must be less than 25MB.");
      return;
    }

    const prepared = await Promise.all(
      arr.map(async (file) => {
        const origUrl = await fileToDataUrl(file);
        return {
          origFile: file,
          origUrl,
          origSize: file.size,
          compressedFile: null,
          compressedUrl: null,
          compressedSize: 0,
          progress: 0,
          status: "pending",
        };
      })
    );

    setFiles(prepared);
    compressAll(prepared);
  };

  const fileToDataUrl = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = () => rej("Failed to read file");
      reader.readAsDataURL(file);
    });

  const compressSingle = async (fileObj, onProgress) => {
    const options = {
      maxSizeMB: 1.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      onProgress: (p) => onProgress && onProgress(Math.round(p)),
      fileType: fileObj.origFile.type,
    };

    try {
      const compressedFile = await imageCompression(fileObj.origFile, options);
      const compressedUrl = await fileToDataUrl(compressedFile);
      return {
        compressedFile,
        compressedUrl,
        compressedSize: compressedFile.size,
      };
    } catch (err) {
      throw err;
    }
  };

  const compressAll = async (preparedList) => {
    setLoading(true);
    setError("");
    for (let i = 0; i < preparedList.length; i++) {
      const idx = i;
      setFiles((prev) => {
        const c = [...prev];
        c[idx].status = "compressing";
        c[idx].progress = 3;
        return c;
      });

      try {
        const result = await compressSingle(preparedList[idx], (p) => {
          setFiles((prev) => {
            const c = [...prev];
            if (c[idx]) c[idx].progress = p;
            return c;
          });
        });

        setFiles((prev) => {
          const c = [...prev];
          if (c[idx]) {
            c[idx].compressedFile = result.compressedFile;
            c[idx].compressedUrl = result.compressedUrl;
            c[idx].compressedSize = result.compressedSize;
            c[idx].progress = 100;
            c[idx].status = "done";
          }
          return c;
        });
      } catch (err) {
        console.error("Compress error:", err);
        setFiles((prev) => {
          const c = [...prev];
          if (c[idx]) {
            c[idx].status = "error";
            c[idx].progress = 0;
          }
          return c;
        });
        setError(
          "Some files failed to compress. Try a different file or lower target size."
        );
      }
    }
    setLoading(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  const handleDragOver = (e) => e.preventDefault();

  const downloadSingle = (item) => {
    if (!item.compressedFile) return setError("File not compressed yet.");
    saveAs(item.compressedFile, `compressed-${item.origFile.name}`);
  };

  const downloadAllZip = async () => {
    const zip = new JSZip();
    let any = false;
    for (const item of files) {
      if (item.compressedFile) {
        const blob = item.compressedFile;
        zip.file(`compressed-${item.origFile.name}`, blob);
        any = true;
      }
    }
    if (!any) return setError("No compressed files to download.");
    const content = await zip.generateAsync({ type: "blob" }, (meta) => {
      // optional progress
    });
    saveAs(content, "images-compressed.zip");
  };

  const resetAll = () => {
    setFiles([]);
    setError("");
    setLoading(false);
  };

  const formatBytes = (bytes) => {
    if (!bytes) return "0 B";
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold mb-4 text-center"
      >
        <span className="inline-flex items-center gap-3">
          <FaImage className="text-blue-500 text-2xl" />
          Image Compressor
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08 }}
        className="text-sm text-muted-foreground text-center mb-6 max-w-2xl mx-auto"
      >
        Upload images (JPG / PNG / WebP). Client-side compression — preview
        before & after, and download results.
      </motion.p>

      {/* Upload area */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        onClick={openPicker}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed rounded-xl p-6 text-center bg-muted cursor-pointer mb-6"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />

        <motion.div
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-foreground text-background shadow">
            <FaUpload />
            <span className="font-medium">Click to upload</span>
          </div>
          <div className="text-sm text-muted-foreground">
            or drag & drop images here
          </div>
        </motion.div>

        <div className="mt-3 text-xs text-muted-foreground">
          Max file size per image: 25MB • JPG / PNG / WebP
        </div>
      </motion.div>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg mb-4"
        >
          {error}
        </motion.div>
      )}

      {/* Top actions when files exist */}
      {files.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={downloadAllZip}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white shadow hover:bg-green-700 transition"
            >
              <FaDownload /> Download All (ZIP)
            </button>

            <button
              onClick={resetAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white shadow hover:bg-red-700 transition"
            >
              <FaTrashAlt /> Upload New
            </button>
          </div>

          <div className="text-sm text-muted-foreground">
            {files.length} file{files.length > 1 ? "s" : ""} selected
          </div>
        </div>
      )}

      {/* Grid of previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full p-6 rounded-xl bg-muted text-center border border-border"
          >
            <FaImage className="mx-auto text-4xl text-muted-foreground mb-3" />
            <div className="font-medium text-foreground">No images yet</div>
            <div className="text-sm text-muted-foreground mt-1">
              Upload images to compress and preview results here.
            </div>
          </motion.div>
        )}

        {files.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="flex flex-col border rounded-2xl overflow-hidden shadow-md bg-background"
          >
            {/* thumbnail */}
            <div className="p-3 bg-muted border-b border-border flex items-center justify-center">
              <img
                src={item.origUrl}
                alt={`preview-${idx}`}
                className="max-h-[220px] object-contain w-full"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* info */}
            <div className="p-3 flex-1 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-foreground truncate">
                  {item.origFile.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatBytes(item.origSize)}
                </div>
              </div>

              {/* progress & status */}
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden border border-border">
                <div
                  style={{ width: `${item.progress}%` }}
                  className="h-full bg-foreground transition-all"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div>
                  {item.status === "compressing" && (
                    <span>Compressing — {item.progress}%</span>
                  )}
                  {item.status === "pending" && <span>Queued</span>}
                  {item.status === "done" && (
                    <span>
                      Saved: {formatBytes(item.compressedSize)} (
                      {Math.round(
                        ((item.origSize - item.compressedSize) /
                          item.origSize) *
                          100
                      )}
                      % ↓)
                    </span>
                  )}
                  {item.status === "error" && (
                    <span className="text-red-600">Error</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadSingle(item)}
                    disabled={!item.compressedFile}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm transition ${
                      item.compressedFile
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <FaDownload /> Save
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.12 }}
        className="mt-6 text-sm text-muted-foreground text-center"
      >
        Compression happens locally in your browser. Files are not uploaded to
        any server.
      </motion.p>
    </div>
  );
}
