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
    slug: "pdf-tools",
    icon: <FileText className="h-6 w-6 text-primary" />,
    href: "/tools/pdf",
    description: "Work with PDF files – convert, merge and more.",
  },
  {
    name: "Image Tools",
    slug: "image-tools",
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    href: "/tools/image",
    description: "Compress, convert, resize and optimize images.",
  },
  {
    name: "Text Tools",
    slug: "text-tools",
    icon: <BookText className="h-6 w-6 text-primary" />,
    href: "/tools/text",
    description: "Manipulate and format your text easily.",
  },
  {
    name: "Developer Tools",
    slug: "dev-tools",
    icon: <Settings2 className="h-6 w-6 text-primary" />,
    href: "/tools/dev",
    description: "Useful tools for web developers and programmers.",
  },
  {
    name: "Security Tools",
    slug: "security-tools",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    href: "/tools/security",
    description: "Tools for password generation and safety.",
  },
  {
    name: "Mobile Utilities",
    slug: "mobile-tools",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    href: "/tools/mobile",
    description: "Tools for mobile optimization and utility.",
  },
];

export const tools = [
  {
    name: "PDF to Image",
    slug: "pdf-to-image",
    description: "Convert your PDF pages into high-quality images.",
    icon: "📄",
    href: "/tools/pdf-to-image",
    category: "pdf-tools",
  },
  {
    name: "Image Compressor",
    slug: "image-compressor",
    description: "Reduce image size without losing quality.",
    icon: "🖼️",
    href: "/tools/image-compressor",
    category: "image-tools",
  },
  {
    name: "Text Case Converter",
    slug: "text-case-converter",
    description: "Change text to UPPERCASE, lowercase, etc.",
    icon: "🔤",
    href: "/tools/text-case-converter",
    category: "text-tools",
  },
  {
    name: "QR Code Generator",
    slug: "qr-code-generator",
    description: "Create custom QR codes for any data.",
    icon: "🔳",
    href: "/tools/qr-code-generator",
    category: "dev-tools",
  },
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    description: "Format and beautify raw JSON data.",
    icon: "🧾",
    href: "/tools/json-formatter",
    category: "dev-tools",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    description: "Generate secure random passwords instantly.",
    icon: "🔒",
    href: "/tools/password-generator",
    category: "dev-tools",
  },
];
