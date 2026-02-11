# Gilded Tros Refactoring Kata

This Kata is based on the Gilded Rose Kata, originally created by Terry Hughes (http://twitter.com/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/) and [this version with multiple languages](https://github.com/emilybache/GildedRose-Refactoring-Kata).
It was slightly rebranded by Axxes IT Consultancy, and renamed to Gilded Tros (with a wink to a local bar near the Axxes HQ ;).

## How to use this Kata

The simplest way is to just clone the code and start hacking away improving the design.
Instructions can be found in the [REQUIREMENTS.MD](REQUIREMENTS.MD) document.

Have fun and good luck!

## Getting Started

### Prerequisites

- **[Node.js](https://nodejs.org/)**: Version 22.19.0 or higher
- **[nvm](https://github.com/nvm-sh/nvm)** or **[n](https://github.com/tj/n)**: Node version manager
- **[pnpm](https://pnpm.io/)**: Version 10.28.2 or higher

### Installation

```bash
# Set Node.js version
nvm use
# or
n auto

# Install dependencies
pnpm install
```

## Available Commands

### Build & Demo

```bash
# Build the project (compile TypeScript to JavaScript)
pnpm run build

# Run demo simulation directly with tsx (no build required)
pnpm run demo

# Run demo for custom number of days (e.g., 10 days)
pnpm run demo 10
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode (auto-rerun on file changes)
pnpm run test:watch

# Run tests with coverage report
pnpm run test:coverage

# Open interactive UI for tests (modern test explorer)
pnpm run test:ui
```

### Code Quality

```bash
# Check code quality (runs format + lint + type:check)
pnpm run check

# Run TypeScript type checking
pnpm run type:check

# Check code formatting
pnpm run format

# Auto-fix code formatting
pnpm run format:fix

# Check linting
pnpm run lint

# Auto-fix linting issues
pnpm run lint:fix
```

## Tech Stack

- **TypeScript 5.9** - Modern TypeScript with strict mode
- **Vitest 4.0** - Lightning-fast test runner with native ESM support
- **tsx 4.21** - Run TypeScript directly without compilation
- **ESLint 9.39** - Modern flat config for code quality
- **Prettier 3.8** - Consistent code formatting
- **ESM** - Native ES modules (`type: "module"`)
- **Node.js 22** - LTS version with latest features
