import ToolsPage from "@/app/tools/ToolsPage";

export const metadata = {
  metadataBase: new URL("https://www.azamtools.vercel.app"),
  title: "All Online Tools & Categories – AzamTools",
  description:
    "Explore a complete list of free online tools at AzamTools – including PDF utilities, image converters, text formatters, and developer tools. No sign-up required!",
  keywords: [
    "all tools",
    "online tools directory",
    "free web tools",
    "PDF converter",
    "image to PDF",
    "text formatter",
    "developer tools",
    "JSON formatter",
    "QR code generator",
    "AzamTools",
  ],
  authors: [
    { name: "Muhammad Azam Raza", url: "https://www.azamtools.vercel.app" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "All Online Tools – AzamTools",
    description:
      "Browse the complete collection of online tools on AzamTools. Free, fast, and privacy-focused.",
    url: "https://azamtools.vercel.app/tools-directory",
    siteName: "AzamTools",
    images: [
      {
        url: "https://azamtools.vercel.app/images/tools-directory-og.jpg",
        width: 1200,
        height: 630,
        alt: "AzamTools – Tools Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Tools – AzamTools",
    description:
      "Access all AzamTools in one place – from PDF tools to image and text converters. 100% free.",
    images: ["https://azamtools.vercel.app/images/tools-directory-og.jpg"],
  },
};

export default function ToolsDirectoryPage() {
  return <ToolsPage />;
}
