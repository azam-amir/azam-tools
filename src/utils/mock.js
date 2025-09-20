import { SOCIAL_LINKS } from "@/utils/constant";
import {
  FileText,
  ImageIcon,
  BookText,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FiCheck,
  FiCode,
  FiDollarSign,
  FiGlobe,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiRefreshCw,
  FiZap,
} from "react-icons/fi";

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

export const highlights = [
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
];

export const ourMissionData = [
  "Democratize access to essential web utilities",
  "Provide blazing fast tools with zero latency",
  "Maintain strict privacy standards (no data collection)",
  "Continuously expand our toolset based on user needs",
];

export const siteStates = [
  { value: "50+", label: "Tools Available" },
  { value: "100%", label: "Free Forever" },
  { value: "10K+", label: "Monthly Users" },
  { value: "0", label: "User Data Collected" },
];

export const siteFeatures = [
  {
    icon: <FiZap className="text-2xl text-primary" />,
    title: "Lightning Fast",
    description:
      "Our tools are optimized for speed with near-instant processing",
  },
  {
    icon: <FiLock className="text-2xl text-primary" />,
    title: "Privacy First",
    description:
      "All processing happens in your browser - we never see your data",
  },
  {
    icon: <FiCode className="text-2xl text-primary" />,
    title: "Developer Friendly",
    description: "Tools built by developers, for developers",
  },
  {
    icon: <FiGlobe className="text-2xl text-primary" />,
    title: "Universal Access",
    description:
      "Works on all devices and browsers with no installation needed",
  },
  {
    icon: <FiDollarSign className="text-2xl text-primary" />,
    title: "Truly Free",
    description: "No hidden costs, no premium tiers - everything is free",
  },
  {
    icon: <FiRefreshCw className="text-2xl text-primary" />,
    title: "Regular Updates",
    description: "New tools and features added based on community feedback",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    url: SOCIAL_LINKS.GITHUB,
    icon: <FaGithub className="text-xl" />,
    color: "bg-gray-900 hover:bg-gray-800",
  },
  {
    label: "Twitter",
    url: SOCIAL_LINKS.TWITTER,
    icon: <FaTwitter className="text-xl" />,
    color: "bg-blue-400 hover:bg-blue-500",
  },
  {
    label: "LinkedIn",
    url: SOCIAL_LINKS.LINKEDIN,
    icon: <FaLinkedin className="text-xl" />,
    color: "bg-blue-600 hover:bg-blue-700",
  },
];

export const contactInfo = [
  {
    icon: <FiMail className="text-2xl" />,
    title: "Email Support",
    value: "support@azamtools.com",
    href: "mailto:support@azamtools.com",
    color: "bg-blue-500/10",
  },
  {
    icon: <FiPhone className="text-2xl" />,
    title: "Call Us",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
    color: "bg-green-500/10",
  },
  {
    icon: <FaDiscord className="text-2xl" />,
    title: "Discord Community",
    value: "Join our server",
    href: "https://discord.gg/azamtools",
    color: "bg-purple-500/10",
  },
  // {
  //   icon: <FiMapPin className="text-2xl" />,
  //   title: "HQ Location",
  //   value: "Karachi, Pakistan",
  //   href: "https://maps.google.com/?q=Karachi",
  //   color: "bg-red-500/10",
  // },
];

export const businessHours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM (PKT)" },
  { day: "Saturday", time: "10:00 AM - 3:00 PM (PKT)" },
  { day: "Sunday", time: "Closed" },
];

export const safetyMeasuresData = [
  "All connections secured with HTTPS",
  "Regular security audits",
  "No server-side processing for most tools",
  "Open-source code for transparency",
];

export const yourRightsData = [
  "Right to access: No data to access",
  "Right to deletion: No data to delete",
  "Right to rectification: No data to correct",
  "Right to portability: No data to transfer",
];
