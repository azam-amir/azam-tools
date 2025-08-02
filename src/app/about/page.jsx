import AboutPage from "@/app/about/AboutPage";

export const metadata = {
  title: "About AzamTools – Our Mission & Vision",
  description:
    "Discover the story behind AzamTools - a free, privacy-focused platform offering powerful online tools for developers, students, and professionals worldwide.",
  keywords: [
    "about AzamTools",
    "free online tools",
    "privacy-focused tools",
    "developer utilities",
    "PDF tools",
    "image converters",
  ],
  openGraph: {
    title: "About AzamTools – Our Mission & Vision",
    description:
      "Discover the story behind AzamTools and our commitment to free, privacy-focused online tools.",
    images: [
      {
        url: "https://azamtools.vercel.app/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About AzamTools",
      },
    ],
  },
};

export default function About() {
  return <AboutPage />;
}
