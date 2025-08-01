import { use } from "react";

export default function ToolPage({ params }) {
  const { tool } = use(params);
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 mb-10">
      {tool} single tool
    </main>
  );
}
