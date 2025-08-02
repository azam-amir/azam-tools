import PrivacyPolicy from "@/app/privacy/PrivacyPage";

export const metadata = {
  title: "Privacy Policy – AzamTools",
  description:
    "Read AzamTools' privacy policy to understand how we handle your data. We prioritize user privacy by ensuring no data is collected or stored.",
  keywords: [
    "AzamTools privacy policy",
    "user data protection",
    "privacy-focused tools",
    "no data tracking",
    "online tool privacy",
    "secure utilities",
    "data privacy",
  ],
  openGraph: {
    title: "Privacy Policy – AzamTools",
    description:
      "Learn about AzamTools' commitment to user privacy. No tracking, no data collection – ever.",
    url: "https://azamtools.vercel.app/privacy",
    siteName: "AzamTools",
    images: [
      {
        url: "https://azamtools.vercel.app/images/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "AzamTools Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – AzamTools",
    description:
      "Understand how AzamTools protects your privacy. We never track or store user data.",
    images: ["https://azamtools.vercel.app/images/privacy-og.jpg"],
  },
};

export default function Privacy() {
  return <PrivacyPolicy />;
}
