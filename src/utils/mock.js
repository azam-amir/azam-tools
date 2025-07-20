import {
  FileText,
  ImageIcon,
  BookText,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const categories = [
  {
    name: "PDF Tools",
    icon: <FileText className="h-6 w-6 text-primary" />,
    href: "/tools/pdf",
  },
  {
    name: "Image Tools",
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    href: "/tools/image",
  },
  {
    name: "Text Tools",
    icon: <BookText className="h-6 w-6 text-primary" />,
    href: "/tools/text",
  },
  {
    name: "Developer Tools",
    icon: <Settings2 className="h-6 w-6 text-primary" />,
    href: "/tools/dev",
  },
  {
    name: "Security Tools",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    href: "/tools/security",
  },
  {
    name: "Mobile Utilities",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    href: "/tools/mobile",
  },
];
export const featuredTools = [
  {
    name: "PDF to Image",
    description: "Convert your PDF pages into high-quality images.",
    icon: "📄",
    href: "/tools/pdf-to-image",
  },
  {
    name: "Image Compressor",
    description: "Reduce image size without losing quality.",
    icon: "🖼️",
    href: "/tools/image-compressor",
  },
  {
    name: "Text Case Converter",
    description: "Change text to UPPERCASE, lowercase, etc.",
    icon: "🔤",
    href: "/tools/text-case-converter",
  },
  {
    name: "QR Code Generator",
    description: "Create custom QR codes for any data.",
    icon: "🔳",
    href: "/tools/qr-code-generator",
  },
  {
    name: "JSON Formatter",
    description: "Format and beautify raw JSON data.",
    icon: "🧾",
    href: "/tools/json-formatter",
  },
  {
    name: "Password Generator",
    description: "Generate secure random passwords instantly.",
    icon: "🔒",
    href: "/tools/password-generator",
  },
];
export const allTools = [
  { name: "PDF to Image", href: "/tools/pdf-to-image" },
  { name: "Image Compressor", href: "/tools/image-compressor" },
  { name: "Text Case Converter", href: "/tools/text-case-converter" },
  { name: "QR Code Generator", href: "/tools/qr-code-generator" },
  { name: "JSON Formatter", href: "/tools/json-formatter" },
  { name: "Password Generator", href: "/tools/password-generator" },
  { name: "Base64 Encoder", href: "/tools/base64-encoder" },
  { name: "Word Counter", href: "/tools/word-counter" },
];
