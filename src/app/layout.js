import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/themeProvider/theme-provider";
import LoaderWrapper from "@/components/Loader/LoaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AzamTools – Free Online Tools Hub",
  description:
    "Free and fast online tools – PDF, image, text, and developer tools. No sign-up, no cost.",
  keywords: [
    "online tools",
    "free tools",
    "pdf tools",
    "image to pdf",
    "image compressor",
    "QR generator",
    "text converter",
    "JSON formatter",
  ],
  authors: [{ name: "Muhammad Azam Raza" }],
  robots: "index, follow",
  openGraph: {
    title: "AzamTools – All-in-One Tools Hub",
    description:
      "Use free online tools without any cost. Built for speed and privacy.",
    url: "https://azamtools.com",
    siteName: "AzamTools",
    images: [
      {
        url: "/public/images/preview-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LoaderWrapper>
            <Header />
            {children}
            <Footer />
          </LoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
