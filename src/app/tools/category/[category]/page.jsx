import { use } from "react";

export default function CategoryPage({ params }) {
  const { category } = use(params);
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 mb-10">{category} Tools</main>
  );
}
