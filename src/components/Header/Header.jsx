"use client";

import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur text-foreground transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AzamTools
        </Link>
        <div className="flex items-center gap-4 cursor-pointer">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
