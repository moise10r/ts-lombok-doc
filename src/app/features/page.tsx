import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Features - ts-lombok-kit',
  description: 'Explore all the decorators and features available in ts-lombok-kit.',
};

const decorators = [
  {
    name: '@Record',
    category: 'Immutability',
    description: 'Creates an immutable data carrier with constructor, readonly properties, Object.freeze, and toString.',
    code: `@Record
class User {
  id: number;
  name: string;
}

const user = new User(1, 'John');
console.log(user.toString()); // User(id=1, name=John)
console.log(Object.isFrozen(user)); // true`,
  },
  {
    name: '@Value',
    category: 'Immutability',
    description: 'Alias for @Record. Creates an immutable value class.',
    code: `@Value
class Point {
  x: number;
  y: number;
}

const p = new Point(10, 20);`,
  },
  {
    name: '@With',
    category: 'Immutability',
    description: 'Generates withX() methods for creating modified copies of immutable objects.',
    code: `@Record
@With
class User {
  id: number;
  name: string;
}

const user = new User(1, 'John');
const updated = user.withName('Jane');

console.log(user.name);    // 'John' (unchanged)
console.log(updated.name); // 'Jane' (new instance)`,
  },
  {
    name: '@Data',
    category: 'Boilerplate',
    description: 'Combines @Getter + @Setter + @ToString + @Equals + @AllArgsConstructor for complete data class functionality.',
    code: `@Data
class User {
  id: number;
  name: string;
}

const user = new User(1, 'John');
user.getId();           // 1
user.setName('Jane');
user.toString();        // User(id=1, name=Jane)
user.equals(other);     // true/false
user.hashCode();        // number`,
  },
  {
    name: '@Getter / @Setter',
    category: 'Boilerplate',
    description: 'Generate getter and setter methods for all properties.',
    code: `@Getter
@Setter
class User {
  id: number;
  name: string;
}

const user = new User();
user.setId(1);
user.setName('John');
console.log(user.getId());   // 1
console.log(user.getName()); // 'John'`,
  },
  {
    name: '@ToString',
    category: 'Boilerplate',
    description: 'Generates a toString() method that includes all fields.',
    code: `@ToString
class User {
  id: number;
  name: string;
}

const user = new User();
user.id = 1;
user.name = 'John';
console.log(user.toString()); // "User(id=1, name=John)"`,
  },
  {
    name: '@Equals',
    category: 'Boilerplate',
    description: 'Generates value-based equals() and hashCode() methods.',
    code: `@Equals
class Point {
  x: number;
  y: number;
}

const p1 = new Point(); p1.x = 1; p1.y = 2;
const p2 = new Point(); p2.x = 1; p2.y = 2;

p1.equals(p2);                     // true
p1.hashCode() === p2.hashCode();   // true`,
  },
  {
    name: '@Builder',
    category: 'Patterns',
    description: 'Implements the builder pattern with a fluent API for object construction.',
    code: `@Builder
class User {
  id: number;
  name: string;
  email: string;
}

const user = User.builder()
  .id(1)
  .name('John')
  .email('john@example.com')
  .build();`,
  },
  {
    name: '@NoArgsConstructor',
    category: 'Constructors',
    description: 'Generates an empty constructor.',
    code: `@NoArgsConstructor
class Config {
  host: string;
  port: number;
}

const config = new Config();
config.host = 'localhost';
config.port = 3000;`,
  },
  {
    name: '@AllArgsConstructor',
    category: 'Constructors',
    description: 'Generates a constructor with all fields as parameters.',
    code: `@AllArgsConstructor
class Point {
  x: number;
  y: number;
  z: number;
}

const p = new Point(1, 2, 3);`,
  },
  {
    name: '@RequiredArgsConstructor',
    category: 'Constructors',
    description: 'Generates a constructor with only required fields (non-optional, no initializer).',
    code: `@RequiredArgsConstructor
class User {
  id: number;              // Required - in constructor
  name: string;            // Required - in constructor
  active: boolean = true;  // Has initializer - excluded
  nickname?: string;       // Optional - excluded
}

const user = new User(1, 'John');
console.log(user.active); // true (default value)`,
  },
  {
    name: '@NonNull',
    category: 'Validation',
    description: 'Property decorator that validates fields are not null/undefined in the constructor.',
    code: `@AllArgsConstructor
class User {
  @NonNull
  id: number;

  @NonNull
  name: string;
}

new User(1, 'John');     // OK
new User(null, 'John');  // Throws: "id cannot be null or undefined"`,
  },
  {
    name: '@Singleton',
    category: 'Patterns',
    description: 'Ensures only one instance exists via getInstance() static method.',
    code: `@Singleton
@NoArgsConstructor
class AppConfig {
  apiUrl: string = 'https://api.example.com';
}

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();
console.log(config1 === config2); // true`,
  },
  {
    name: '@Log',
    category: 'Patterns',
    description: 'Adds a readonly log: Console property (backed by console) to the class instance.',
    code: `@Log
class UserService {
  createUser(name: string) {
    this.log.info(\`Creating user: \${name}\`);
    this.log.warn('Watch out!');
    // this.log is console
  }
}`,
  },
];

const categories = ['Immutability', 'Boilerplate', 'Constructors', 'Patterns', 'Validation'];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#c41e3a]">Home</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Features</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A comprehensive set of decorators covering immutability, boilerplate reduction, and common design patterns.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#c41e3a] hover:text-white transition-colors"
            >
              {category}
            </a>
          ))}
        </div>

        {/* Decorators by Category */}
        {categories.map((category) => (
          <section key={category} id={category.toLowerCase()} className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#c41e3a] rounded-lg flex items-center justify-center text-white text-sm">
                {decorators.filter(d => d.category === category).length}
              </span>
              {category}
            </h2>
            <div className="space-y-8">
              {decorators
                .filter((decorator) => decorator.category === category)
                .map((decorator) => (
                  <div
                    key={decorator.name}
                    className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      <code className="text-[#c41e3a]">{decorator.name}</code>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {decorator.description}
                    </p>
                    <CodeBlock code={decorator.code} showLineNumbers />
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* Combining Decorators */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Combining Decorators
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Decorators can be combined for full functionality. Mix and match to get exactly what you need:
          </p>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <CodeBlock
              code={`import { Record, Equals, With, Builder } from 'ts-lombok-kit/markers';

@Record
@Equals
@With
@Builder
class Product {
  id: number;
  name: string;
  price: number;
}

// Create with builder
const p1 = Product.builder()
  .id(1)
  .name('Widget')
  .price(9.99)
  .build();

// Immutable update
const p2 = p1.withPrice(19.99);

console.log(p1.equals(p2));      // false (different prices)
console.log(p1.toString());      // Product(id=1, name=Widget, price=9.99)
console.log(Object.isFrozen(p1)); // true`}
              showLineNumbers
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 px-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Follow our setup guide to start using ts-lombok-kit in your project.
          </p>
          <Link
            href="/setup"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#c41e3a] text-white font-medium hover:bg-[#a01830] transition-colors"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}


