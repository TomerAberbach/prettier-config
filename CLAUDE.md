# @tomer/prettier-config

My Prettier configuration!

## Project structure

```
prettier-config
├── src/
│   ├── index.js              # The shared Prettier config, published unbuilt
│   └── index.test.ts         # Tests that format code with the config
│
└── .claude/
    └── hooks/lint-format.sh  # Lints and formats each written file
```

## Development

```sh
# Everything CI runs. Run before handing work back
pnpm check

pnpm format    # Formats the repo with the config in src/
pnpm lint
pnpm typecheck
pnpm knip      # Find unused files, dependencies, and exports
pnpm test
pnpm test -u   # Update snapshots
pnpm coverage
```

## Testing

- Uses `vitest`
- `*.test.ts` files are colocated with implementation
