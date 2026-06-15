# Senior Web Concepts - JavaScript/Node.js Map

This repo maps senior web concepts and skills into a structured JavaScript/Node.js learning and reference repo:

- **Frontend Developer concepts:** 88 topics
- **Backend Developer concepts:** 72 topics
- **System Design concepts:** 28 topics
- **AI Engineering concepts:** 33 topics
- **Total:** 221 topics

Every topic has a generated markdown page with:

- a concise summary
- why the concept matters
- optional architecture sketches or related-concept pointers
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
│   ├── backend/
│   │   ├── README.md
│   │   └── topics/
│   ├── system-design/
│   │   ├── README.md
│   │   └── topics/
│   └── ai-engineering/
│       ├── README.md
│       └── topics/
├── examples/
│   ├── frontend/
│   ├── backend/
│   ├── system-design/
│   └── ai-engineering/
├── scripts/
│   ├── generate-docs.js
│   └── list-topics.js
└── src/
    ├── concepts/
    │   ├── frontend.js
    │   ├── backend.js
    │   ├── system-design.js
    │   └── ai-engineering.js
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
npm run example:capacity
npm run example:vector-search
```

The generated docs are committed in `docs/`, but `src/concepts/*.js` and `src/examples/snippets.js` are the source of truth.

## Reading path

Start with:

1. [`docs/frontend/README.md`](docs/frontend/README.md)
2. [`docs/backend/README.md`](docs/backend/README.md)
3. [`docs/system-design/README.md`](docs/system-design/README.md)
4. [`docs/ai-engineering/README.md`](docs/ai-engineering/README.md)
5. `examples/` for runnable demonstrations

Browser-only APIs such as Pointer Events, IndexedDB, Service Workers, WebRTC, and Shadow DOM are documented with JavaScript snippets that belong in browser contexts. Backend and platform concepts are demonstrated with Node.js scripts where possible.

System Design topics emphasize architecture sketches, trade-offs, and composition across frontend/backend primitives. AI Engineering topics cover practical LLM, retrieval, eval, safety, tool-use, and agentic workflow concepts while keeping JavaScript examples small enough to inspect.

## Regenerating docs

```sh
node scripts/generate-docs.js
```

That script reads the concept maps from `src/concepts/` and code snippets from `src/examples/snippets.js`, then writes markdown pages under `docs/`.

GitHub Actions also runs the generator on pull requests and pushes to `main`, then fails if the generated `docs/` tree is not committed.
