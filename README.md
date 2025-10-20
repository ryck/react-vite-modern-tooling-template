# React Vite Modern Tooling Template

A cutting-edge React application template featuring the latest development tools and best practices. Built with Vite, React 19, TypeScript, Tailwind CSS v4, comprehensive testing, and modern developer experience optimizations.

## What is inside?

This project uses many tools and demonstrates modern React development patterns:

### Core Framework & Build Tools

- [Vite](https://vitejs.dev) v7+ - Lightning-fast build tool with HMR
- [React](https://reactjs.org) v19 - Latest React with concurrent features
- [TypeScript](https://www.typescriptlang.org) v5+ - Advanced type safety and IntelliSense
- [SWC](https://swc.rs/) - Super-fast TypeScript/JavaScript compiler

### Testing Suite

- [Vitest](https://vitest.dev) - Next-generation unit testing framework
- [Testing Library](https://testing-library.com) - Modern React component testing
- [Playwright](https://playwright.dev) - Cross-browser E2E testing
- **Multi-browser support** - Chromium, Firefox, Safari, Edge + mobile devices

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com) v4 - Latest utility-first CSS framework
- [clsx](https://github.com/lukeed/clsx) - Conditional class names utility
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Smart Tailwind class merging
- **Custom `cn()` utility** - Optimized class name composition

### Code Quality & DX

- [ESLint 9](https://eslint.org) - Modern linting with flat config format
- [Prettier](https://prettier.io) - Consistent code formatting with Tailwind plugin
- **Import ordering** - Automatic import organization
- **Path aliases** - Clean imports using `@/` syntax
- **Type checking** - Strict TypeScript configuration
- **Pre-commit hooks** - Code quality enforcement

### Package Management

- [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- **Workspace support** - Optimized for monorepos and complex projects
- **Strict dependency resolution** - Prevents phantom dependencies
- **Smart caching** - Faster installs and reduced disk usage
- **Lock file efficiency** - Smaller, more reliable dependency trees

## Features Implemented

### 🛠 Developer Experience

- Path aliases for clean imports (`@/utils`, `@/components`)
- ESLint 9 with modern flat configuration
- Automatic import sorting and organization
- TypeScript strict mode with comprehensive typing
- Hot module replacement for fast development

## Getting Started

### Prerequisites

This project uses [pnpm](https://pnpm.io) as the package manager. Install it globally if you haven't already:

**Using npm (recommended):**

```bash
npm install -g pnpm
```

**Using Homebrew (macOS):**

```bash
brew install pnpm
```

For more installation options, visit the [official pnpm installation guide](https://pnpm.io/installation).

### Installation

Create a new project using this template:

```bash
pnpm dlx degit ryck/react-vite-modern-tooling-template my-app
cd my-app
pnpm i
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your application.

### Code Quality

**Linting & Formatting:**

```bash
pnpm lint              # Check for lint errors
pnpm lint:fix          # Fix auto-fixable lint errors
pnpm format            # Format code with Prettier
pnpm format:check      # Check code formatting
```

**Type Checking:**

```bash
pnpm typecheck         # Run TypeScript compiler checks
```

**All Quality Checks:**

```bash
pnpm validate          # Run typecheck + lint + tests
```

### Testing

**Unit Tests (Vitest):**

```bash
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm test:ui          # Run with Vitest UI
pnpm test:coverage    # Run with coverage report
```

**End-to-End Tests (Playwright):**

```bash
pnpm test:e2e         # Run e2e tests on all browsers
pnpm test:e2e:ui      # Run with Playwright UI
pnpm test:e2e:headless # Run in headless mode

# Browser-specific testing
pnpm test:e2e:chromium # Test with Chromium only
pnpm test:e2e:firefox  # Test with Firefox only
pnpm test:e2e:webkit   # Test with Safari (WebKit) only
pnpm test:e2e:edge     # Test with Microsoft Edge only

# Group testing
pnpm test:e2e:desktop  # Test all desktop browsers
pnpm test:e2e:mobile   # Test mobile devices (Chrome & Safari)
```

### Build

Build for production:

```bash
pnpm run build
```

Preview production build:

```bash
pnpm run preview
```

## Project Structure

```
src/
├── components/
│   ├── App.tsx              # Main application component
│   ├── App.test.tsx         # App component tests
│   └── Response.tsx         # Response display component
├── utils/
│   ├── api.ts              # Generic API utilities with AbortController
│   ├── api.test.ts         # API utility tests
│   ├── cn.test.ts          # Class name utility tests
│   └── index.ts            # Utility exports including cn()
├── examples/               # Example components and patterns
└── assets/                # Static assets
```

## Key Utilities

### Class Name Utility (`src/utils/index.ts`)

```typescript
// Smart class merging with Tailwind conflict resolution
const classes = cn(
  'bg-red-500 bg-blue-500', // bg-blue-500 wins
  'p-4 px-2', // px-2 overrides p-4's horizontal padding
  { 'text-lg': isActive } // conditional classes
)
```

## Configuration Files

- `eslint.config.mjs` - ESLint 9 flat configuration
- `playwright.config.ts` - E2E testing configuration
- `vitest.config.ts` - Unit testing configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration with path aliases

## License

This project is licensed under the MIT License.
