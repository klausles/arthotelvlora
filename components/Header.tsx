"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const locale = pathname.split("/")[1] || "en";

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/rooms`, label: t("rooms") },
    { href: `/${locale}/gallery`, label: t("gallery") },
    { href: `/${locale}/location`, label: t("location") },
    { href: `/${locale}/experiences`, label: t("experiences") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="text-gold font-bold text-xl sm:text-2xl tracking-wide">
              ART HOTEL
            </div>
            <div className="hidden sm:block text-white/60 text-sm font-light tracking-widest uppercase">
              Vlorë
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-white/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
              target="_blank"
              className="bg-gold text-dark px-5 py-2 rounded-full text-sm font-bold hover:bg-gold-dark transition-colors"
            >
              {t("bookNow")}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white/70 hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg font-medium ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-white/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <LanguageSwitcher />
            </div>
            <Link
              href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
              target="_blank"
              className="block text-center bg-gold text-dark px-5 py-3 rounded-full text-sm font-bold hover:bg-gold-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t("bookNow")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
