"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { ToggleTheme } from "@/components/lightswind/toggle-theme";
import TextType from "../reactbits/TextType";

const NAV_ITEMS = [
    { label: "Projects", href: "/project" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-zinc-50/80 backdrop-blur dark:bg-black/80">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="shrink-0 relative z-10">
          <h1 className="text-xl font-bold" style={{ fontFamily: "astra" }}>
            D
            <TextType 
              texts={["yts","esigner","eveloper"]}
              typingSpeed={100}
              deletingSpeed={70}
              pauseDuration={1500}
            />
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 space-x-6 items-center md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
              style={{fontFamily: 'astra'}}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ToggleTheme />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="text-foreground md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-black md:hidden">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-foreground dark:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}