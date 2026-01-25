import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Documentation - lombokx-ts',
  description: 'Complete API reference and documentation for lombokx-ts decorators.',
};

const decoratorReference = [
  { name: '@Record', type: 'Class', description: 'Immutable data carrier (constructor, readonly, freeze, toString)' },
  { name: '@Value', type: 'Class', description: 'Alias for @Record' },
  { name: '@Data', type: 'Class', description: '@Getter + @Setter + @ToString + @Equals + @AllArgsConstructor' },
  { name: '@Getter', type: 'Class', description: 'Generate getX() methods' },
  { name: '@Setter', type: 'Class', description: 'Generate setX() methods' },
  { name: '@ToString', type: 'Class', description: 'Generate toString() method' },
  { name: '@Equals', type: 'Class', description: 'Generate equals() and hashCode()' },
  { name: '@With', type: 'Class', description: 'Generate withX() methods' },
  { name: '@Builder', type: 'Class', description: 'Generate builder pattern' },
  { name: '@NoArgsConstructor', type: 'Class', description: 'Generate empty constructor' },
  { name: '@AllArgsConstructor', type: 'Class', description: 'Generate constructor with all fields' },
  { name: '@RequiredArgsConstructor', type: 'Class', description: 'Generate constructor with required fields' },
  { name: '@Singleton', type: 'Class', description: 'Singleton pattern with getInstance()' },
  { name: '@Log', type: 'Class', description: 'Add protected logger field' },
  { name: '@NonNull', type: 'Property', description: 'Validate not null in constructor' },
];

const sidebarItems = [
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'How It Works', href: '#how-it-works' },
  { title: 'Decorator Reference', href: '#decorator-reference' },
  { title: 'Class Decorators', href: '#class-decorators' },
  { title: 'Property Decorators', href: '#property-decorators' },
  { title: 'Best Practices', href: '#best-practices' },
  { title: 'Troubleshooting', href: '#troubleshooting' },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">On this page</p>
              {sidebarItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-3 text-sm text-gray-600 dark:text-gray-400 hover:text-[#c41e3a] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {/* Header */}
            <div className="mb-12">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:text-[#c41e3a]">Home</Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">Docs</span>
              </nav>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Complete API reference for lombokx-ts decorators.
              </p>
            </div>

            {/* Getting Started */}
            <section id="getting-started" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Getting Started
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                lombokx-ts provides TypeScript decorators that generate boilerplate code at compile time.
                Unlike runtime decorators, the generated code has zero overhead in production.
              </p>
              <CodeBlock
                code={`import { Data, Builder, Record, With } from 'lombokx-ts/markers';

// Use decorators on your classes
@Data
class User {
  id: number;
  name: string;
  email: string;
}`}
                title="Basic Usage"
              />
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                lombokx-ts uses TypeScript's compiler API to transform your code at compile time:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-10 h-10 bg-[#c41e3a] text-white rounded-lg flex items-center justify-center font-bold mb-4">1</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parse</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reads your TypeScript source files and builds an AST
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-10 h-10 bg-[#c41e3a] text-white rounded-lg flex items-center justify-center font-bold mb-4">2</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Transform</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Identifies decorated classes and generates methods
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-10 h-10 bg-[#c41e3a] text-white rounded-lg flex items-center justify-center font-bold mb-4">3</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Emit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Outputs transformed JavaScript with all methods included
                  </p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>Note:</strong> The decorator markers (<code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">lombokx-ts/markers</code>) are
                  no-op functions at runtime—they only serve as markers for the compiler transformer.
                </p>
              </div>
            </section>

            {/* Decorator Reference Table */}
            <section id="decorator-reference" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Decorator Reference
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Decorator</th>
                      <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Type</th>
                      <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {decoratorReference.map((row) => (
                      <tr key={row.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4">
                          <code className="text-[#c41e3a] font-mono text-sm">{row.name}</code>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm">{row.type}</td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Class Decorators */}
            <section id="class-decorators" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Class Decorators
              </h2>

              {/* @Record */}
              <div className="mb-8 p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <code className="text-[#c41e3a]">@Record</code>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Creates an immutable data carrier with:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                  <li>Constructor with all fields as parameters</li>
                  <li>Readonly properties</li>
                  <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">Object.freeze(this)</code> in constructor</li>
                  <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">toString()</code> method</li>
                </ul>
                <CodeBlock
                  code={`@Record
class User {
  id: number;
  name: string;
}

const user = new User(1, 'John');
console.log(user.toString()); // User(id=1, name=John)
console.log(Object.isFrozen(user)); // true
// user.name = 'Jane'; // Error: Cannot assign to readonly`}
                />
              </div>

              {/* @Data */}
              <div className="mb-8 p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <code className="text-[#c41e3a]">@Data</code>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Shortcut that combines: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@Getter</code> +{' '}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@Setter</code> +{' '}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@ToString</code> +{' '}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@Equals</code> +{' '}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@AllArgsConstructor</code>
                </p>
                <CodeBlock
                  code={`@Data
class User {
  id: number;
  name: string;
}

const user = new User(1, 'John');
user.getId();           // 1
user.setName('Jane');
user.toString();        // User(id=1, name=Jane)
user.equals(other);     // true/false
user.hashCode();        // number`}
                />
              </div>

              {/* @Builder */}
              <div className="mb-8 p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <code className="text-[#c41e3a]">@Builder</code>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Implements the builder pattern with a fluent API:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                  <li>Static <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">builder()</code> method</li>
                  <li>Chainable setter methods for each field</li>
                  <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">build()</code> method to create the instance</li>
                </ul>
                <CodeBlock
                  code={`@Builder
class User {
  id: number;
  name: string;
  email: string;
}

const user = User.builder()
  .id(1)
  .name('John')
  .email('john@example.com')
  .build();`}
                />
              </div>

              {/* @Singleton */}
              <div className="mb-8 p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <code className="text-[#c41e3a]">@Singleton</code>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ensures only one instance exists via <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">getInstance()</code>.
                </p>
                <CodeBlock
                  code={`@Singleton
@NoArgsConstructor
class AppConfig {
  apiUrl: string = 'https://api.example.com';
}

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();
console.log(config1 === config2); // true`}
                />
              </div>
            </section>

            {/* Property Decorators */}
            <section id="property-decorators" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Property Decorators
              </h2>

              {/* @NonNull */}
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <code className="text-[#c41e3a]">@NonNull</code>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Property decorator that validates fields are not null/undefined in the constructor.
                </p>
                <CodeBlock
                  code={`@AllArgsConstructor
class User {
  @NonNull
  id: number;

  @NonNull
  name: string;
}

new User(1, 'John');     // OK
new User(null, 'John');  // Throws: "id cannot be null or undefined"`}
                />
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Best Practices
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Do: Use @Record for immutable data</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Prefer <code>@Record</code> or <code>@Value</code> for data transfer objects and value types
                    that shouldn't be modified after creation.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Do: Combine @Record with @With</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Use <code>@With</code> alongside <code>@Record</code> to get immutable updates that create
                    new instances instead of mutating.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Don't: Mix @Record with @Setter</h4>
                  <p className="text-red-700 dark:text-red-400 text-sm">
                    <code>@Record</code> makes properties readonly and freezes the object. Adding <code>@Setter</code>
                    would create unusable setters.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Do: Use @Builder for complex objects</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    When a class has many fields (4+), use <code>@Builder</code> for clearer object construction.
                  </p>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Troubleshooting
              </h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Generated methods not recognized by IDE
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Make sure your IDE is using the workspace TypeScript version:
                  </p>
                  <CodeBlock
                    code={`// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}`}
                    language="json"
                  />
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    ts-patch not working
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Try reinstalling ts-patch and running the prepare script:
                  </p>
                  <CodeBlock
                    code={`npm uninstall ts-patch
npm install ts-patch
npm run prepare`}
                    language="bash"
                  />
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Decorators not being transformed
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Verify your tsconfig.json includes the plugin and has experimentalDecorators enabled:
                  </p>
                  <CodeBlock
                    code={`{
  "compilerOptions": {
    "experimentalDecorators": true,
    "plugins": [
      { "transform": "lombokx-ts" }
    ]
  }
}`}
                    language="json"
                  />
                </div>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-800">
              <Link
                href="/setup"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#c41e3a] transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Setup
              </Link>
              <Link
                href="/features"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#c41e3a] transition-colors"
              >
                Features
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


