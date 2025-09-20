import ToolPage from "@/app/tools/[tool]/ToolPage";
import { tools } from "@/utils/mock";

export async function generateMetadata({ params }) {
  const { tool } = await params;

  const singleTool = tools?.find((t) => t?.slug === tool);

  if (!singleTool) {
    return {
      title: "Tool Not Found – AzamTools",
      description: "The requested tool could not be found.",
    };
  }

  return {
    title: `${singleTool?.name} – Free Online Tool | AzamTools`,
    description: `Use the ${singleTool?.name} tool online for free. Fast, secure, and no sign-up needed – only on AzamTools.`,
    keywords: [
      singleTool?.name,
      `${singleTool?.name.toLowerCase()} tool`,
      "free online tools",
      "developer tools",
      "AzamTools",
    ],
    openGraph: {
      title: `${singleTool?.name} – Free Online Tool | AzamTools`,
      description: `Use the ${singleTool?.name} tool online at AzamTools. 100% free and privacy-friendly.`,
      url: `https://azamtools.vercel.app/tools/${singleTool?.slug}`,
      siteName: "AzamTools",
      images: [
        {
          url: "https://azamtools.vercel.app/images/tools-directory-og.jpg",
          width: 1200,
          height: 630,
          alt: `${singleTool?.name} – AzamTools`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${singleTool?.name} – Free Tool | AzamTools`,
      description: `Free ${singleTool?.name} tool powered by AzamTools.`,
      images: ["https://azamtools.vercel.app/images/tools-directory-og.jpg"],
    },
  };
}

export default async function Tools({ params }) {
  const { tool } = await params;

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 mb-10">
      <ToolPage tool={tool} />
    </main>
  );
}
