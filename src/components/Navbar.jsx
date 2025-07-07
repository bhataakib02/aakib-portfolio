"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";
import clsx from "clsx";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const navLinks = [
  { label: "🏠 Home", href: "#hero", color: "text-red-500" },
  { label: "👤 About", href: "#about", color: "text-yellow-500" },
  { label: "🛠️ Skills", href: "#skills", color: "text-green-500" },
  { label: "💼 Projects", href: "#projects", color: "text-blue-500" },
  { label: "🎓 Certifications", href: "#certifications", color: "text-purple-500" },
  { label: "📄 Resume", href: "#resume", color: "text-pink-500" },
  { label: "📬 Contact", href: "#contact", color: "text-orange-500" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-950 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Multicolor name in calligraphy */}
        <h1
          className={clsx(
            "text-3xl font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent",
            greatVibes.className
          )}
        >
          Bhat Aakib
        </h1>

        {/* Navigation links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={clsx(
                  "hover:underline underline-offset-4 transition-all duration-200 hover:scale-105",
                  link.color
                )}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <li>
              <button
                onClick={toggleTheme}
                className="ml-2 text-xl transition hover:text-yellow-400"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
