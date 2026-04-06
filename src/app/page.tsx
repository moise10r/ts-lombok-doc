import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    title: 'Zero Runtime Cost',
    description: 'All transformations happen at compile time. No runtime overhead, no extra dependencies in production.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Type-Safe',
    description: 'Full TypeScript support with proper type inference. Your IDE will understand all generated methods.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Immutable Patterns',
    description: '@Record, @Value, and @With decorators for creating immutable data classes with ease.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Builder Pattern',
    description: '@Builder generates a fluent builder API for complex object construction.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Boilerplate Reduction',
    description: '@Data, @Getter, @Setter, @ToString, @Equals - generate common methods automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Design Patterns',
    description: '@Singleton, @Log, and constructor variants for common patterns out of the box.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
];

const beforeCode = `class User {
  private id: number;
  private name: string;
  private email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }
  getName(): string { return this.name; }
  setName(name: string): void { this.name = name; }
  getEmail(): string { return this.email; }
  setEmail(email: string): void { this.email = email; }

  toString(): string {
    return \`User(id=\${this.id}, name=\${this.name}, email=\${this.email})\`;
  }

  equals(other: User | null | undefined): boolean {
    return this.id === other.id &&
           this.name === other.name &&
           this.email === other.email;
  }

  hashCode(): number {
    // ... implementation
  }
}`;

const afterCode = `import { Data } from 'ts-lombok-kit/markers';

@Data
class User {
  id: number;
  name: string;
  email: string;
}

// That's it! All methods are generated at compile time.`;

const installCode = `npm install -D ts-lombok-kit ts-patch`;

const quickStartCode = `import { Record, Builder, With } from 'ts-lombok-kit/markers';

@Record
@Builder
@With
class Product {
  id: number;
  name: string;
  price: number;
}

// Create with builder
const product = Product.builder()
  .id(1)
  .name('Widget')
  .price(9.99)
  .build();

// Immutable update
const updated = product.withPrice(19.99);

console.log(product.toString());
// Product(id=1, name=Widget, price=9.99)`;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 text-[#c41e3a] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#c41e3a] rounded-full animate-pulse"></span>
              TypeScript Compile-Time Decorators
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Spice up your{' '}
              <span className="text-[#c41e3a]">TypeScript</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              <strong>ts-lombok-kit</strong> is a TypeScript library that automatically plugs into your
              editor and build tools, eliminating boilerplate code through compile-time AST transformations.
              Never write another getter again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/setup"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#c41e3a] text-white font-medium hover:bg-[#a01830] transition-colors"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </Link>
            </div>
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-800 text-gray-300 font-mono text-sm">
                <span className="text-gray-500">$</span>
                <span>{installCode}</span>
                <button className="ml-2 text-gray-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Write Less, Do More
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how ts-lombok-kit transforms verbose boilerplate into clean, declarative code.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium dark:bg-red-900/30 dark:text-red-400">
                  Before
                </span>
                <span className="text-gray-500 text-sm">40+ lines of boilerplate</span>
              </div>
              <CodeBlock code={beforeCode} showLineNumbers />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium dark:bg-green-900/30 dark:text-green-400">
                  After
                </span>
                <span className="text-gray-500 text-sm">Just 8 lines with ts-lombok-kit</span>
              </div>
              <CodeBlock code={afterCode} showLineNumbers />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to eliminate boilerplate and write cleaner TypeScript code.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Example Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Combine Decorators for Full Power
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Mix and match decorators to get exactly the functionality you need.
                Create immutable records with builders and withers in just a few lines.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@Record</code> for immutability
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@Builder</code> for fluent construction
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@With</code> for immutable updates
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/features"
                  className="inline-flex items-center text-[#c41e3a] font-medium hover:underline"
                >
                  View all decorators
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <CodeBlock code={quickStartCode} showLineNumbers />
            </div>
          </div>
        </div>
      </section>

      {/* Decorator Reference Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Decorators
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of decorators covering common patterns and boilerplate.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Decorator</th>
                  <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Type</th>
                  <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { name: '@Record', type: 'Class', desc: 'Immutable data carrier (constructor, readonly, freeze, toString)' },
                  { name: '@Data', type: 'Class', desc: '@Getter + @Setter + @ToString + @Equals + @AllArgsConstructor' },
                  { name: '@Builder', type: 'Class', desc: 'Generate builder pattern with fluent API' },
                  { name: '@Getter / @Setter', type: 'Class', desc: 'Generate accessor methods' },
                  { name: '@With', type: 'Class', desc: 'Generate withX() methods for immutable updates' },
                  { name: '@Singleton', type: 'Class', desc: 'Singleton pattern with getInstance()' },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <code className="text-[#c41e3a] font-mono">{row.name}</code>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.type}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/docs"
              className="inline-flex items-center text-[#c41e3a] font-medium hover:underline"
            >
              View complete API reference
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c41e3a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to eliminate boilerplate?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get started with ts-lombok-kit in minutes. Zero runtime cost, full TypeScript support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/setup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#c41e3a] font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/moise10r/ts-lombok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




