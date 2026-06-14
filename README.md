# Senior Web Concepts — JavaScript/Node.js Map

This repo maps two interview-style concept lists into a structured JavaScript/Node.js learning and reference repo:

- **Frontend Developer concepts:** 88 topics
- **Backend Developer concepts:** 72 topics
- **Total:** 160 topics

Every topic has a generated markdown page with:

- a concise summary
- why the concept matters
- a JavaScript or Node.js example
- the environment where the example applies (`node`, `browser`, or runtime-neutral JS)

The repo is intentionally dependency-free. All runnable examples use ECMAScript Modules and Node.js core APIs.

## Structure

```txt
.
├── README.md
├── package.json
├── docs/
│   ├── frontend/
│   │   ├── README.md
│   │   └── topics/
│   └── backend/
│       ├── README.md
│       └── topics/
├── examples/
│   ├── frontend/
│   └── backend/
├── scripts/
│   ├── generate-docs.js
│   └── list-topics.js
└── src/
    ├── concepts/
    │   ├── frontend.js
    │   └── backend.js
    └── examples/
        └── snippets.js
```

## Usage

```sh
npm run list
npm run generate
npm run example:abort
npm run example:streams
npm run example:idempotency
npm run example:rate-limit
npm run example:saga
```

The generated docs are committed in `docs/`, but `src/concepts/*.js` and `src/examples/snippets.js` are the source of truth.

## Reading path

Start with:

1. [`docs/frontend/README.md`](docs/frontend/README.md)
2. [`docs/backend/README.md`](docs/backend/README.md)
3. `examples/frontend/` and `examples/backend/` for runnable demonstrations

Browser-only APIs such as Pointer Events, IndexedDB, Service Workers, WebRTC, and Shadow DOM are documented with JavaScript snippets that belong in browser contexts. Backend and platform concepts are demonstrated with Node.js scripts where possible.

## Regenerating docs

```sh
node scripts/generate-docs.js
```

That script reads the concept maps from `src/concepts/` and code snippets from `src/examples/snippets.js`, then writes markdown pages under `docs/`.
