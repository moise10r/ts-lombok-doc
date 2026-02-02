'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Setup', href: '/setup' },
  { name: 'Docs', href: '/docs' },
  { name: 'GitHub', href: 'https://github.com/anthropics/lombokx-ts', external: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-black/95 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#c41e3a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                lombokx-ts
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c41e3a] transition-colors dark:text-gray-300 dark:hover:text-[#c41e3a]"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#c41e3a] transition-colors dark:text-gray-300 dark:hover:text-[#c41e3a]"
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://www.npmjs.com/package/lombokx-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c41e3a] text-white px-4 py-2 rounded-lg hover:bg-[#a01830] transition-colors"
            >
              npm install
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#c41e3a] transition-colors dark:text-gray-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-[#c41e3a] transition-colors dark:text-gray-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="https://www.npmjs.com/package/lombokx-ts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c41e3a] text-white px-4 py-2 rounded-lg hover:bg-[#a01830] transition-colors text-center"
              >
                npm install
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



