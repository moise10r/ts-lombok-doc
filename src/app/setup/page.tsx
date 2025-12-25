import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Setup - lombokx-ts',
  description: 'Learn how to install and configure lombokx-ts in your TypeScript project.',
};

export default function SetupPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#c41e3a]">Home</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Setup</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Getting Started
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get up and running with lombokx-ts in minutes.
          </p>
        </div>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Requirements
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              TypeScript 4.8+
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Node.js 16+
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ts-patch for compiler plugin support
            </li>
          </ul>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            1. Installation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Install lombokx-ts and ts-patch as dev dependencies:
          </p>
          <CodeBlock
            code="npm install lombokx-ts ts-patch"
            language="bash"
            title="terminal"
          />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Or with yarn:
          </p>
          <CodeBlock
            code="yarn add lombokx-ts ts-patch"
            language="bash"
            title="terminal"
          />
        </section>

        {/* Setup ts-patch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            2. Setup ts-patch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Add the prepare script to your <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">package.json</code>:
          </p>
          <CodeBlock
            code={`{
  "scripts": {
    "prepare": "ts-patch install -s"
  }
}`}
            language="json"
            title="package.json"
          />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Then run:
          </p>
          <CodeBlock
            code="npm run prepare"
            language="bash"
            title="terminal"
          />
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <strong>Note:</strong> ts-patch patches the TypeScript compiler to enable custom transformers.
              The prepare script ensures it's set up whenever dependencies are installed.
            </p>
          </div>
        </section>

        {/* Configure tsconfig */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. Configure tsconfig.json
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Add the lombokx-ts transformer to your <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">tsconfig.json</code>:
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
            title="tsconfig.json"
          />
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              <strong>Important:</strong> Make sure <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">experimentalDecorators</code> is enabled.
            </p>
          </div>
        </section>

        {/* Start Using */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4. Start Using Decorators
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Import decorators from <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">lombokx-ts/markers</code> and use them on your classes:
          </p>
          <CodeBlock
            code={`import { Data, Builder } from 'lombokx-ts/markers';

@Data
class User {
  id: number;
  name: string;
  email: string;
}

// All getters, setters, toString, equals, and hashCode are generated!
const user = new User(1, 'John', 'john@example.com');
console.log(user.getName());     // 'John'
console.log(user.toString());    // 'User(id=1, name=John, email=john@example.com)'`}
            language="typescript"
            title="example.ts"
            showLineNumbers
          />
        </section>

        {/* IDE Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            IDE Support
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For the best development experience, configure your IDE to use the patched TypeScript version.
          </p>

          <div className="space-y-6">
            {/* VS Code */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>
                VS Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Create or update <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.vscode/settings.json</code>:
              </p>
              <CodeBlock
                code={`{
  "typescript.tsdk": "node_modules/typescript/lib"
}`}
                language="json"
                title=".vscode/settings.json"
              />
            </div>

            {/* WebStorm */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0zm2.4 2.4v19.2h19.2V2.4H2.4zm3.6 15h4.8v1.2H6v-1.2zm0-2.4l4.2-4.95-4.2-4.65v-1.5l6 6.6-6 6.6v-2.1zm6 2.4h6v1.2h-6v-1.2z"/>
                </svg>
                WebStorm / IntelliJ IDEA
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Go to <strong>Settings &gt; Languages &amp; Frameworks &gt; TypeScript</strong> and set the TypeScript
                package to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">node_modules/typescript</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Next Steps
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/features"
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#c41e3a] transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#c41e3a]">
                Explore Features
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about all available decorators and their capabilities.
              </p>
            </Link>
            <Link
              href="/docs"
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#c41e3a] transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#c41e3a]">
                API Reference
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed documentation for each decorator with examples.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
