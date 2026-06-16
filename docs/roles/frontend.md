# Frontend requirements

**Role tag:** frontend
**Topics:** 112

Requirements for browser, UI architecture, frontend performance, accessibility, delivery, and client-side correctness work.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Frontend: 88
- Design Systems: 23
- Platform Engineering: 1

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

### Design Systems

#### Foundations and taxonomy

- [Design system purpose and governance](../design-system/topics/design-system-purpose-and-governance.md) — A design system is the operating layer between product design, UI engineering, and shipped interfaces. Governance defines who can change tokens, components, Figma libraries, package APIs, documentation, and release policy.
- [Component inventory and audit](../design-system/topics/component-inventory-and-audit.md) — A component inventory identifies repeated UI patterns, implementation variants, usage frequency, accessibility risk, and ownership gaps. It turns vague design debt into a prioritized system backlog.
- [Accessibility as a design constraint](../design-system/topics/accessibility-as-a-design-constraint.md) — Accessibility belongs in design decisions before implementation. Color contrast, focus order, target size, motion, labels, keyboard behavior, and error messaging should be treated as design constraints, not late QA fixes.
- [Contribution model and ownership](../design-system/topics/contribution-model-and-ownership.md) — A contribution model explains how teams propose, review, build, document, and release system changes. It defines ownership across design, engineering, accessibility, product, and platform maintainers.

#### Tokens and theming

- [Design token architecture](../design-system/topics/design-token-architecture.md) — Design token architecture separates raw values, semantic decisions, component aliases, and platform outputs. This lets a color, spacing, typography, or motion decision move from design source to code without hardcoded drift.
- [Token naming and semantic layers](../design-system/topics/token-naming-and-semantic-layers.md) — Token names should encode intent rather than current visual appearance. Semantic layers such as surface, text, border, action, and feedback survive rebrands better than names like blue-500 or gray-light.
- [Figma variables to code tokens](../design-system/topics/figma-variables-to-code-tokens.md) — Figma variables become reliable code tokens only when naming, modes, aliases, exports, review, and versioning are explicit. The pipeline should detect missing mappings before app code consumes broken values.
- [Theme modes and brand theming](../design-system/topics/theme-modes-and-brand-theming.md) — Theme modes map the same semantic token names to different values for light, dark, high-contrast, brand, or tenant contexts. The component API should consume stable semantics, not mode-specific literals.
- [Token versioning and migration](../design-system/topics/token-versioning-and-migration.md) — Token versioning protects consuming apps when a token is renamed, removed, or changes meaning. Migration notes, aliases, deprecation windows, and codemods keep design changes from becoming scattered UI regressions.

#### Figma and design-code handoff

- [Auto layout and responsive constraints](../design-system/topics/auto-layout-and-responsive-constraints.md) — Auto layout and responsive constraints make design intent explicit for spacing, wrapping, alignment, truncation, and resizing. They reduce ambiguity when a Figma frame becomes real CSS layout.
- [Design spec handoff quality](../design-system/topics/design-spec-handoff-quality.md) — Design handoff quality depends on states, content rules, accessibility notes, responsive behavior, data edge cases, and interaction timing. A polished static frame is not enough to implement durable UI.

#### Component API and implementation

- [Component prop API design](../design-system/topics/component-prop-api-design.md) — Component prop APIs translate design intent into reusable engineering interfaces. Good APIs expose stable semantic choices, prevent invalid combinations, and leave room for content and accessibility requirements.
- [Slots composition and escape hatches](../design-system/topics/slots-composition-and-escape-hatches.md) — Slots and composition let product teams place custom content inside system components without forking them. Escape hatches should be deliberate, documented, and constrained so they do not undermine consistency.
- [Controlled vs uncontrolled components](../design-system/topics/controlled-vs-uncontrolled-components.md) — Controlled components let app state own the value, while uncontrolled components keep internal state until a boundary event. Design system components should choose the model that matches validation, form, and composition needs.
- [Visual states and interaction contracts](../design-system/topics/visual-states-and-interaction-contracts.md) — Visual states such as hover, focus, disabled, loading, selected, invalid, and pressed are interaction contracts. They should be represented in design, documentation, tests, and implementation with the same names.
- [Styling strategy for component libraries](../design-system/topics/styling-strategy-for-component-libraries.md) — A component library styling strategy decides how tokens, CSS variables, cascade layers, class names, composition, and app overrides interact. The strategy should protect consistency while allowing product-specific layout.

#### Documentation, testing, and release

- [Storybook-driven documentation](../design-system/topics/storybook-driven-documentation.md) — Storybook-style documentation pairs component examples with props, states, accessibility notes, tokens, and usage guidance. It becomes a shared review surface for design, engineering, QA, and product teams.
- [Visual regression testing](../design-system/topics/visual-regression-testing.md) — Visual regression testing compares rendered component states across changes to catch unintended appearance shifts. It is most useful when snapshots represent real supported states instead of random page screenshots.
- [Interaction and accessibility tests](../design-system/topics/interaction-and-accessibility-tests.md) — Interaction and accessibility tests verify keyboard flow, focus management, ARIA state, labels, disabled behavior, and event timing. They protect behavior that visual review alone cannot reliably catch.
- [Changelog and release notes for components](../design-system/topics/changelog-and-release-notes-for-components.md) — Component changelogs explain what changed, why it changed, what apps must update, and whether visual or behavioral snapshots should be reviewed. They make design system releases consumable by product teams.
- [Deprecation and migration playbooks](../design-system/topics/deprecation-and-migration-playbooks.md) — Deprecation playbooks give teams a path away from old tokens, props, variants, or components. Good migrations include timelines, warnings, codemods, examples, support windows, and removal criteria.

#### Adoption and operations

- [Design debt triage](../design-system/topics/design-debt-triage.md) — Design debt triage ranks inconsistent UI, missing states, token drift, inaccessible patterns, and local component forks by user impact and implementation cost. It turns inconsistency into managed product debt.
- [Package distribution and consuming apps](../design-system/topics/package-distribution-and-consuming-apps.md) — Design system packages must work for consuming apps with clear peer dependencies, build outputs, versioning, tree shaking, CSS loading, and upgrade guidance. Distribution quality determines whether teams can adopt the system safely.

### Platform Engineering

#### Source control, CI, and release automation

- [Git workflow and branch protection](../platform-engineering/topics/git-workflow-and-branch-protection.md) — Git workflow and branch protection define how changes move from local work to reviewed, tested, mergeable history. Useful controls include required checks, protected branches, signed commits or tags, and review ownership.
