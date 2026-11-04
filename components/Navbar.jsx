"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { contactDetails, navLinks } from "@/data/socials";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Section spy
      const sections = ["about", "work", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#111311]/90 backdrop-blur-md border-b border-[#303530] py-3.5 shadow-lg shadow-black/40"
        : "bg-transparent py-5 border-b border-transparent"
        }`}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325ea8]"
        >
          <span className="font-heading font-extrabold text-2xl tracking-tighter text-[#F4F3ED] group-hover:text-[#325ea8] transition-colors">
            AK<span className="text-[#325ea8]">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={`font-body text-sm font-medium transition-colors duration-200 relative py-1 ${isActive
                  ? "text-[#325ea8]"
                  : "text-[#A5ACA5] hover:text-[#F4F3ED]"
                  }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#325ea8] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Direct CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="text-xs font-mono font-medium flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#325ea8] text-[#F4F3ED] bg-[#325ea8]/10 hover:bg-[#325ea8] hover:text-white transition-all shadow-sm group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#325ea8] group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#F4F3ED] hover:text-[#325ea8] hover:bg-[#1B1E1B] border border-[#303530] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325ea8]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#111311]/98 backdrop-blur-xl border-t border-[#303530] z-40 p-6 flex flex-col justify-between animate-fadeIn">
          <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl font-bold text-[#F4F3ED] hover:text-[#325ea8] py-2 border-b border-[#202420] flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="font-mono text-xs text-[#6E756E]">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#303530] flex flex-col gap-4">
            <p className="font-mono text-xs text-[#A5ACA5]">
              {contactDetails.location} · {contactDetails.college}
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
