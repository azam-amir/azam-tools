import ContactPage from "@/app/contact/ContactPage";

export const metadata = {
  title: "Contact Us – AzamTools",
  description:
    "Have questions, suggestions, or feedback? Contact the AzamTools team. We're here to help you with any queries or support you need.",
  keywords: [
    "AzamTools contact",
    "contact us",
    "support",
    "help center",
    "AzamTools feedback",
    "get in touch",
    "tool suggestions",
    "user support",
  ],
  openGraph: {
    title: "Contact Us – AzamTools",
    description:
      "Reach out to AzamTools for support, feedback, or partnership inquiries. We respond to all messages within 24 hours.",
    url: "https://azamtools.vercel.app/contact",
    siteName: "AzamTools",
    images: [
      {
        url: "https://azamtools.vercel.app/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AzamTools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us – AzamTools",
    description:
      "Get in touch with the AzamTools team for any questions or tool requests.",
    images: ["https://azamtools.vercel.app/images/contact-og.jpg"],
  },
};

export default function Contact() {
  return <ContactPage />;
}
