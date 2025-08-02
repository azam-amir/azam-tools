"use client";

import Link from "next/link";
import { Github, Youtube } from "lucide-react";
import { ROUTES, SOCIAL_LINKS } from "@/utils/constant";

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur w-full z-10 text-foreground py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left: Copyright + Credit */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} AzamTools. All rights reserved.
          <br className="md:hidden" />
          <span className="block md:inline"> Built by Muhammad Azam Raza.</span>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6">
          <Link
            href={ROUTES.ABOUT}
            className="hover:underline hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href={ROUTES.CONTACT}
            className="hover:underline hover:text-primary transition"
          >
            Contact
          </Link>
          <Link
            href={ROUTES.PRIVACY}
            className="hover:underline hover:text-primary transition"
          >
            Privacy
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <Github size={18} />
          </a>
          <a
            href={SOCIAL_LINKS.YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-primary transition"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
