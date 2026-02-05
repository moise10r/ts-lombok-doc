import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c41e3a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-white">ts-lombok-kit</span>
            </div>
            <p className="text-gray-400 max-w-md">
              TypeScript library providing Lombok-style decorators via compile-time AST transformers.
              Zero runtime cost, full type safety.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/setup" className="hover:text-[#c41e3a] transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#c41e3a] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-[#c41e3a] transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/moise10r/ts-lombok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c41e3a] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moise10r/ts-lombok/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c41e3a] transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/ts-lombok-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c41e3a] transition-colors"
                >
                  npm
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            MIT License &copy; {new Date().getFullYear()} ts-lombok-kit Authors
          </p>
          <p className="mt-2 text-sm">
            Inspired by{' '}
            <a
              href="https://projectlombok.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c41e3a] hover:underline"
            >
              Project Lombok
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}



