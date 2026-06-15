# Senior Web Concepts - JavaScript/Node.js Map

This repo maps senior web concepts and skills into a structured JavaScript/Node.js learning and reference repo:

- **Frontend Developer concepts:** 88 topics
- **Backend Developer concepts:** 72 topics
- **System Design concepts:** 28 topics
- **AI Engineering concepts:** 33 topics
- **Data & Storage Engineering concepts:** 30 topics
- **Platform Engineering concepts:** 32 topics
- **Network Engineering concepts:** 30 topics
- **Total:** 313 topics

Every topic has a generated markdown page with:

- a concise summary
- why the concept matters
- role tags such as `jr`, `mid`, `sr`, `staff`, `frontend`, `backend`, `system`, `data`, `platform`, `network`, `ai`, `security`, `dx`, and `product`
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
│   ├── ai-engineering/
│   │   ├── README.md
│   │   └── topics/
│   ├── data-storage/
│   │   ├── README.md
│   │   └── topics/
│   ├── platform-engineering/
│   │   ├── README.md
│   │   └── topics/
│   └── network-engineering/
│       ├── README.md
│       └── topics/
├── examples/
│   ├── frontend/
│   ├── backend/
│   ├── system-design/
│   ├── ai-engineering/
│   ├── data-storage/
│   ├── platform-engineering/
│   └── network-engineering/
├── scripts/
│   ├── generate-docs.js
│   └── list-topics.js
└── src/
    ├── concepts/
    │   ├── frontend.js
    │   ├── backend.js
    │   ├── system-design.js
    │   ├── ai-engineering.js
    │   ├── data-storage.js
    │   ├── platform-engineering.js
    │   └── network-engineering.js
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
npm run example:query-cost
npm run example:rollout
npm run example:cidr
```

The generated docs are committed in `docs/`, but `src/concepts/*.js` and `src/examples/snippets.js` are the source of truth.

## Reading path

Start with:

1. [`docs/frontend/README.md`](docs/frontend/README.md)
2. [`docs/backend/README.md`](docs/backend/README.md)
3. [`docs/system-design/README.md`](docs/system-design/README.md)
4. [`docs/ai-engineering/README.md`](docs/ai-engineering/README.md)
5. [`docs/data-storage/README.md`](docs/data-storage/README.md)
6. [`docs/platform-engineering/README.md`](docs/platform-engineering/README.md)
7. [`docs/network-engineering/README.md`](docs/network-engineering/README.md)
8. `examples/` for runnable demonstrations

Browser-only APIs such as Pointer Events, IndexedDB, Service Workers, WebRTC, and Shadow DOM are documented with JavaScript snippets that belong in browser contexts. Backend and platform concepts are demonstrated with Node.js scripts where possible.

System Design topics emphasize architecture sketches, trade-offs, and composition across frontend/backend primitives. AI Engineering topics cover practical LLM, retrieval, eval, safety, tool-use, and agentic workflow concepts while keeping JavaScript examples small enough to inspect. Data & Storage topics cover database, pipeline, analytics, and governance skills. Platform Engineering topics cover CI/CD, infrastructure, runtime platforms, security, observability, incidents, and developer experience. Network Engineering topics cover IP addressing, DNS, TLS, routing, transport behavior, firewalls, service networking, and troubleshooting.

## Role tags

Role tags are intentionally short so a topic can be filtered by level and track:

- `jr`, `mid`, `sr`, `staff` describe expected career-level familiarity.
- `frontend`, `backend`, `system`, `data`, `platform`, `network`, `ai`, `security`, `dx`, and `product` describe role or track relevance.
- Tags are additive: `sr, data, platform` means senior-level knowledge useful to data and platform roles.

## Regenerating docs

```sh
node scripts/generate-docs.js
```

That script reads the concept maps from `src/concepts/` and code snippets from `src/examples/snippets.js`, then writes markdown pages under `docs/`.

GitHub Actions also runs the generator on pull requests and pushes to `main`, then fails if the generated `docs/` tree is not committed.
