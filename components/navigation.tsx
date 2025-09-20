"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">🏠 Abishek</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1oFhAlt9yl3_A3viwro7_58L4M3NKMKpq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1oFhAlt9yl3_A3viwro7_58L4M3NKMKpq/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-2 text-base font-medium rounded-md mx-3 transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
