# Senior requirements

**Role tag:** sr
**Topics:** 303

Concepts a senior engineer should be able to use for design trade-offs, production debugging, and technical leadership.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Frontend: 88
- Software Engineering: 12
- Design Systems: 21
- Backend: 72
- System Design: 28
- AI Engineering: 33
- Data & Storage Engineering: 19
- Platform Engineering: 17
- Network Engineering: 13

## Required concepts

### Frontend

#### Input and accessibility

- [Pointer events](../frontend/topics/pointer-events.md) — Pointer events unify mouse, touch, pen, and stylus input behind one event model. A strong explanation covers pointerId, pointerType, pressure, pointer capture, cancellation, and why duplicating mouse/touch logic creates gesture bugs.
- [ARIA live regions internals](../frontend/topics/aria-live-regions-internals.md) — ARIA live regions are parts of the DOM that assistive technologies monitor for announcements. The important details are politeness level, atomic updates, insertion timing, and avoiding rapid DOM replacement that screen readers may ignore.
- [Accessibility tree](../frontend/topics/accessibility-tree.md) — The accessibility tree is the browser-derived semantic representation exposed to assistive technologies. It is built from DOM, native semantics, ARIA, CSS visibility, names, descriptions, focusability, and platform mappings.

#### Rendering correctness and state

- [Idempotent UI actions](../frontend/topics/idempotent-ui-actions.md) — An idempotent UI action produces the same durable result even if the user clicks twice, the request retries, or the component remounts. The usual tools are action keys, disabled states, dedupe maps, idempotency headers, and server-side replay protection.
- [Deterministic rendering](../frontend/topics/deterministic-rendering.md) — Deterministic rendering means the same inputs produce the same UI output. It avoids hidden time, random values, mutable globals, request order dependence, and client/server mismatches during hydration.
- [Priority inversion in async code](../frontend/topics/priority-inversion-in-async-code.md) — Priority inversion happens when urgent work waits behind lower-priority work because the scheduler or promise chain cannot preempt it. In UI this shows up as input blocked behind rendering, background fetches, or heavy microtask chains.
- [Race conditions in UI state](../frontend/topics/race-conditions-in-ui-state.md) — UI state races happen when async results arrive out of order or after the state they depended on has changed. Common fixes are request IDs, AbortController, version checks, state machines, and idempotent reducers.

#### Performance and Web Vitals

- [Speculative prerendering](../frontend/topics/speculative-prerendering.md) — Speculative prerendering asks the browser to prepare likely future navigations before the user clicks. It can make navigations instant, but must avoid private-state leaks, side effects, wasted bandwidth, and analytics double-counting.
- [Largest Contentful Paint (LCP)](../frontend/topics/largest-contentful-paint-lcp.md) — LCP measures when the largest visible content element in the viewport is rendered. Good explanations connect LCP to TTFB, render-blocking CSS, image discovery, resource priority, server rendering, and client-side render delays.
- [Cumulative Layout Shift (CLS)](../frontend/topics/cumulative-layout-shift-cls.md) — CLS measures unexpected visual movement during page lifetime. The core prevention model is reserving space, stable dimensions, predictable font loading, non-intrusive ads/embeds, and avoiding DOM insertions above existing content.
- [Interaction to Next Paint (INP)](../frontend/topics/interaction-to-next-paint-inp.md) — INP measures the latency of user interactions from input through processing to the next paint. It rewards short event handlers, quick style/layout work, cooperative yielding, and avoiding long main-thread tasks.
- [First Input Delay (FID)](../frontend/topics/first-input-delay-fid.md) — FID measured the delay before the browser could start processing the first input. It is largely a main-thread availability metric and is best explained historically as the predecessor to INP for interaction responsiveness.
- [Long tasks API](../frontend/topics/long-tasks-api.md) — The Long Tasks API exposes main-thread tasks that run long enough to block input and rendering. It is useful for finding expensive scripts, hydration bursts, synchronous parsing, and third-party code that creates responsiveness cliffs.
- [PerformanceObserver API](../frontend/topics/performanceobserver-api.md) — PerformanceObserver streams browser or runtime performance entries as they occur, often with buffered historical entries. It is the common mechanism for collecting vitals, resource timing, long tasks, marks, and measures.

#### Memory, streams, and advanced browser APIs

- [Garbage collection timing](../frontend/topics/garbage-collection-timing.md) — Garbage collection is nondeterministic and should not be part of application correctness. A frontend engineer should understand object reachability, closures, event listeners, WeakMap/WeakRef trade-offs, and why GC pauses can affect responsiveness.
- [Detached DOM nodes](../frontend/topics/detached-dom-nodes.md) — Detached DOM nodes are removed from the visible document but still retained by JavaScript references. They often come from leaked listeners, caches, closures, observers, and component cleanup bugs.
- [Browser memory leak detection](../frontend/topics/browser-memory-leak-detection.md) — Browser memory leak detection is the process of proving memory grows because objects remain reachable after expected cleanup. Good explanations include heap snapshots, allocation timelines, detached DOM node views, listener cleanup, and reproducible interaction loops.
- [Streaming fetch response handling](../frontend/topics/streaming-fetch-response-handling.md) — Streaming fetch handling reads response chunks as they arrive instead of waiting for the full body. It enables progressive rendering, lower memory usage, server-sent protocols, and earlier cancellation.
- [AbortController](../frontend/topics/abortcontroller.md) — AbortController coordinates cancellation for fetches, streams, event listeners, and async operations. It prevents stale updates, leaked work, unnecessary network traffic, and component-unmount races.
- [Backpressure in streams API](../frontend/topics/backpressure-in-streams-api.md) — Backpressure is the signal that a consumer cannot keep up with a producer. Streams expose it through desiredSize, writer.ready, highWaterMark, drain-like behavior, and async pulls to avoid unbounded buffering.
- [WebRTC](../frontend/topics/webrtc.md) — WebRTC provides peer-to-peer media and data channels with NAT traversal, ICE, STUN/TURN, SDP negotiation, encryption, congestion control, and real-time delivery constraints.
- [IndexedDB](../frontend/topics/indexeddb.md) — IndexedDB is the browser's transactional object store for larger structured data. Good explanations mention version upgrades, object stores, indexes, transactions, async request APIs, quota, and offline-first storage.
- [WebAssembly integration](../frontend/topics/webassembly-integration.md) — WebAssembly integration loads compiled modules into JavaScript for CPU-heavy, portable code. The real boundary is memory copying, async instantiation, imports/exports, streaming compilation, and choosing where JS remains simpler.
- [OffscreenCanvas](../frontend/topics/offscreencanvas.md) — OffscreenCanvas allows canvas rendering off the main thread, often in a Worker. It is useful for charts, games, image processing, and avoiding main-thread paint pressure.
- [Transferable objects](../frontend/topics/transferable-objects.md) — Transferable objects move ownership of buffers or ports between threads without copying. After transfer, the original owner is detached, which improves performance but requires explicit lifetime handling.
- [SharedArrayBuffer](../frontend/topics/sharedarraybuffer.md) — SharedArrayBuffer allows multiple threads to access the same memory with Atomics for coordination. In browsers it requires cross-origin isolation because of side-channel risk.
- [Web Workers vs Service Workers](../frontend/topics/web-workers-vs-service-workers.md) — Web Workers run background JavaScript for a page; Service Workers act as network/proxy lifecycle scripts for an origin scope. Workers help CPU isolation, while Service Workers intercept requests, cache, and enable offline behavior.
- [Web Components interoperability](../frontend/topics/web-components-interoperability.md) — Web Components interoperate through custom elements, attributes, properties, events, slots, and DOM APIs. Good boundaries avoid framework-specific assumptions and expose stable platform contracts.
- [Custom Elements lifecycle](../frontend/topics/custom-elements-lifecycle.md) — Custom Elements lifecycle callbacks handle construction, connection, disconnection, adoption, and observed attribute changes. Correct components defer DOM work until connected and clean up listeners, observers, and async work on disconnect.
- [Shadow DOM](../frontend/topics/shadow-dom.md) — Shadow DOM creates an encapsulated DOM subtree with scoped styling and slot-based composition. It improves component isolation but affects styling, event retargeting, accessibility names, and testing strategies.

#### Offline, collaboration, and data modeling

- [CRDT basics for collaboration](../frontend/topics/crdt-basics-for-collaboration.md) — CRDTs are data types designed so replicas can update independently and merge without conflicts. A clear answer covers commutativity, associativity, idempotent merges, causal metadata, and trade-offs in metadata size.
- [Offline conflict resolution](../frontend/topics/offline-conflict-resolution.md) — Offline conflict resolution decides what happens when local changes meet remote changes after reconnect. Strategies include last-write-wins, field-level merge, operational transforms, CRDTs, manual conflict UI, and version vectors.
- [Optimistic UI rollback strategy](../frontend/topics/optimistic-ui-rollback-strategy.md) — Optimistic UI applies a predicted result immediately, then confirms or rolls back after the server responds. A reliable strategy records previous state, pending operation IDs, failure rules, and reconciliation with server truth.
- [Event sourcing in frontend](../frontend/topics/event-sourcing-in-frontend.md) — Frontend event sourcing stores user/domain events and derives UI state from projections. It helps with undo/redo, offline queues, auditability, replay, optimistic updates, and deterministic debugging.
- [Finite state modeling](../frontend/topics/finite-state-modeling.md) — Finite state modeling describes UI behavior as explicit states and allowed transitions. It prevents impossible states like loading and saved simultaneously, and makes retries, errors, and cancellation easier to test.

#### Frontend architecture and rendering models

- [Micro-frontend orchestration](../frontend/topics/micro-frontend-orchestration.md) — Micro-frontend orchestration coordinates independently built frontend applications at runtime. Strong explanations cover ownership boundaries, routing, shared dependencies, CSS isolation, versioning, event contracts, and failure containment.
- [Edge rendering](../frontend/topics/edge-rendering.md) — Edge rendering produces HTML or responses close to users, usually in geographically distributed runtimes. It improves latency but constrains APIs, cold starts, data locality, cache behavior, and consistency.
- [Server components](../frontend/topics/server-components.md) — Server components render parts of the component tree on the server without shipping their implementation to the client. The core trade-off is reduced client JavaScript versus stricter serialization, data access, and boundary rules.
- [Selective hydration](../frontend/topics/selective-hydration.md) — Selective hydration hydrates only the interactive parts of server-rendered HTML, often by priority or visibility. It reduces startup work, but requires accurate island boundaries and safe event replay or delayed interactivity.
- [Suspense boundaries](../frontend/topics/suspense-boundaries.md) — Suspense boundaries isolate async waiting so one slow dependency does not block the entire UI. A strong explanation mentions fallback UI, reveal order, thrown promises/resource reads, streaming SSR, and avoiding waterfalls.
- [Render waterfalls](../frontend/topics/render-waterfalls.md) — Render waterfalls happen when rendering discovers async dependencies sequentially instead of in parallel. They commonly occur in nested components, route loaders, dynamic imports, and suspense trees that fetch too late.
- [Scheduler priorities](../frontend/topics/scheduler-priorities.md) — Scheduler priorities decide which work should run now and which work can wait. UI schedulers prioritize input and visible updates over background rendering, prefetching, analytics, and non-urgent transitions.
- [Tearing in concurrent UI](../frontend/topics/tearing-in-concurrent-ui.md) — Tearing occurs when different parts of the UI observe different versions of shared state during concurrent rendering. Avoid it with consistent snapshots, subscription protocols, immutable commits, and framework-specific external-store APIs.
- [Streaming SSR](../frontend/topics/streaming-ssr.md) — Streaming SSR sends HTML progressively while data or components are still resolving. It improves time to first byte and progressive display, but requires boundary management, script ordering, and hydration coordination.
- [Islands architecture](../frontend/topics/islands-architecture.md) — Islands architecture renders mostly static HTML and hydrates isolated interactive components. It reduces client JavaScript and hydration cost, but boundaries and cross-island communication must be explicit.
- [Partial hydration](../frontend/topics/partial-hydration.md) — Partial hydration hydrates only parts of a server-rendered page rather than the full tree. It is related to islands and resumability, and trades framework complexity for less startup JavaScript.
- [Hydration](../frontend/topics/hydration.md) — Hydration attaches client behavior to server-rendered HTML. The hard parts are matching server/client output, event replay, async data consistency, and avoiding large startup work.

#### Security, networking, and caching

- [Prototype pollution](../frontend/topics/prototype-pollution.md) — Prototype pollution lets attacker-controlled keys modify Object.prototype or constructors. It often comes from unsafe deep merge, path setters, query parsers, or JSON merge logic that accepts __proto__, prototype, or constructor keys.
- [DOM clobbering](../frontend/topics/dom-clobbering.md) — DOM clobbering abuses named elements or IDs that become properties on document, forms, or windows. Safe code avoids trusting global property lookup and reads explicit attributes from selected elements instead.
- [Trusted Types](../frontend/topics/trusted-types.md) — Trusted Types is a browser defense that restricts dangerous DOM sinks such as innerHTML to values created by approved policies. It is especially useful for reducing DOM XSS in large applications.
- [Content Security Policy (CSP)](../frontend/topics/content-security-policy-csp.md) — CSP is a browser-enforced policy controlling where scripts, styles, images, frames, and other resources can load from. Strong explanations cover nonces, hashes, strict-dynamic, report-only rollout, and blocking inline script execution.
- [CSRF vs XSS mitigation](../frontend/topics/csrf-vs-xss-mitigation.md) — CSRF tricks an authenticated browser into sending unwanted state-changing requests; XSS executes attacker script in the trusted origin. CSRF is mitigated with SameSite, tokens, and origin checks; XSS is mitigated with output encoding, CSP, sanitization, and Trusted Types.
- [SameSite cookie modes](../frontend/topics/samesite-cookie-modes.md) — SameSite controls whether cookies are sent on cross-site requests. Lax is a pragmatic default, Strict is more protective but can break flows, and None requires Secure for third-party contexts.
- [CORS preflight](../frontend/topics/cors-preflight.md) — A CORS preflight is an OPTIONS request the browser sends before non-simple cross-origin requests. The server must explicitly allow origin, methods, and headers; CORS is a browser boundary, not server-to-server auth.
- [Preload vs Prefetch vs Preconnect](../frontend/topics/preload-vs-prefetch-vs-preconnect.md) — Preload fetches a needed resource for the current navigation, prefetch gets likely future resources at lower priority, and preconnect warms DNS/TCP/TLS connections to an origin. Misuse can waste bandwidth or hurt priority scheduling.
- [Priority hints](../frontend/topics/priority-hints.md) — Priority hints communicate relative fetch importance to the browser. They are useful for hero images and noncritical assets, but should complement rather than replace correct resource discovery and markup order.
- [HTTP/3 and QUIC](../frontend/topics/http-3-and-quic.md) — HTTP/3 runs HTTP semantics over QUIC instead of TCP. It reduces transport head-of-line blocking, integrates TLS 1.3, supports connection migration, and handles loss recovery per stream more gracefully than HTTP/2 over TCP.
- [ETag vs Cache-Control](../frontend/topics/etag-vs-cache-control.md) — Cache-Control defines freshness and reuse rules; ETag is a validator for conditional revalidation. Effective caching uses both: freshness for fast reuse and validators for cheap correctness after stale entries.
- [Stale-while-revalidate](../frontend/topics/stale-while-revalidate.md) — Stale-while-revalidate serves a cached stale response immediately while refreshing in the background. It improves perceived latency but requires tolerance for temporary staleness and careful invalidation for user-specific data.
- [Cache invalidation strategies](../frontend/topics/cache-invalidation-strategies.md) — Cache invalidation is the policy for removing or superseding cached data when truth changes. Techniques include TTLs, versioned keys, surrogate keys, write-through updates, event-driven purges, and scoped cache busting.
- [Service Worker lifecycle traps](../frontend/topics/service-worker-lifecycle-traps.md) — Service Workers have install, waiting, activate, fetch, and update states that can keep old code alive. Traps include stale caches, uncontrolled clients, skipWaiting misuse, update races, and broken offline fallbacks.

#### Observers, layout, paint, and CSS pipeline

- [MutationObserver cost](../frontend/topics/mutationobserver-cost.md) — MutationObserver batches DOM mutation records, but broad subtree observation can be expensive. The cost comes from record volume, callback work, retained nodes, and accidental feedback loops that create more mutations.
- [ResizeObserver loop limits](../frontend/topics/resizeobserver-loop-limits.md) — ResizeObserver reports element size changes, but writing size-affecting styles inside the callback can create loops. Browsers limit these loops, so callbacks should defer writes and avoid recursive layout changes.
- [IntersectionObserver internals](../frontend/topics/intersectionobserver-internals.md) — IntersectionObserver asynchronously reports visibility intersections between targets and a root. It avoids many scroll-handler costs, but callbacks are still approximate, threshold-based, and affected by root margins and layout changes.
- [Subpixel rendering](../frontend/topics/subpixel-rendering.md) — Subpixel rendering occurs because layout uses fractional CSS pixels while screens use device pixels. Rounding can affect text, transforms, borders, canvas drawing, and alignment across devicePixelRatio values.
- [CSS containment](../frontend/topics/css-containment.md) — CSS containment tells the browser that layout, paint, style, or size effects are isolated. It lets the engine skip broader invalidation and is especially useful for virtualized lists, cards, and independent widgets.
- [GPU acceleration in CSS](../frontend/topics/gpu-acceleration-in-css.md) — GPU acceleration usually means moving compositable work such as transforms and opacity to compositor layers. It can improve animation smoothness but too many layers waste memory and can hurt performance.
- [Paint vs composite vs layout](../frontend/topics/paint-vs-composite-vs-layout.md) — Layout computes geometry, paint rasterizes pixels, and composite assembles layers on screen. Performance work often means avoiding layout and paint when a transform or opacity-only composite will do.
- [Browser compositing layers](../frontend/topics/browser-compositing-layers.md) — Compositing layers are independently rasterized surfaces the compositor can move or blend. They are created by transforms, opacity, video, fixed elements, will-change, and browser heuristics, but each layer has memory and upload cost.
- [Layout thrashing](../frontend/topics/layout-thrashing.md) — Layout thrashing alternates DOM reads that force layout with writes that invalidate layout. Batch reads before writes, use transforms for motion, and avoid measuring after each mutation.

#### Bundling, modules, and delivery

- [Module federation](../frontend/topics/module-federation.md) — Module federation loads code from independently deployed builds at runtime. It enables separate ownership and deployment but introduces version negotiation, shared dependency, fallback, security, and observability problems.
- [Dynamic import chunking](../frontend/topics/dynamic-import-chunking.md) — Dynamic import creates async module boundaries that bundlers can split into separate chunks. It is useful for route-level, feature-level, and conditionally loaded code, but too many chunks create network overhead.
- [Code splitting strategies](../frontend/topics/code-splitting-strategies.md) — Code splitting decides which code ships together and which code loads later. Useful strategies include route splitting, component splitting, vendor splitting, permission-based loading, and interaction-triggered loading.
- [Tree shaking internals](../frontend/topics/tree-shaking-internals.md) — Tree shaking removes unused exports by static analysis of ESM imports/exports. It works best with side-effect-free modules, direct imports, and package sideEffects metadata.
- [Render blocking resources](../frontend/topics/render-blocking-resources.md) — Render-blocking resources delay first paint or meaningful rendering because the browser must fetch, parse, or execute them first. CSS, synchronous scripts, fonts, and late-discovered hero assets are common causes.
- [Critical rendering path](../frontend/topics/critical-rendering-path.md) — The critical rendering path is the sequence from HTML bytes to DOM, CSSOM, render tree, layout, paint, and composite. Optimizing it means reducing blocking resources and making important content discoverable early.

#### Event loop, data identity, and UI algorithms

- [Task starvation](../frontend/topics/task-starvation.md) — Task starvation happens when one class of work keeps the event loop from processing another. Infinite microtask chains, heavy sync loops, or too many high-priority tasks can starve input, timers, rendering, or I/O.
- [Event loop (macro vs microtasks)](../frontend/topics/event-loop-macro-vs-microtasks.md) — The event loop runs synchronous code, then microtasks, then macrotasks and rendering opportunities. Promises and queueMicrotask run before timers, which can be good for consistency but dangerous when chains are unbounded.
- [Stale closure problem](../frontend/topics/stale-closure-problem.md) — A stale closure uses values captured from an earlier render or state version. It appears in handlers, timers, promises, subscriptions, and memoized callbacks that outlive the data they closed over.
- [Memoization pitfalls](../frontend/topics/memoization-pitfalls.md) — Memoization can hide expensive work, but wrong keys, mutable inputs, unbounded caches, and referential churn can make it incorrect or slower. It is a trade-off between CPU, memory, invalidation, and complexity.
- [Referential equality](../frontend/topics/referential-equality.md) — Referential equality compares object identity rather than deep value. UI frameworks use it for memoization and update detection, so recreating objects or functions can trigger unnecessary work.
- [Immutable data patterns](../frontend/topics/immutable-data-patterns.md) — Immutable data patterns create new values instead of mutating existing state. They make change detection, undo, time travel, concurrency, and structural sharing easier.
- [Structural sharing](../frontend/topics/structural-sharing.md) — Structural sharing reuses unchanged parts of immutable data structures. It reduces memory churn and lets referential equality identify which subtrees changed.
- [Virtual DOM diffing complexity](../frontend/topics/virtual-dom-diffing-complexity.md) — Virtual DOM diffing compares previous and next trees to compute DOM operations. Keys reduce expensive ambiguity in lists, while unstable keys or deep tree churn increase work and bugs.
- [Fiber architecture](../frontend/topics/fiber-architecture.md) — Fiber architecture breaks rendering work into interruptible units. It enables prioritization, pausing, resuming, aborting, and committing work separately from rendering calculations.
- [Reconciliation algorithm](../frontend/topics/reconciliation-algorithm.md) — Reconciliation decides how a framework maps a new UI description onto existing component or DOM instances. Keyed identity, component type, position, and state preservation rules are central.
- [Time slicing](../frontend/topics/time-slicing.md) — Time slicing breaks long rendering or computation into chunks so the event loop can process input and paint. It improves responsiveness but requires work to be restartable and side effects to be delayed.
- [Concurrent rendering](../frontend/topics/concurrent-rendering.md) — Concurrent rendering lets a framework prepare new UI without immediately committing it. It enables interruptible rendering and prioritization, but requires avoiding side effects during render and preventing tearing.

### Software Engineering

#### Code structure and modularity

- [Dependency direction](../software-engineering/topics/dependency-direction.md) — Dependency direction decides which modules know about which other modules. Stable business rules should not depend on volatile delivery details such as HTTP, CLIs, files, framework adapters, or UI shells.

#### Modeling, APIs, and contracts

- [API contracts inside a codebase](../software-engineering/topics/api-contracts-inside-a-codebase.md) — Internal APIs still need contracts: inputs, outputs, side effects, errors, ordering, idempotency, and compatibility expectations. Clear internal contracts reduce coordination cost between modules and teams.
- [Backward-compatible change](../software-engineering/topics/backward-compatible-change.md) — Backward-compatible change lets existing callers continue working while new behavior rolls out. Practical compatibility includes additive fields, tolerant readers, deprecation windows, feature flags, and migration helpers.

#### Testing and quality signals

- [Property-based testing](../software-engineering/topics/property-based-testing.md) — Property-based testing checks general rules across many generated inputs instead of only named examples. It is useful for parsers, formatters, reducers, validators, and algorithms with durable invariants.
- [Mutation testing](../software-engineering/topics/mutation-testing.md) — Mutation testing changes code in small ways and checks whether tests fail. Surviving mutations show where tests execute code without proving the behavior that matters.

#### Refactoring and evolution

- [Technical debt management](../software-engineering/topics/technical-debt-management.md) — Technical debt is a design or implementation trade-off that creates future carrying cost. Good debt management names the cost, owner, trigger for repayment, and risk if it remains unpaid.
- [Legacy code characterization](../software-engineering/topics/legacy-code-characterization.md) — Characterization tests capture what legacy code currently does before changing it. They create a safety net when requirements are unclear, behavior is surprising, or refactoring must preserve quirks.
- [Feature toggle cleanup](../software-engineering/topics/feature-toggle-cleanup.md) — Feature toggles should have owners, expiry dates, and cleanup plans. Stale toggles create hidden branches, test matrix growth, configuration risk, and dead code.

#### Collaboration and delivery discipline

- [Architecture decision records](../software-engineering/topics/architecture-decision-records.md) — Architecture decision records capture the context, options, decision, and consequences of important technical choices. They help future engineers understand why a design exists before changing it.
- [Estimation and risk slicing](../software-engineering/topics/estimation-and-risk-slicing.md) — Estimation improves when work is sliced around uncertainty, dependencies, feedback, and irreversible decisions. Risk-first slices turn unknowns into evidence before committing to a large implementation path.

#### Debugging, configuration, and runtime behavior

- [Configuration boundaries](../software-engineering/topics/configuration-boundaries.md) — Configuration boundaries separate code from environment-specific values while keeping validation close to startup. Strong config boundaries prevent missing, misspelled, or incompatible settings from failing deep in runtime.
- [Performance profiling before optimization](../software-engineering/topics/performance-profiling-before-optimization.md) — Performance profiling measures where time, memory, or I/O is actually spent before changing code. Profiling protects teams from optimizing the wrong path or trading clarity for unmeasured speed.

### Design Systems

#### Foundations and taxonomy

- [Design system purpose and governance](../design-system/topics/design-system-purpose-and-governance.md) — A design system is the operating layer between product design, UI engineering, and shipped interfaces. Governance defines who can change tokens, components, Figma libraries, package APIs, documentation, and release policy.
- [Design language taxonomy](../design-system/topics/design-language-taxonomy.md) — Design language taxonomy names the primitives, patterns, templates, and product-specific exceptions in a shared vocabulary. Clear taxonomy keeps Figma names, component names, token names, and documentation aligned.
- [Accessibility as a design constraint](../design-system/topics/accessibility-as-a-design-constraint.md) — Accessibility belongs in design decisions before implementation. Color contrast, focus order, target size, motion, labels, keyboard behavior, and error messaging should be treated as design constraints, not late QA fixes.
- [Contribution model and ownership](../design-system/topics/contribution-model-and-ownership.md) — A contribution model explains how teams propose, review, build, document, and release system changes. It defines ownership across design, engineering, accessibility, product, and platform maintainers.

#### Tokens and theming

- [Design token architecture](../design-system/topics/design-token-architecture.md) — Design token architecture separates raw values, semantic decisions, component aliases, and platform outputs. This lets a color, spacing, typography, or motion decision move from design source to code without hardcoded drift.
- [Token naming and semantic layers](../design-system/topics/token-naming-and-semantic-layers.md) — Token names should encode intent rather than current visual appearance. Semantic layers such as surface, text, border, action, and feedback survive rebrands better than names like blue-500 or gray-light.
- [Figma variables to code tokens](../design-system/topics/figma-variables-to-code-tokens.md) — Figma variables become reliable code tokens only when naming, modes, aliases, exports, review, and versioning are explicit. The pipeline should detect missing mappings before app code consumes broken values.
- [Theme modes and brand theming](../design-system/topics/theme-modes-and-brand-theming.md) — Theme modes map the same semantic token names to different values for light, dark, high-contrast, brand, or tenant contexts. The component API should consume stable semantics, not mode-specific literals.
- [Token versioning and migration](../design-system/topics/token-versioning-and-migration.md) — Token versioning protects consuming apps when a token is renamed, removed, or changes meaning. Migration notes, aliases, deprecation windows, and codemods keep design changes from becoming scattered UI regressions.

#### Figma and design-code handoff

- [Design spec handoff quality](../design-system/topics/design-spec-handoff-quality.md) — Design handoff quality depends on states, content rules, accessibility notes, responsive behavior, data edge cases, and interaction timing. A polished static frame is not enough to implement durable UI.
- [Design review acceptance criteria](../design-system/topics/design-review-acceptance-criteria.md) — Design review acceptance criteria define what must be true before a component change ships: visual match, accessible behavior, documented states, responsive behavior, analytics impact, and migration guidance.

#### Component API and implementation

- [Component prop API design](../design-system/topics/component-prop-api-design.md) — Component prop APIs translate design intent into reusable engineering interfaces. Good APIs expose stable semantic choices, prevent invalid combinations, and leave room for content and accessibility requirements.
- [Slots composition and escape hatches](../design-system/topics/slots-composition-and-escape-hatches.md) — Slots and composition let product teams place custom content inside system components without forking them. Escape hatches should be deliberate, documented, and constrained so they do not undermine consistency.
- [Controlled vs uncontrolled components](../design-system/topics/controlled-vs-uncontrolled-components.md) — Controlled components let app state own the value, while uncontrolled components keep internal state until a boundary event. Design system components should choose the model that matches validation, form, and composition needs.
- [Styling strategy for component libraries](../design-system/topics/styling-strategy-for-component-libraries.md) — A component library styling strategy decides how tokens, CSS variables, cascade layers, class names, composition, and app overrides interact. The strategy should protect consistency while allowing product-specific layout.

#### Documentation, testing, and release

- [Visual regression testing](../design-system/topics/visual-regression-testing.md) — Visual regression testing compares rendered component states across changes to catch unintended appearance shifts. It is most useful when snapshots represent real supported states instead of random page screenshots.
- [Interaction and accessibility tests](../design-system/topics/interaction-and-accessibility-tests.md) — Interaction and accessibility tests verify keyboard flow, focus management, ARIA state, labels, disabled behavior, and event timing. They protect behavior that visual review alone cannot reliably catch.
- [Deprecation and migration playbooks](../design-system/topics/deprecation-and-migration-playbooks.md) — Deprecation playbooks give teams a path away from old tokens, props, variants, or components. Good migrations include timelines, warnings, codemods, examples, support windows, and removal criteria.

#### Adoption and operations

- [Adoption metrics and coverage](../design-system/topics/adoption-metrics-and-coverage.md) — Adoption metrics show where the design system is used, bypassed, forked, or missing. Coverage data helps prioritize components, migrations, docs, and support work based on real product impact.
- [Design debt triage](../design-system/topics/design-debt-triage.md) — Design debt triage ranks inconsistent UI, missing states, token drift, inaccessible patterns, and local component forks by user impact and implementation cost. It turns inconsistency into managed product debt.
- [Package distribution and consuming apps](../design-system/topics/package-distribution-and-consuming-apps.md) — Design system packages must work for consuming apps with clear peer dependencies, build outputs, versioning, tree shaking, CSS loading, and upgrade guidance. Distribution quality determines whether teams can adopt the system safely.

### Backend

#### Transport and protocol internals

- [TCP congestion control algorithms](../backend/topics/tcp-congestion-control-algorithms.md) — TCP congestion control adjusts send rate based on acknowledgements, loss, and inferred network capacity. A clear answer mentions slow start, congestion avoidance, multiplicative decrease, RTT, packet loss, and fairness.
- [TLS 1.3 handshake internals](../backend/topics/tls-1-3-handshake-internals.md) — TLS 1.3 reduces handshake round trips and encrypts more of the negotiation than TLS 1.2. Key concepts are ClientHello, key share, certificate verification, Finished messages, forward secrecy, and optional 0-RTT replay risk.
- [HTTP/2 multiplexing & HPACK](../backend/topics/http-2-multiplexing-and-hpack.md) — HTTP/2 multiplexes many streams over one TCP connection and compresses headers with HPACK dynamic tables. It removes HTTP/1.1 request queueing but can still suffer TCP-level head-of-line blocking.
- [HTTP/3 + QUIC packet loss recovery](../backend/topics/http-3-plus-quic-packet-loss-recovery.md) — HTTP/3 uses QUIC over UDP, combining TLS 1.3, multiplexed streams, connection migration, and per-stream loss recovery. Packet loss no longer blocks unrelated streams the same way HTTP/2 over TCP can.
- [Connection pooling pitfalls](../backend/topics/connection-pooling-pitfalls.md) — Connection pools reduce setup cost but can fail through exhaustion, stale sockets, head-of-line blocking, uneven load, leaks, or pool sizes that exceed database/server limits. Correct sizing and timeout behavior matter.
- [gRPC streaming + flow control](../backend/topics/grpc-streaming-plus-flow-control.md) — gRPC streaming sends multiple messages over HTTP/2 streams with flow control. A good explanation covers client/server/bidirectional streams, backpressure, message framing, deadlines, cancellation, and per-stream windows.

#### Deployment and reliability patterns

- [Zero-downtime deployment strategies](../backend/topics/zero-downtime-deployment-strategies.md) — Zero-downtime deployment keeps traffic served while replacing code. Common techniques include readiness probes, draining, blue-green, canary, backward-compatible schemas, feature flags, and fast rollback.
- [Circuit breaker + bulkhead patterns](../backend/topics/circuit-breaker-plus-bulkhead-patterns.md) — Circuit breakers stop calling failing dependencies temporarily; bulkheads isolate resource pools so one failing area does not exhaust the entire service. Together they prevent cascading failures.
- [Database failover & split-brain prevention](../backend/topics/database-failover-and-split-brain-prevention.md) — Failover promotes a standby when primary fails; split-brain occurs when multiple primaries accept writes. Prevention uses quorum, fencing tokens, leases, STONITH-style isolation, and conservative promotion rules.
- [Blue-green vs canary deployments](../backend/topics/blue-green-vs-canary-deployments.md) — Blue-green switches traffic between two full environments; canary gradually shifts a small percentage to a new version. Blue-green is simpler rollback, while canary gives safer progressive exposure.
- [Feature flags with rollout strategies](../backend/topics/feature-flags-with-rollout-strategies.md) — Feature flags decouple deploy from release and allow targeting, gradual rollout, kill switches, and experiments. Good systems need stable bucketing, auditability, cleanup, and dependency management.

#### Databases, storage, and transactions

- [Database transaction isolation levels (serializable vs snapshot)](../backend/topics/database-transaction-isolation-levels-serializable-vs-snapshot.md) — Isolation levels define which concurrent transaction anomalies are possible. Snapshot isolation gives each transaction a consistent view but can allow write skew; serializable aims to behave as if transactions ran one at a time.
- [B-tree vs LSM-tree index internals](../backend/topics/b-tree-vs-lsm-tree-index-internals.md) — B-trees maintain ordered pages for efficient point and range reads, while LSM-trees buffer writes and compact sorted files later. The trade-off is read amplification versus write throughput and compaction cost.
- [Query planner & cost-based optimization](../backend/topics/query-planner-and-cost-based-optimization.md) — A cost-based query planner estimates alternative execution plans using statistics, selectivity, join order, index availability, and I/O/CPU costs. Bad stats or parameter skew can produce poor plans.
- [Deadlock detection & prevention](../backend/topics/deadlock-detection-and-prevention.md) — Deadlocks occur when transactions wait on each other in a cycle. Databases detect cycles in wait-for graphs or prevent them with lock ordering, timeouts, smaller transactions, and consistent access patterns.
- [ACID vs BASE trade-offs](../backend/topics/acid-vs-base-trade-offs.md) — ACID emphasizes atomicity, consistency, isolation, and durability; BASE accepts softer consistency for availability and scalability. The real decision is which invariants must be immediately correct versus eventually reconciled.
- [Sharding strategies & hot partition avoidance](../backend/topics/sharding-strategies-and-hot-partition-avoidance.md) — Sharding splits data across partitions by key, range, hash, tenant, or geography. Hot partitions happen when too much traffic targets one shard and are mitigated with better keys, salting, splitting, and load-aware routing.
- [Read replicas lag monitoring](../backend/topics/read-replicas-lag-monitoring.md) — Read replica lag is the delay between primary writes and replica visibility. Monitoring should track replication position/time lag and route read-your-writes or critical reads to fresh sources when needed.
- [Database connection pool exhaustion](../backend/topics/database-connection-pool-exhaustion.md) — Pool exhaustion occurs when all DB connections are busy or leaked. Symptoms include request pileups, timeouts, and cascading latency; fixes include smaller transactions, timeouts, queue limits, and right-sized pools.
- [Prepared statement caching](../backend/topics/prepared-statement-caching.md) — Prepared statement caching reuses parsed/planned SQL statements to reduce overhead and improve safety. Pitfalls include unbounded caches, schema changes, connection-specific state, and bad generic plans.
- [Index bloat & vacuum strategies](../backend/topics/index-bloat-and-vacuum-strategies.md) — Index bloat is wasted index space from dead or outdated entries, common in MVCC systems. Vacuuming, autovacuum tuning, fillfactor choices, and periodic reindexing control space and planner quality.

#### Distributed systems and consistency

- [Two-phase commit vs Saga pattern](../backend/topics/two-phase-commit-vs-saga-pattern.md) — Two-phase commit coordinates participants for atomic commit but can block and depends on a coordinator. Sagas split work into local transactions with compensating actions, trading atomicity for availability and explicit recovery.
- [Distributed locking (Redlock pitfalls)](../backend/topics/distributed-locking-redlock-pitfalls.md) — Distributed locks are hard because clocks, partitions, pauses, and delayed clients can violate mutual exclusion. Redlock-style leases need careful TTL assumptions and often require fencing tokens to protect downstream resources.
- [CAP theorem in practice](../backend/topics/cap-theorem-in-practice.md) — CAP says that during a network partition a distributed system must choose between consistency and availability. In practice, systems make per-operation trade-offs with leader routing, quorum reads/writes, retries, and degraded modes.
- [CRDTs & conflict-free replicated data types](../backend/topics/crdts-and-conflict-free-replicated-data-types.md) — CRDTs let replicas update independently and merge deterministically without coordination. Backend use cases include counters, sets, presence, collaborative state, and eventually consistent multi-region writes.
- [Eventual consistency anti-patterns](../backend/topics/eventual-consistency-anti-patterns.md) — Eventual consistency becomes an anti-pattern when product flows require immediate guarantees but the system hides lag. Examples include stale permission reads, double spends, missing read-your-writes, and silent conflict overwrites.
- [Idempotency keys in API design](../backend/topics/idempotency-keys-in-api-design.md) — Idempotency keys let clients safely retry state-changing requests without creating duplicate side effects. The server stores the key, request fingerprint, status, and response for a defined retention window.
- [Optimistic locking with version vectors](../backend/topics/optimistic-locking-with-version-vectors.md) — Optimistic locking detects conflicts by comparing a version or vector before write commit. Version vectors track causal progress across replicas and can distinguish stale writes from concurrent writes.
- [Paxos / Raft consensus internals](../backend/topics/paxos-raft-consensus-internals.md) — Consensus protocols let distributed nodes agree on ordered state despite failures. Raft explains this through leader election, terms, logs, majorities, commit indexes, and safety rules.
- [Byzantine fault tolerance basics](../backend/topics/byzantine-fault-tolerance-basics.md) — Byzantine fault tolerance handles nodes that can lie, collude, or behave arbitrarily. Classic BFT requires more replicas than crash fault tolerance, commonly 3f+1 replicas to tolerate f Byzantine faults.
- [Exactly-once processing guarantees](../backend/topics/exactly-once-processing-guarantees.md) — Exactly-once usually means effects are applied once through idempotency and transactions, not that messages are delivered once. Strong answers distinguish delivery, processing, side effects, offsets, and sink commits.

#### Messaging, streams, and event-driven systems

- [Kafka partition rebalancing & exactly-once semantics](../backend/topics/kafka-partition-rebalancing-and-exactly-once-semantics.md) — Kafka rebalancing moves partitions across consumers when group membership changes, causing pauses and offset coordination. Exactly-once semantics rely on idempotent producers, transactions, committed offsets, and careful sink behavior.
- [RabbitMQ dead-letter queues & message ordering](../backend/topics/rabbitmq-dead-letter-queues-and-message-ordering.md) — RabbitMQ dead-letter queues capture rejected, expired, or failed messages for later handling. Ordering can be broken by retries, multiple consumers, requeueing, priorities, and dead-letter routing.
- [Message-driven architecture (Akka / Orleans)](../backend/topics/message-driven-architecture-akka-orleans.md) — Message-driven architecture structures systems around asynchronous messages and handlers. It improves decoupling and resilience but introduces delivery guarantees, ordering, retries, idempotency, and observability requirements.
- [CQRS + Event Sourcing projections](../backend/topics/cqrs-plus-event-sourcing-projections.md) — CQRS separates command writes from query reads, and event sourcing records state changes as events. Projections build read models from those events and must handle replay, lag, schema changes, and idempotency.
- [Outbox pattern for reliable events](../backend/topics/outbox-pattern-for-reliable-events.md) — The outbox pattern writes domain data and an event record in the same database transaction, then a relay publishes the event. It avoids losing events between DB commit and broker publish.
- [Background job queues (Celery / BullMQ) retry semantics](../backend/topics/background-job-queues-celery-bullmq-retry-semantics.md) — Job queues need explicit retry, backoff, dead-letter, timeout, and idempotency semantics. Without them, jobs can duplicate side effects, poison queues, or hide permanent failures behind endless retries.
- [Data pipeline backpressure handling](../backend/topics/data-pipeline-backpressure-handling.md) — Pipeline backpressure prevents upstream producers from overwhelming downstream consumers. It is implemented with bounded queues, credits, pull-based reads, pause/resume, rate limits, and load shedding.
- [Idempotent consumers in event streams](../backend/topics/idempotent-consumers-in-event-streams.md) — Idempotent consumers handle duplicate events safely by recording processed IDs, using natural keys, checking versions, or making writes commutative. This is required because retries and rebalances can redeliver messages.

#### API design, auth, and edge controls

- [GraphQL resolver batching & N+1 problem](../backend/topics/graphql-resolver-batching-and-n-plus-1-problem.md) — The GraphQL N+1 problem happens when nested resolvers issue one backend query per parent object. Batching and caching loaders group keys per tick or request to reduce queries while preserving resolver composition.
- [OAuth2 token introspection vs JWT validation](../backend/topics/oauth2-token-introspection-vs-jwt-validation.md) — JWT validation checks signed claims locally, while token introspection asks the authorization server whether a token is active. JWTs reduce latency but are harder to revoke instantly; introspection centralizes truth but adds network dependency.
- [Rate limiting algorithms (token bucket vs leaky bucket)](../backend/topics/rate-limiting-algorithms-token-bucket-vs-leaky-bucket.md) — Token bucket allows bursts up to bucket capacity while refilling over time; leaky bucket smooths output at a fixed rate. The right choice depends on burst tolerance, fairness, and user experience.
- [API gateway throttling & caching layers](../backend/topics/api-gateway-throttling-and-caching-layers.md) — API gateways enforce cross-cutting policies such as auth, rate limits, request validation, caching, and routing. Caching must vary on identity, authorization, headers, and query shape to avoid data leaks.
- [API contract testing (Pact / Spring Cloud Contract)](../backend/topics/api-contract-testing-pact-spring-cloud-contract.md) — Contract testing verifies that providers and consumers agree on request/response behavior. It catches breaking changes earlier than full integration tests and supports independent service deployment.
- [Backward-compatible schema evolution](../backend/topics/backward-compatible-schema-evolution.md) — Backward-compatible schema evolution changes APIs or events without breaking old consumers. Common moves are additive fields, default values, tolerant readers, deprecation windows, and dual-read/write migrations.
- [Protobuf vs JSON performance trade-offs](../backend/topics/protobuf-vs-json-performance-trade-offs.md) — Protobuf is compact, typed, and schema-driven; JSON is human-readable and ubiquitous. Trade-offs include payload size, CPU parse cost, compatibility rules, introspection, tooling, and browser/debug ergonomics.

#### Observability and operations

- [Observability: OpenTelemetry tracing propagation](../backend/topics/observability-opentelemetry-tracing-propagation.md) — Tracing propagation carries trace and span context across service boundaries. OpenTelemetry standardizes context extraction/injection so logs, metrics, and spans can be correlated across distributed requests.
- [Prometheus metric cardinality explosion](../backend/topics/prometheus-metric-cardinality-explosion.md) — Cardinality explosion happens when labels create too many unique time series. User IDs, raw URLs, emails, request IDs, and high-cardinality dimensions can make Prometheus expensive or unusable.
- [Log aggregation with sampling](../backend/topics/log-aggregation-with-sampling.md) — Log sampling reduces volume while preserving important signals. Good policies keep all errors/security events, sample noisy success paths, and attach trace IDs so sampled logs still join a request story.
- [Chaos engineering principles](../backend/topics/chaos-engineering-principles.md) — Chaos engineering tests resilience by injecting controlled failures into production-like systems. It should start with hypotheses, blast-radius limits, rollback, observability, and learning from the result.
- [Microservices observability (distributed tracing)](../backend/topics/microservices-observability-distributed-tracing.md) — Distributed tracing follows one request across services, queues, and databases. It requires context propagation, span naming discipline, sampling, baggage caution, and correlation with logs and metrics.

#### Runtime, OS, and performance engineering

- [Memory-mapped files vs traditional I/O](../backend/topics/memory-mapped-files-vs-traditional-i-o.md) — Memory-mapped files map file pages into process address space, letting the OS page data in lazily. Traditional I/O copies through explicit buffers. Node does not expose mmap directly, so streams and buffers are the usual tools.
- [Garbage collection tuning (G1 vs ZGC)](../backend/topics/garbage-collection-tuning-g1-vs-zgc.md) — G1 and ZGC are JVM collectors with different pause/throughput trade-offs; in Node the analogous topic is V8 heap sizing and GC behavior. Strong explanations separate allocation rate, live set, pause time, and throughput.
- [Thread pools vs virtual threads (Project Loom)](../backend/topics/thread-pools-vs-virtual-threads-project-loom.md) — Thread pools bound scarce OS threads; virtual threads multiplex many blocking-style tasks onto fewer carrier threads in the JVM. In Node, the closest contrast is async I/O plus worker threads for CPU-bound work.
- [Actor model vs shared-memory concurrency](../backend/topics/actor-model-vs-shared-memory-concurrency.md) — The actor model isolates state behind message queues, while shared-memory concurrency shares mutable state with locks or atomics. Actors simplify reasoning but require backpressure and message ordering design.
- [Binary protocol parsing](../backend/topics/binary-protocol-parsing.md) — Binary protocol parsing reads structured fields from byte buffers using offsets, endianness, lengths, and framing rules. Correct parsers defend against partial frames, oversized lengths, and malicious input.
- [Zero-copy networking (sendfile)](../backend/topics/zero-copy-networking-sendfile.md) — Zero-copy networking avoids copying file data through user-space buffers, often with sendfile-like kernel paths. Node typically approximates this with efficient streams, though true sendfile exposure depends on runtime/platform.
- [epoll / kqueue internals](../backend/topics/epoll-kqueue-internals.md) — epoll and kqueue are OS event notification mechanisms for scalable nonblocking I/O. Node relies on libuv abstractions over these primitives to drive sockets, timers, and file events.
- [Syscall overhead & context switching](../backend/topics/syscall-overhead-and-context-switching.md) — System calls and context switches cross boundaries between user space, kernel space, and runnable tasks. Batching, buffering, async I/O, and fewer tiny writes reduce overhead.
- [Memory barriers & CPU cache coherence](../backend/topics/memory-barriers-and-cpu-cache-coherence.md) — Memory barriers constrain how CPU cores reorder reads/writes so shared-memory programs observe safe ordering. In JavaScript, Atomics operations on SharedArrayBuffer provide the relevant synchronization primitives.
- [Lock-free data structures](../backend/topics/lock-free-data-structures.md) — Lock-free data structures use atomic operations instead of mutexes so system-wide progress continues even if one thread stalls. They are hard to design because of ABA, memory ordering, and contention.
- [Virtual memory & page faults impact](../backend/topics/virtual-memory-and-page-faults-impact.md) — Virtual memory lets processes use address spaces backed by physical memory and disk. Page faults occur when needed pages are not resident, causing latency from allocation, disk, or OS bookkeeping.

#### Cloud, containers, and service topology

- [Kubernetes pod disruption budgets](../backend/topics/kubernetes-pod-disruption-budgets.md) — Pod disruption budgets limit voluntary disruptions so enough replicas remain available during drains, upgrades, or maintenance. They are useful only when paired with enough replicas, readiness probes, and capacity.
- [Service mesh traffic shifting](../backend/topics/service-mesh-traffic-shifting.md) — Service mesh traffic shifting routes percentages of traffic between versions or services using proxy control planes. It supports canary, blue-green, retries, and mTLS, but adds latency, complexity, and debugging surface.
- [Serverless cold-start mitigation](../backend/topics/serverless-cold-start-mitigation.md) — Cold starts happen when a serverless runtime initializes before handling a request. Mitigation includes smaller bundles, hoisted clients, lazy initialization, provisioned concurrency, and avoiding heavy startup work.
- [Container runtime security (seccomp, AppArmor)](../backend/topics/container-runtime-security-seccomp-apparmor.md) — Container runtime security restricts what a process can do despite sharing the host kernel. seccomp filters syscalls, AppArmor/SELinux constrain access, and least-privilege settings reduce blast radius.
- [Sidecar pattern limitations](../backend/topics/sidecar-pattern-limitations.md) — Sidecars add colocated helper processes for proxying, logging, security, or config. Limitations include extra hops, resource overhead, lifecycle coupling, harder debugging, and duplicated functionality per pod.
- [Service discovery (Consul vs DNS)](../backend/topics/service-discovery-consul-vs-dns.md) — Service discovery maps logical service names to healthy instances. DNS is simple and ubiquitous; Consul-style systems can add health checks, metadata, watches, and stronger service catalog semantics.

#### Caching, hashing, and approximate data structures

- [Distributed cache invalidation (cache-aside vs write-through)](../backend/topics/distributed-cache-invalidation-cache-aside-vs-write-through.md) — Cache-aside loads on miss and invalidates after writes; write-through writes cache and database together. Distributed invalidation must handle races, partial failures, versioning, and cross-node propagation delay.
- [Eventual consistency in cache](../backend/topics/eventual-consistency-in-cache.md) — Eventually consistent caches can serve stale data after writes, invalidations, or replication delays. Safe design scopes staleness, uses versions, routes critical reads to truth, and avoids caching irreversible authorization decisions incorrectly.
- [Bloom filters & HyperLogLog in practice](../backend/topics/bloom-filters-and-hyperloglog-in-practice.md) — Bloom filters answer maybe-present/definitely-not-present with false positives; HyperLogLog estimates cardinality with small memory. Both trade exactness for speed and memory efficiency.
- [Consistent hashing for load balancing](../backend/topics/consistent-hashing-for-load-balancing.md) — Consistent hashing maps keys to nodes so adding or removing nodes moves only a fraction of keys. It is useful for caches, shards, and load balancing with reduced remapping churn.

### System Design

#### Design process and trade-offs

- [Functional vs non-functional requirements](../system-design/topics/functional-vs-non-functional-requirements.md) — Functional requirements describe what the system must do, while non-functional requirements describe qualities such as latency, availability, privacy, durability, scale, and cost. Senior design work makes both explicit before choosing components.
- [SLOs and error budgets](../system-design/topics/slos-and-error-budgets.md) — SLOs define target reliability for user-visible behavior, while error budgets quantify how much unreliability the system can spend. They turn vague reliability goals into decisions about release pace, alerting, redundancy, and degradation.

#### Scale, capacity, and latency

- [Capacity estimation](../system-design/topics/capacity-estimation.md) — Capacity estimation turns traffic, payload size, storage retention, fanout, and peak multipliers into concrete throughput and storage numbers. The goal is not perfect prediction; it is making bottlenecks and scaling assumptions visible.
- [Latency budget decomposition](../system-design/topics/latency-budget-decomposition.md) — A latency budget splits an end-to-end target across client work, network hops, edge logic, services, databases, queues, and third-party calls. It helps identify where parallelism, caching, streaming, or simplification is required.

#### Boundaries and topology

- [Client-edge-service boundaries](../system-design/topics/client-edge-service-boundaries.md) — Client, edge, and service boundaries decide where validation, personalization, caching, rendering, authorization, and aggregation live. Good boundaries reduce latency and coupling without leaking trusted responsibilities to untrusted environments.
- [API gateway and BFF boundaries](../system-design/topics/api-gateway-and-bff-boundaries.md) — An API gateway applies cross-cutting concerns such as auth, rate limits, caching, and routing, while a backend-for-frontend shapes APIs around a specific client experience. Mixing them carelessly can create a slow, overloaded coordination layer.
- [Read path vs write path design](../system-design/topics/read-path-vs-write-path-design.md) — Read paths and write paths often need different guarantees, storage models, caches, and scaling strategies. Separating them clarifies which flows require immediate correctness and which can tolerate projection lag or denormalized views.
- [Control plane vs data plane](../system-design/topics/control-plane-vs-data-plane.md) — The control plane configures policy and desired state, while the data plane handles the high-volume request or data path. Separating them keeps runtime traffic fast and resilient even when management workflows are slower or partially unavailable.

#### Data, consistency, and workflows

- [Data modeling from access patterns](../system-design/topics/data-modeling-from-access-patterns.md) — Access-pattern-first data modeling starts with queries, writes, cardinality, ordering, and consistency needs before choosing tables, documents, indexes, or streams. It prevents elegant schemas that cannot serve real traffic.
- [Cache placement and invalidation](../system-design/topics/cache-placement-and-invalidation.md) — Cache placement decides whether data is cached in the browser, edge, gateway, service, database layer, or client state. Invalidation must match freshness requirements, user specificity, mutation flow, and failure behavior.
- [Partitioning and tenant isolation](../system-design/topics/partitioning-and-tenant-isolation.md) — Partitioning splits data and traffic across shards, tenants, regions, or cells. Tenant isolation adds blast-radius control so one large or unhealthy tenant does not degrade unrelated customers.
- [Read freshness routing](../system-design/topics/read-freshness-routing.md) — Read freshness routing chooses between replicas, caches, primaries, or quorum reads based on how fresh a response must be. It is the system-level version of making read-your-writes and stale-data rules explicit.
- [Async workflow design](../system-design/topics/async-workflow-design.md) — Async workflow design coordinates durable state changes across queues, jobs, events, retries, and compensations. The design must define ownership, idempotency, retry semantics, visibility, and recovery after partial progress.

#### Reliability and operations

- [Failure mode analysis](../system-design/topics/failure-mode-analysis.md) — Failure mode analysis lists what can break, how the system detects it, what user impact it creates, and which mitigation applies. It converts architecture diagrams from happy-path pictures into operable designs.
- [Backpressure and load shedding](../system-design/topics/backpressure-and-load-shedding.md) — Backpressure slows producers when downstream systems are saturated, while load shedding rejects or drops work deliberately to preserve critical paths. A design should define queue limits, priorities, retry rules, and user-visible errors.
- [Degradation and fallback design](../system-design/topics/degradation-and-fallback-design.md) — Degradation and fallback design decides which features can be disabled, simplified, cached, or delayed when dependencies fail. Good fallbacks are intentional product states, not accidental error handling.
- [Disaster recovery objectives (RTO/RPO)](../system-design/topics/disaster-recovery-objectives-rto-rpo.md) — RTO is how long recovery may take, and RPO is how much data loss is acceptable. These objectives drive backup frequency, replication, failover automation, drills, and whether the design needs active-active or active-passive recovery.
- [Operational readiness review](../system-design/topics/operational-readiness-review.md) — Operational readiness checks whether a system can be deployed, observed, rolled back, debugged, scaled, secured, and supported before it handles real traffic. It is the practical bridge between design and production ownership.
- [Tracing across async workflows](../system-design/topics/tracing-across-async-workflows.md) — Tracing across async workflows carries correlation through requests, events, jobs, retries, and projections. Without it, the system can appear healthy while individual user workflows disappear between components.
- [Runbook and alert design](../system-design/topics/runbook-and-alert-design.md) — Runbook and alert design connects symptoms to ownership, impact, first checks, mitigation, and escalation. Alerts should be tied to user impact or fast-burn risk, not every noisy internal metric.
- [Release strategy selection](../system-design/topics/release-strategy-selection.md) — Release strategy selection chooses between rolling, blue-green, canary, feature flags, shadow traffic, and migrations based on blast radius, reversibility, data compatibility, and confidence signals.

#### Security, abuse, and governance

- [Threat modeling at system boundaries](../system-design/topics/threat-modeling-at-system-boundaries.md) — Threat modeling at system boundaries identifies trust zones, entry points, assets, attackers, and mitigations. It keeps security connected to architecture instead of treating it as a checklist after implementation.
- [Abuse and quota controls](../system-design/topics/abuse-and-quota-controls.md) — Abuse and quota controls protect systems from spam, scraping, brute force, runaway automation, and unfair resource use. Effective designs combine identity, rate limits, quotas, anomaly detection, and appeal paths.
- [Secret and configuration boundaries](../system-design/topics/secret-and-configuration-boundaries.md) — Secret and configuration boundaries define where credentials, feature flags, tenant settings, and runtime policy may live. A safe design prevents secrets from leaking to clients, logs, traces, build artifacts, or untrusted plugins.

#### Cost, evolution, and decision records

- [Cost-aware architecture](../system-design/topics/cost-aware-architecture.md) — Cost-aware architecture models the cost drivers of traffic, storage, compute, egress, third-party APIs, observability, and operational effort. It does not mean choosing the cheapest path; it means making cost part of the design trade-off.
- [Build vs buy evaluation](../system-design/topics/build-vs-buy-evaluation.md) — Build vs buy evaluation compares capability fit, integration risk, lock-in, security, operations, support, cost curves, and strategic differentiation. The useful answer is often a staged decision, not a permanent ideology.
- [Migration and strangler patterns](../system-design/topics/migration-and-strangler-patterns.md) — Migration and strangler patterns replace systems incrementally by routing slices of traffic or capability to the new path while the old path keeps running. The design must include parity checks, rollback, data sync, and ownership boundaries.
- [Architecture decision records](../system-design/topics/architecture-decision-records.md) — Architecture decision records capture context, decision, alternatives, consequences, and revisit triggers. They preserve the reasoning behind trade-offs so future engineers can change direction without rediscovering old constraints.

### AI Engineering

#### LLM fundamentals and model behavior

- [Tokens and context windows](../ai-engineering/topics/tokens-and-context-windows.md) — Tokens are the model's input and output units, and the context window is the bounded working set the model can attend to. Practical AI engineering treats context as a scarce budget shared by instructions, user input, retrieved sources, tools, and output.
- [Sampling, temperature, and top-p](../ai-engineering/topics/sampling-temperature-and-top-p.md) — Sampling settings change how the model chooses among likely next tokens. Temperature affects sharpness, top-p limits the candidate probability mass, and both must be tuned around task type, determinism needs, and evaluation signals.
- [Model capability fit](../ai-engineering/topics/model-capability-fit.md) — Model capability fit matches a task to a model based on reasoning depth, tool use, latency, context length, language coverage, multimodal needs, cost, and safety behavior. The best model is the one that meets the product constraint, not always the largest model.
- [Latency, throughput, and batching](../ai-engineering/topics/latency-throughput-and-batching.md) — AI latency includes queueing, prompt assembly, model time, streaming cadence, tool calls, and post-processing. Throughput work often introduces batching or caching, which must be balanced against tail latency and personalization.

#### Prompting and context engineering

- [Instruction hierarchy](../ai-engineering/topics/instruction-hierarchy.md) — Instruction hierarchy defines which instructions outrank others, such as system policy, developer intent, tool constraints, retrieved content, and user requests. It is the foundation for keeping model behavior stable when context contains conflicting text.
- [Prompt templates and variables](../ai-engineering/topics/prompt-templates-and-variables.md) — Prompt templates separate fixed instructions from dynamic variables, making prompts easier to test, version, localize, and audit. Safe templates escape or delimit untrusted inputs so data is not confused with instructions.
- [Context pruning and summarization](../ai-engineering/topics/context-pruning-and-summarization.md) — Context pruning chooses what to keep, compress, or drop as a conversation or task grows. Good pruning preserves goals, constraints, current state, source citations, and unresolved decisions instead of blindly keeping recent messages.
- [Few-shot examples](../ai-engineering/topics/few-shot-examples.md) — Few-shot examples demonstrate the target input-output pattern inside the prompt. They are most useful when they cover edge cases, failure modes, tone, structure, or domain-specific transformations that plain instructions underspecify.

#### Structured outputs and tool use

- [JSON schema constrained output](../ai-engineering/topics/json-schema-constrained-output.md) — Schema-constrained output makes model responses machine-checkable by defining required fields, types, enums, arrays, and nesting. It reduces parser fragility, but downstream code must still validate and handle refusals or partial failures.
- [Tool calling contracts](../ai-engineering/topics/tool-calling-contracts.md) — Tool calling contracts define the names, arguments, permissions, side effects, return values, and error semantics of tools the model may request. Strong contracts keep the model as a planner while application code remains the executor.
- [Tool dispatch and validation](../ai-engineering/topics/tool-dispatch-and-validation.md) — Tool dispatch maps model-requested tool calls to allowed application functions after validating tool name, arguments, permissions, and expected side effects. Dispatch code is a security boundary, not just plumbing.
- [Tool permission boundaries](../ai-engineering/topics/tool-permission-boundaries.md) — Tool permission boundaries restrict what the model can cause the system to read, write, spend, send, delete, or expose. Permission should be based on user authorization, task context, tool risk, and confirmation requirements.

#### Retrieval and knowledge grounding

- [Embeddings and cosine similarity](../ai-engineering/topics/embeddings-and-cosine-similarity.md) — Embeddings map text or other content into vectors so semantic similarity can be searched. Cosine similarity is a common scoring method, but retrieval quality also depends on chunking, metadata, filters, freshness, and reranking.
- [Chunking and metadata strategy](../ai-engineering/topics/chunking-and-metadata-strategy.md) — Chunking splits source material into retrieval units, while metadata carries source, ownership, freshness, access control, hierarchy, and document structure. Bad chunking can make good embeddings look weak.
- [RAG retrieval pipeline](../ai-engineering/topics/rag-retrieval-pipeline.md) — Retrieval-augmented generation pulls relevant source material into model context before generation. A production RAG pipeline includes indexing, filtering, retrieval, reranking, source packing, answer generation, and citation or grounding checks.
- [Reranking and hybrid search](../ai-engineering/topics/reranking-and-hybrid-search.md) — Reranking reorders retrieved candidates using a stronger relevance signal, while hybrid search combines lexical and vector retrieval. These techniques improve grounding when semantic search alone misses exact terms, IDs, or rare phrases.
- [Conversation memory vs source of truth](../ai-engineering/topics/conversation-memory-vs-source-of-truth.md) — Conversation memory is the model-facing summary of interaction state, while the source of truth is the durable system record. Designs should avoid letting generated summaries silently overwrite authoritative data.

#### Evaluation and observability

- [Golden set evals](../ai-engineering/topics/golden-set-evals.md) — Golden set evals use curated examples with expected behavior to measure prompt, model, retrieval, and tool changes. Good sets include common cases, edge cases, regressions, and unacceptable outputs.
- [LLM-as-judge pitfalls](../ai-engineering/topics/llm-as-judge-pitfalls.md) — LLM-as-judge evals can scale qualitative review, but judges have bias, drift, prompt sensitivity, and blind spots. They need calibration against human labels, clear rubrics, disagreement tracking, and spot checks.
- [Trace logging for AI features](../ai-engineering/topics/trace-logging-for-ai-features.md) — AI traces record prompts, model choices, tool calls, retrieval inputs, outputs, latency, cost, and policy decisions with sensitive data controls. They are required to debug quality regressions and production incidents.
- [Prompt regression testing](../ai-engineering/topics/prompt-regression-testing.md) — Prompt regression testing checks that prompt, model, tool, or retrieval changes do not break known behavior. The useful unit is the whole AI interaction contract, not just prompt text.

#### Safety, security, and data handling

- [Prompt injection defense](../ai-engineering/topics/prompt-injection-defense.md) — Prompt injection defense treats retrieved content, web pages, documents, and user text as untrusted data that may contain instructions. Defenses include instruction hierarchy, source isolation, tool permission checks, allowlists, and confirmation gates.
- [Output guardrails](../ai-engineering/topics/output-guardrails.md) — Output guardrails validate model responses before display, execution, storage, or sending. They can enforce schema, policy, unsafe-content checks, citation requirements, numeric bounds, or human review.
- [PII redaction and data minimization](../ai-engineering/topics/pii-redaction-and-data-minimization.md) — PII redaction and data minimization reduce sensitive data exposure in prompts, logs, traces, evals, and vendor calls. The safest token is the one never sent, logged, or retained unnecessarily.
- [Refusal and escalation paths](../ai-engineering/topics/refusal-and-escalation-paths.md) — Refusal and escalation paths define what the product does when the model cannot safely or confidently complete a request. Good designs preserve user trust with clear alternatives, support handoff, or constrained partial help.

#### Agentic workflows

- [Agent loop design](../ai-engineering/topics/agent-loop-design.md) — An agent loop repeatedly observes state, decides next action, calls tools, records results, and stops when the goal is complete or blocked. The hard parts are stopping criteria, state, permissions, retries, and recovery.
- [Plan-execute-observe cycles](../ai-engineering/topics/plan-execute-observe-cycles.md) — Plan-execute-observe cycles split agent work into an explicit plan, bounded actions, and evidence-based updates. They help keep long tasks auditable and prevent the agent from drifting away from the objective.
- [Human-in-the-loop checkpoints](../ai-engineering/topics/human-in-the-loop-checkpoints.md) — Human-in-the-loop checkpoints pause an AI workflow before high-risk actions, ambiguous decisions, expensive operations, or irreversible side effects. They should be placed by risk, not sprinkled everywhere.
- [Long-running task state](../ai-engineering/topics/long-running-task-state.md) — Long-running task state stores objective, plan, decisions, tool results, unresolved blockers, budgets, and verification evidence. Without durable state, agent workflows become hard to resume, audit, or debug.

#### Model operations, cost, and rollout

- [Model routing and fallback](../ai-engineering/topics/model-routing-and-fallback.md) — Model routing sends requests to different models based on task complexity, latency target, cost budget, context size, availability, safety policy, or tenant tier. Fallback should preserve correctness boundaries, not just retry anywhere.
- [Cost controls and response caching](../ai-engineering/topics/cost-controls-and-response-caching.md) — Cost controls for AI systems include token budgets, model routing, prompt trimming, batch processing, response caching, tenant quotas, and observability. Caching is safest for deterministic, non-user-specific, policy-stable outputs.
- [Streaming AI UX](../ai-engineering/topics/streaming-ai-ux.md) — Streaming AI UX delivers partial output as it is generated, improving perceived latency and enabling cancellation. It must handle partial sentences, tool-call pauses, errors, moderation, and final-state reconciliation.
- [AI feature rollout](../ai-engineering/topics/ai-feature-rollout.md) — AI feature rollout introduces model-backed behavior gradually with flags, eval gates, tracing, human review, fallback, and cost monitoring. Rollout plans should account for quality drift as well as uptime.

### Data & Storage Engineering

#### Relational modeling and SQL

- [Temporal data modeling](../data-storage/topics/temporal-data-modeling.md) — Temporal modeling captures when facts are valid, when the system learned them, and how history changes. It matters for auditability, pricing, entitlement windows, late-arriving updates, and reproducible analytics.

#### Indexing and query performance

- [Index selection and covering indexes](../data-storage/topics/index-selection-and-covering-indexes.md) — Index selection matches workload filters, joins, ordering, uniqueness, and projection columns. Covering indexes can serve a query without visiting base rows, but they increase write cost and storage.
- [Query execution plan reading](../data-storage/topics/query-execution-plan-reading.md) — Query plans show how the database intends to scan, join, sort, aggregate, and estimate row counts. Reading plans helps diagnose missing indexes, stale statistics, bad join order, and memory-heavy operations.
- [Statistics and cardinality estimation](../data-storage/topics/statistics-and-cardinality-estimation.md) — Statistics and cardinality estimates let a planner compare possible execution paths. Bad estimates from skew, correlation, stale stats, or parameter sensitivity can make reasonable SQL run poorly.
- [Hot query and slow query triage](../data-storage/topics/hot-query-and-slow-query-triage.md) — Hot query triage identifies the queries that dominate database load by frequency, latency, rows scanned, lock wait, and memory use. Fixes can include index changes, query rewrites, caching, pagination, or product flow changes.

#### Transactions, migrations, and integrity

- [Transaction boundary design](../data-storage/topics/transaction-boundary-design.md) — Transaction boundary design decides which reads and writes must commit atomically, how long locks are held, and what invariants need isolation. Boundaries that are too wide hurt concurrency; too narrow leak partial state.
- [Schema migration expand-contract](../data-storage/topics/schema-migration-expand-contract.md) — Expand-contract migrations introduce schema changes in backward-compatible phases: expand, dual-read/write or backfill, cut over, then contract. This keeps old and new code safe during rolling deploys.
- [Online backfills](../data-storage/topics/online-backfills.md) — Online backfills update existing data while production traffic continues. Safe backfills use batches, checkpoints, idempotency, throttling, observability, and rollback or pause behavior.
- [Idempotent data writes](../data-storage/topics/idempotent-data-writes.md) — Idempotent writes make retries safe by using stable operation IDs, uniqueness constraints, upserts, or processed-event tables. They are essential when clients, workers, or queues can repeat work.

#### Storage topology and replication

- [Partitioning and sharding strategy](../data-storage/topics/partitioning-and-sharding-strategy.md) — Partitioning and sharding split data by tenant, key, hash, range, geography, or workload. A good strategy minimizes hot partitions, cross-shard joins, rebalancing pain, and tenant blast radius.
- [Replication lag and read scaling](../data-storage/topics/replication-lag-and-read-scaling.md) — Read replicas increase read capacity but introduce freshness lag and failover complexity. Designs must define which reads can be stale, how lag is measured, and when to route to the primary.
- [Backup, restore, and point-in-time recovery](../data-storage/topics/backup-restore-and-point-in-time-recovery.md) — Backups only matter if restores are tested. Point-in-time recovery combines base backups and logs to restore to a chosen moment, bounded by RPO, RTO, retention, and access controls.
- [Time-series data modeling](../data-storage/topics/time-series-data-modeling.md) — Time-series modeling optimizes append-heavy measurements with timestamps, tags, retention, rollups, downsampling, and query windows. It is common in observability, IoT, billing, and analytics.

#### Analytics, pipelines, and governance

- [CDC and event streams](../data-storage/topics/cdc-and-event-streams.md) — Change data capture turns database changes into ordered event streams for replication, search indexing, analytics, or integration. It must handle ordering, deletes, schema evolution, backfills, and replay.
- [Warehouse modeling and fact tables](../data-storage/topics/warehouse-modeling-and-fact-tables.md) — Warehouse modeling organizes analytical data around facts, dimensions, grain, slowly changing dimensions, and business definitions. It keeps reporting consistent across teams and tools.
- [Semantic metrics layer](../data-storage/topics/semantic-metrics-layer.md) — A semantic metrics layer defines measures, dimensions, filters, windows, and ownership once so dashboards and product analysis agree. It prevents each report from inventing a different version of revenue or active users.
- [Deduplication and late-arriving data](../data-storage/topics/deduplication-and-late-arriving-data.md) — Deduplication and late-arriving data handling keep analytical results correct when events are retried, delayed, reordered, or replayed. Designs need stable IDs, watermarks, correction windows, and recomputation paths.
- [Data retention and archival policy](../data-storage/topics/data-retention-and-archival-policy.md) — Retention and archival policy define how long data stays hot, warm, cold, anonymized, or deleted. It balances product needs, cost, legal obligations, privacy, and restore expectations.
- [Vector storage and retrieval](../data-storage/topics/vector-storage-and-retrieval.md) — Vector storage supports similarity search over embeddings with indexes, metadata filters, refresh policies, and recall-latency trade-offs. It is useful for AI retrieval, recommendations, duplicate detection, and semantic search.

### Platform Engineering

#### Source control, CI, and release automation

- [Generated artifact drift checks](../platform-engineering/topics/generated-artifact-drift-checks.md) — Generated artifact drift checks run the generator in CI and fail when committed generated output is stale. This protects source-of-truth workflows without letting CI silently rewrite reviewed code.
- [Deployment strategy selection](../platform-engineering/topics/deployment-strategy-selection.md) — Deployment strategy selection chooses rolling, blue-green, canary, shadow, or feature-flagged rollout based on reversibility, data compatibility, blast radius, and signal quality.
- [Rollback and roll-forward planning](../platform-engineering/topics/rollback-and-roll-forward-planning.md) — Rollback and roll-forward planning defines what happens when a release fails. The plan must account for code, config, data migrations, caches, messages, and external side effects.

#### Infrastructure, environments, and cloud networking

- [Infrastructure as Code state](../platform-engineering/topics/infrastructure-as-code-state.md) — Infrastructure as Code state records the known deployed resources and their desired configuration. State must be locked, backed up, reviewed, and protected because it is a control surface for production.

#### Containers, orchestration, and runtime platforms

- [Kubernetes workload primitives](../platform-engineering/topics/kubernetes-workload-primitives.md) — Kubernetes workload primitives such as Deployments, StatefulSets, Jobs, Services, ConfigMaps, Secrets, and Ingresses describe desired runtime state. Engineers should know what each primitive owns and does not own.
- [Autoscaling signal selection](../platform-engineering/topics/autoscaling-signal-selection.md) — Autoscaling signal selection chooses metrics that indicate real demand, such as CPU, memory, queue depth, request concurrency, or custom service latency. Bad signals can scale too late, too far, or in the wrong direction.
- [Serverless operational constraints](../platform-engineering/topics/serverless-operational-constraints.md) — Serverless platforms remove server management but introduce limits around cold starts, execution duration, concurrency, packaging, network access, and observability. The runtime shape must fit the workload.

#### Security, identity, and supply chain

- [Secrets management and rotation](../platform-engineering/topics/secrets-management-and-rotation.md) — Secrets management controls how credentials are created, stored, injected, rotated, audited, and revoked. Rotation must be designed so old and new credentials can overlap safely.
- [IAM least privilege](../platform-engineering/topics/iam-least-privilege.md) — IAM least privilege grants only the actions and resources needed for a role. It requires scoping by identity, environment, action, resource, condition, and operational break-glass paths.
- [Supply chain provenance](../platform-engineering/topics/supply-chain-provenance.md) — Supply chain provenance records where artifacts came from, how they were built, and what source revision produced them. It supports auditability, tamper detection, and safer deployment policy.

#### Observability, incidents, and operations

- [Alert routing and ownership](../platform-engineering/topics/alert-routing-and-ownership.md) — Alert routing and ownership connect symptoms to responsible teams, escalation policies, runbooks, and user impact. Alerts without owners become noise; owners without context burn out.
- [Incident command and postmortems](../platform-engineering/topics/incident-command-and-postmortems.md) — Incident command coordinates roles, communication, mitigation, timeline, and follow-up during production incidents. Postmortems turn incidents into system improvements without blame.
- [SLO burn-rate alerting](../platform-engineering/topics/slo-burn-rate-alerting.md) — SLO burn-rate alerting pages when a service consumes its error budget too quickly across short and long windows. It connects alert urgency to user-visible reliability targets.
- [Cost allocation and FinOps](../platform-engineering/topics/cost-allocation-and-finops.md) — Cost allocation and FinOps connect platform spend to teams, products, environments, and unit economics. Good systems expose cost drivers early enough for engineering decisions to change them.

#### Developer experience and platform product

- [Golden paths and service templates](../platform-engineering/topics/golden-paths-and-service-templates.md) — Golden paths and templates encode recommended architecture, CI, deployment, observability, security, and ownership defaults. They reduce repeated decisions without blocking teams that need justified exceptions.
- [Feature flag operations](../platform-engineering/topics/feature-flag-operations.md) — Feature flag operations manage targeting, ownership, cleanup, defaults, audit logs, and failure behavior. Without lifecycle discipline, flags become hidden production configuration debt.
- [Configuration management and dynamic rollout](../platform-engineering/topics/configuration-management-and-dynamic-rollout.md) — Configuration management separates deploy-time code from runtime policy. Dynamic rollout lets teams change behavior safely, but requires validation, auditability, scoping, rollback, and cache invalidation.

### Network Engineering

#### IP addressing and routing fundamentals

- [Anycast and global routing](../network-engineering/topics/anycast-and-global-routing.md) — Anycast advertises the same address from multiple locations so routing sends users to a nearby or preferred site. It improves global latency and resilience but requires careful health signaling and traffic-drain behavior.

#### DNS, TLS, and edge delivery

- [CDN caching and edge routing](../network-engineering/topics/cdn-caching-and-edge-routing.md) — CDN caching and edge routing move responses closer to users while respecting cache keys, freshness, purge behavior, origin shielding, and request routing policy. The edge becomes part of the production system, not just a static asset layer.

#### Transport protocols and performance

- [TCP congestion and packet loss](../network-engineering/topics/tcp-congestion-and-packet-loss.md) — TCP congestion control adjusts sending rate based on acknowledgements, loss, delay, and congestion window behavior. Packet loss and retransmits can turn a healthy service into a slow one before application metrics show errors.
- [UDP, QUIC, and connection migration](../network-engineering/topics/udp-quic-and-connection-migration.md) — UDP gives applications datagrams without TCP's built-in reliability, while QUIC builds encrypted streams, loss recovery, and connection migration over UDP. This changes how latency, packet loss, and client network changes are handled.
- [MTU, fragmentation, and PMTUD](../network-engineering/topics/mtu-fragmentation-and-pmtud.md) — MTU limits the largest packet a path can carry without fragmentation. Path MTU discovery failures can produce confusing partial outages where small requests work and larger responses stall.

#### Security and access control

- [VPN and private connectivity](../network-engineering/topics/vpn-and-private-connectivity.md) — VPN and private connectivity link users, offices, clouds, and partners without exposing services publicly. Designs must cover routing, authentication, split tunnel behavior, overlapping CIDRs, failover, and auditability.
- [Zero trust network access](../network-engineering/topics/zero-trust-network-access.md) — Zero trust network access grants service access based on identity, device posture, context, and policy rather than broad network location. It shrinks implicit trust but requires strong identity, logging, and exception handling.
- [DDoS protection and traffic scrubbing](../network-engineering/topics/ddos-protection-and-traffic-scrubbing.md) — DDoS protection and traffic scrubbing absorb or filter malicious floods before they exhaust application, network, or origin capacity. Useful defenses combine edge capacity, rate limits, challenge flows, filtering, and runbooks.

#### Service networking and cloud topology

- [VPC peering and transit gateways](../network-engineering/topics/vpc-peering-and-transit-gateways.md) — VPC peering and transit gateways connect private networks with different scaling and routing properties. Topology choices affect blast radius, route propagation, inspection points, and ownership boundaries.
- [Ingress and egress gateway design](../network-engineering/topics/ingress-and-egress-gateway-design.md) — Ingress and egress gateways centralize traffic entry and exit for policy, observability, routing, and security controls. They also become critical-path infrastructure with capacity and failure-mode obligations.
- [Multi-region failover routing](../network-engineering/topics/multi-region-failover-routing.md) — Multi-region failover routing directs users away from unhealthy regions while balancing recovery time, data consistency, DNS or edge cache behavior, and traffic-drain safety. It must be tested before an incident.

#### Observability and troubleshooting

- [SLOs for network reliability](../network-engineering/topics/slos-for-network-reliability.md) — Network reliability SLOs define measurable expectations for availability, latency, loss, DNS success, TLS success, and regional reachability. They connect lower-level signals to user-visible service behavior.
- [Incident triage for network partitions](../network-engineering/topics/incident-triage-for-network-partitions.md) — Network partition triage separates application failure from reachability, DNS, routing, firewall, load balancer, or provider issues. Responders need a disciplined path from symptom to packet path to ownership.
