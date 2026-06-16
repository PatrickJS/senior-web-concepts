# Senior Web Concepts - JavaScript/Node.js Map

This repo maps senior web concepts and skills into a structured JavaScript/Node.js learning and reference repo:

- **Frontend Developer concepts:** 88 topics
- **Software Engineering concepts:** 30 topics
- **Design Systems concepts:** 30 topics
- **Backend Developer concepts:** 72 topics
- **System Design concepts:** 28 topics
- **AI Engineering concepts:** 33 topics
- **Data & Storage Engineering concepts:** 30 topics
- **Platform Engineering concepts:** 32 topics
- **Network Engineering concepts:** 30 topics
- **Total:** 373 topics

Every topic has a generated markdown page with:

- a concise summary
- why the concept matters
- role tags such as `jr`, `mid`, `sr`, `staff`, `software`, `frontend`, `design`, `design-system`, `backend`, `system`, `data`, `platform`, `network`, `ai`, `security`, `dx`, and `product`
- optional architecture sketches or related-concept pointers
- a JavaScript or Node.js example
- the environment where the example applies (`node`, `browser`, or runtime-neutral JS)

The repo is intentionally dependency-free. All runnable examples use ECMAScript Modules and Node.js core APIs.

The generated GitHub Pages entry point is [`docs/index.html`](docs/index.html). It provides a clickable knowledge graph, track cards, topic search, role-overlap lines, and filters for `jr`, `mid`, `sr`, `staff`, and role tracks.

## Structure

```txt
.
├── README.md
├── package.json
├── docs/
│   ├── frontend/
│   │   ├── README.md
│   │   └── topics/
│   ├── software-engineering/
│   │   ├── README.md
│   │   └── topics/
│   ├── design-system/
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
│   ├── network-engineering/
│   │   ├── README.md
│   │   └── topics/
│   └── roles/
│       ├── README.md
│       └── *.md
├── examples/
│   ├── frontend/
│   ├── software-engineering/
│   ├── design-system/
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
    │   ├── software-engineering.js
    │   ├── design-system.js
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
npm run check:site
npm run example:abort
npm run example:streams
npm run example:idempotency
npm run example:rate-limit
npm run example:saga
npm run example:module-contract
npm run example:capacity
npm run example:tokens
npm run example:vector-search
npm run example:query-cost
npm run example:rollout
npm run example:cidr
```

The generated docs are committed in `docs/`, but `src/concepts/*.js` and `src/examples/snippets.js` are the source of truth.

## Reading path

Start with:

1. [`docs/frontend/README.md`](docs/frontend/README.md)
2. [`docs/software-engineering/README.md`](docs/software-engineering/README.md)
3. [`docs/design-system/README.md`](docs/design-system/README.md)
4. [`docs/backend/README.md`](docs/backend/README.md)
5. [`docs/system-design/README.md`](docs/system-design/README.md)
6. [`docs/ai-engineering/README.md`](docs/ai-engineering/README.md)
7. [`docs/data-storage/README.md`](docs/data-storage/README.md)
8. [`docs/platform-engineering/README.md`](docs/platform-engineering/README.md)
9. [`docs/network-engineering/README.md`](docs/network-engineering/README.md)
10. [`docs/roles/README.md`](docs/roles/README.md) for role requirement paths
11. [`docs/index.html`](docs/index.html) for the clickable knowledge graph and role overlap explorer
12. `examples/` for runnable demonstrations

Browser-only APIs such as Pointer Events, IndexedDB, Service Workers, WebRTC, and Shadow DOM are documented with JavaScript snippets that belong in browser contexts. Backend and platform concepts are demonstrated with Node.js scripts where possible.

Software Engineering topics cover general software craft: modularity, domain modeling, contracts, testing, refactoring, debugging, code review, documentation, and maintainability. Design Systems topics cover the intersection between design teams and UI component engineering: design tokens, Figma variables, GitHub governance, component APIs, documentation, testing, releases, adoption, and design debt. System Design topics emphasize architecture sketches, trade-offs, and composition across frontend/backend primitives. AI Engineering topics cover practical LLM, retrieval, eval, safety, tool-use, and agentic workflow concepts while keeping JavaScript examples small enough to inspect. Data & Storage topics cover database, pipeline, analytics, and governance skills. Platform Engineering topics cover CI/CD, infrastructure, runtime platforms, security, observability, incidents, and developer experience. Network Engineering topics cover IP addressing, DNS, TLS, routing, transport behavior, firewalls, service networking, and troubleshooting.

## Role tags

Role tags are intentionally short so a topic can be filtered by level and track:

- `jr`, `mid`, `sr`, `staff` describe expected career-level familiarity.
- `software`, `frontend`, `design`, `design-system`, `backend`, `system`, `data`, `platform`, `network`, `ai`, `security`, `dx`, and `product` describe role or track relevance.
- Tags are additive: `sr, data, platform` means senior-level knowledge useful to data and platform roles.

The generator also compiles `docs/roles/` from those tags, so each level or track has a generated requirement page with links back to the source topic docs.

## Regenerating docs

```sh
node scripts/generate-docs.js
```

That script reads the concept maps from `src/concepts/` and code snippets from `src/examples/snippets.js`, then writes markdown pages under `docs/`.

GitHub Actions also runs the generator on pull requests and pushes to `main`, then fails if the generated `docs/` tree is not committed.
