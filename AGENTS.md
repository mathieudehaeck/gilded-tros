# Agent Instructions

## Critical Constraints

⚠️ **DO NOT alter the `Item` class or `Items` property** - Kata requirement.

## Stack

TypeScript 5.9 (strict, ESM) • Vitest 4.0 • ESLint 9 • Node 22

## Key Patterns

- ✅ Guard clauses, early returns, private helpers
- ✅ Type guards: `item is Item & { name: typeof X }`
- ✅ Constants: `ITEM_NAMES`, `QUALITY` bounds
- ❌ No Strategy Pattern (over-engineering)
- ❌ No Item class modifications

## Testing

- **Coverage**: 90%+ threshold (currently 98%)
- Use `test/gilded-tros.mock.ts` fixtures
- Never hardcode item names (use `ITEM_NAMES`)

## Workflow

```bash
pnpm run check  # Format + Lint + Type-check
pnpm test       # Run tests
```

Business rules in `REQUIREMENTS.MD`

## Context

Interview code kata - Use 2026 best practices. Prioritize clarity and simplicity over patterns. No over-engineering, no redundancy.
