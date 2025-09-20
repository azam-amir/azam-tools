import CategoryPage from "@/app/tools/category/CategoryPage";
import { categories } from "@/utils/mock";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categorySlug = category;
  const singleCategory = categories?.find((cat) => cat?.slug === categorySlug);

  if (!singleCategory) {
    return {
      title: "Category Not Found – AzamTools",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${singleCategory?.name} Tools – AzamTools`,
    description: `Use free and powerful ${singleCategory?.name.toLowerCase()} tools online at AzamTools. No sign-up needed.`,
    keywords: [
      `${singleCategory?.name} tools`,
      `online ${singleCategory?.name.toLowerCase()} utilities`,
      "free tools",
      "AzamTools",
    ],
    openGraph: {
      title: `${singleCategory?.name} Tools – AzamTools`,
      description: `Use free and fast ${singleCategory?.name.toLowerCase()} tools online at AzamTools.`,
      url: `https://azamtools.vercel.app/category/${categorySlug}`,
      siteName: "AzamTools",
      images: [
        {
          url: "https://azamtools.vercel.app/images/tools-directory-og.jpg",
          width: 1200,
          height: 630,
          alt: `${singleCategory?.name} Tools – AzamTools`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${singleCategory?.name} Tools – AzamTools`,
      description: `Free ${singleCategory?.name.toLowerCase()} tools by AzamTools.`,
      images: ["https://azamtools.vercel.app/images/tools-directory-og.jpg"],
    },
  };
}

export default async function Category({ params }) {
  const { category } = await params;

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 mb-10">
      <CategoryPage category={category} />
    </main>
  );
}
