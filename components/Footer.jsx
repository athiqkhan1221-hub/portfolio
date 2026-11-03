"use client";

import Link from "next/link";
import { contactDetails, navLinks } from "@/data/socials";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

import { useRef, useEffect } from "react";

export default function Footer() {
  const yearRef = useRef(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = new Date().getFullYear().toString();
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111311] border-t border-[#303530] py-16 text-[#A5ACA5]">
      <div className="editorial-container">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#303530]">
          {/* Brand & Monogram */}
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-block font-heading font-extrabold text-2xl tracking-tighter text-[#F4F3ED] hover:text-[#C2F970] transition-colors"
            >
              AK<span className="text-[#C2F970]">.</span>
            </Link>
            <p className="font-body text-xs sm:text-sm text-[#A5ACA5] max-w-sm">
              Designed, developed, and continuously improved by Athiq Khan.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer Navigation">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-xs sm:text-sm text-[#A5ACA5] hover:text-[#C2F970] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1B1E1B] border border-[#303530] text-[#A5ACA5] hover:text-[#C2F970] hover:border-[#C2F970] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1B1E1B] border border-[#303530] text-[#A5ACA5] hover:text-[#C2F970] hover:border-[#C2F970] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1B1E1B] border border-[#303530] text-[#A5ACA5] hover:text-[#C2F970] hover:border-[#C2F970] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1B1E1B] border border-[#303530] text-[#A5ACA5] hover:text-[#C2F970] hover:border-[#C2F970] transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="p-2.5 rounded-lg bg-[#1B1E1B] border border-[#303530] text-[#A5ACA5] hover:text-[#C2F970] hover:border-[#C2F970] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#202420] border border-[#303530] text-[#F4F3ED] hover:text-[#111311] hover:bg-[#C2F970] hover:border-[#C2F970] transition-all ml-2"
              aria-label="Scroll to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Programmatic Date Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E756E]">
          <p>© <span ref={yearRef}>2025</span> M. Athiq Khan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Chennai, India</span>
            <span>•</span>
            <span>B.E. AIML</span>
            <span>•</span>
            <span className="text-[#C2F970]">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
