export default [
  {
    "title": "Pointer events",
    "group": "Input and accessibility",
    "summary": "Pointer events unify mouse, touch, pen, and stylus input behind one event model. A strong explanation covers pointerId, pointerType, pressure, pointer capture, cancellation, and why duplicating mouse/touch logic creates gesture bugs.",
    "example": "pointer-events"
  },
  {
    "title": "ARIA live regions internals",
    "group": "Input and accessibility",
    "summary": "ARIA live regions are parts of the DOM that assistive technologies monitor for announcements. The important details are politeness level, atomic updates, insertion timing, and avoiding rapid DOM replacement that screen readers may ignore.",
    "example": "live-region"
  },
  {
    "title": "Accessibility tree",
    "group": "Input and accessibility",
    "summary": "The accessibility tree is the browser-derived semantic representation exposed to assistive technologies. It is built from DOM, native semantics, ARIA, CSS visibility, names, descriptions, focusability, and platform mappings.",
    "example": "accessibility-tree"
  },
  {
    "title": "Idempotent UI actions",
    "group": "Rendering correctness and state",
    "summary": "An idempotent UI action produces the same durable result even if the user clicks twice, the request retries, or the component remounts. The usual tools are action keys, disabled states, dedupe maps, idempotency headers, and server-side replay protection.",
    "example": "idempotent-action"
  },
  {
    "title": "Deterministic rendering",
    "group": "Rendering correctness and state",
    "summary": "Deterministic rendering means the same inputs produce the same UI output. It avoids hidden time, random values, mutable globals, request order dependence, and client/server mismatches during hydration.",
    "example": "deterministic-render"
  },
  {
    "title": "Priority inversion in async code",
    "group": "Rendering correctness and state",
    "summary": "Priority inversion happens when urgent work waits behind lower-priority work because the scheduler or promise chain cannot preempt it. In UI this shows up as input blocked behind rendering, background fetches, or heavy microtask chains.",
    "example": "priority-inversion"
  },
  {
    "title": "Speculative prerendering",
    "group": "Performance and Web Vitals",
    "summary": "Speculative prerendering asks the browser to prepare likely future navigations before the user clicks. It can make navigations instant, but must avoid private-state leaks, side effects, wasted bandwidth, and analytics double-counting.",
    "example": "speculation-rules"
  },
  {
    "title": "Largest Contentful Paint (LCP)",
    "group": "Performance and Web Vitals",
    "summary": "LCP measures when the largest visible content element in the viewport is rendered. Good explanations connect LCP to TTFB, render-blocking CSS, image discovery, resource priority, server rendering, and client-side render delays.",
    "example": "web-vitals-observer"
  },
  {
    "title": "Cumulative Layout Shift (CLS)",
    "group": "Performance and Web Vitals",
    "summary": "CLS measures unexpected visual movement during page lifetime. The core prevention model is reserving space, stable dimensions, predictable font loading, non-intrusive ads/embeds, and avoiding DOM insertions above existing content.",
    "example": "cls-observer"
  },
  {
    "title": "Interaction to Next Paint (INP)",
    "group": "Performance and Web Vitals",
    "summary": "INP measures the latency of user interactions from input through processing to the next paint. It rewards short event handlers, quick style/layout work, cooperative yielding, and avoiding long main-thread tasks.",
    "example": "inp-observer"
  },
  {
    "title": "First Input Delay (FID)",
    "group": "Performance and Web Vitals",
    "summary": "FID measured the delay before the browser could start processing the first input. It is largely a main-thread availability metric and is best explained historically as the predecessor to INP for interaction responsiveness.",
    "example": "inp-observer"
  },
  {
    "title": "Long tasks API",
    "group": "Performance and Web Vitals",
    "summary": "The Long Tasks API exposes main-thread tasks that run long enough to block input and rendering. It is useful for finding expensive scripts, hydration bursts, synchronous parsing, and third-party code that creates responsiveness cliffs.",
    "example": "long-task"
  },
  {
    "title": "PerformanceObserver API",
    "group": "Performance and Web Vitals",
    "summary": "PerformanceObserver streams browser or runtime performance entries as they occur, often with buffered historical entries. It is the common mechanism for collecting vitals, resource timing, long tasks, marks, and measures.",
    "example": "performance-observer"
  },
  {
    "title": "Garbage collection timing",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Garbage collection is nondeterministic and should not be part of application correctness. A frontend engineer should understand object reachability, closures, event listeners, WeakMap/WeakRef trade-offs, and why GC pauses can affect responsiveness.",
    "example": "gc-timing"
  },
  {
    "title": "Detached DOM nodes",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Detached DOM nodes are removed from the visible document but still retained by JavaScript references. They often come from leaked listeners, caches, closures, observers, and component cleanup bugs.",
    "example": "detached-dom"
  },
  {
    "title": "Browser memory leak detection",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Browser memory leak detection is the process of proving memory grows because objects remain reachable after expected cleanup. Good explanations include heap snapshots, allocation timelines, detached DOM node views, listener cleanup, and reproducible interaction loops.",
    "example": "memory-leak"
  },
  {
    "title": "Streaming fetch response handling",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Streaming fetch handling reads response chunks as they arrive instead of waiting for the full body. It enables progressive rendering, lower memory usage, server-sent protocols, and earlier cancellation.",
    "example": "streaming-fetch"
  },
  {
    "title": "AbortController",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "AbortController coordinates cancellation for fetches, streams, event listeners, and async operations. It prevents stale updates, leaked work, unnecessary network traffic, and component-unmount races.",
    "example": "abort-controller"
  },
  {
    "title": "Backpressure in streams API",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Backpressure is the signal that a consumer cannot keep up with a producer. Streams expose it through desiredSize, writer.ready, highWaterMark, drain-like behavior, and async pulls to avoid unbounded buffering.",
    "example": "backpressure-stream"
  },
  {
    "title": "WebRTC",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "WebRTC provides peer-to-peer media and data channels with NAT traversal, ICE, STUN/TURN, SDP negotiation, encryption, congestion control, and real-time delivery constraints.",
    "example": "webrtc"
  },
  {
    "title": "CRDT basics for collaboration",
    "group": "Offline, collaboration, and data modeling",
    "summary": "CRDTs are data types designed so replicas can update independently and merge without conflicts. A clear answer covers commutativity, associativity, idempotent merges, causal metadata, and trade-offs in metadata size.",
    "example": "crdt-gset"
  },
  {
    "title": "Offline conflict resolution",
    "group": "Offline, collaboration, and data modeling",
    "summary": "Offline conflict resolution decides what happens when local changes meet remote changes after reconnect. Strategies include last-write-wins, field-level merge, operational transforms, CRDTs, manual conflict UI, and version vectors.",
    "example": "offline-conflict"
  },
  {
    "title": "Optimistic UI rollback strategy",
    "group": "Offline, collaboration, and data modeling",
    "summary": "Optimistic UI applies a predicted result immediately, then confirms or rolls back after the server responds. A reliable strategy records previous state, pending operation IDs, failure rules, and reconciliation with server truth.",
    "example": "optimistic-rollback"
  },
  {
    "title": "Event sourcing in frontend",
    "group": "Offline, collaboration, and data modeling",
    "summary": "Frontend event sourcing stores user/domain events and derives UI state from projections. It helps with undo/redo, offline queues, auditability, replay, optimistic updates, and deterministic debugging.",
    "example": "event-sourcing-frontend"
  },
  {
    "title": "Finite state modeling",
    "group": "Offline, collaboration, and data modeling",
    "summary": "Finite state modeling describes UI behavior as explicit states and allowed transitions. It prevents impossible states like loading and saved simultaneously, and makes retries, errors, and cancellation easier to test.",
    "example": "finite-state"
  },
  {
    "title": "Micro-frontend orchestration",
    "group": "Frontend architecture and rendering models",
    "summary": "Micro-frontend orchestration coordinates independently built frontend applications at runtime. Strong explanations cover ownership boundaries, routing, shared dependencies, CSS isolation, versioning, event contracts, and failure containment.",
    "example": "microfrontend"
  },
  {
    "title": "Edge rendering",
    "group": "Frontend architecture and rendering models",
    "summary": "Edge rendering produces HTML or responses close to users, usually in geographically distributed runtimes. It improves latency but constrains APIs, cold starts, data locality, cache behavior, and consistency.",
    "example": "edge-rendering"
  },
  {
    "title": "Server components",
    "group": "Frontend architecture and rendering models",
    "summary": "Server components render parts of the component tree on the server without shipping their implementation to the client. The core trade-off is reduced client JavaScript versus stricter serialization, data access, and boundary rules.",
    "example": "server-components"
  },
  {
    "title": "Selective hydration",
    "group": "Frontend architecture and rendering models",
    "summary": "Selective hydration hydrates only the interactive parts of server-rendered HTML, often by priority or visibility. It reduces startup work, but requires accurate island boundaries and safe event replay or delayed interactivity.",
    "example": "hydration"
  },
  {
    "title": "Suspense boundaries",
    "group": "Frontend architecture and rendering models",
    "summary": "Suspense boundaries isolate async waiting so one slow dependency does not block the entire UI. A strong explanation mentions fallback UI, reveal order, thrown promises/resource reads, streaming SSR, and avoiding waterfalls.",
    "example": "suspense"
  },
  {
    "title": "Render waterfalls",
    "group": "Frontend architecture and rendering models",
    "summary": "Render waterfalls happen when rendering discovers async dependencies sequentially instead of in parallel. They commonly occur in nested components, route loaders, dynamic imports, and suspense trees that fetch too late.",
    "example": "waterfall"
  },
  {
    "title": "Scheduler priorities",
    "group": "Frontend architecture and rendering models",
    "summary": "Scheduler priorities decide which work should run now and which work can wait. UI schedulers prioritize input and visible updates over background rendering, prefetching, analytics, and non-urgent transitions.",
    "example": "scheduler"
  },
  {
    "title": "Tearing in concurrent UI",
    "group": "Frontend architecture and rendering models",
    "summary": "Tearing occurs when different parts of the UI observe different versions of shared state during concurrent rendering. Avoid it with consistent snapshots, subscription protocols, immutable commits, and framework-specific external-store APIs.",
    "example": "tearing"
  },
  {
    "title": "Race conditions in UI state",
    "group": "Rendering correctness and state",
    "summary": "UI state races happen when async results arrive out of order or after the state they depended on has changed. Common fixes are request IDs, AbortController, version checks, state machines, and idempotent reducers.",
    "example": "ui-race"
  },
  {
    "title": "Prototype pollution",
    "group": "Security, networking, and caching",
    "summary": "Prototype pollution lets attacker-controlled keys modify Object.prototype or constructors. It often comes from unsafe deep merge, path setters, query parsers, or JSON merge logic that accepts __proto__, prototype, or constructor keys.",
    "example": "prototype-pollution"
  },
  {
    "title": "DOM clobbering",
    "group": "Security, networking, and caching",
    "summary": "DOM clobbering abuses named elements or IDs that become properties on document, forms, or windows. Safe code avoids trusting global property lookup and reads explicit attributes from selected elements instead.",
    "example": "dom-clobbering"
  },
  {
    "title": "Trusted Types",
    "group": "Security, networking, and caching",
    "summary": "Trusted Types is a browser defense that restricts dangerous DOM sinks such as innerHTML to values created by approved policies. It is especially useful for reducing DOM XSS in large applications.",
    "example": "trusted-types"
  },
  {
    "title": "Content Security Policy (CSP)",
    "group": "Security, networking, and caching",
    "summary": "CSP is a browser-enforced policy controlling where scripts, styles, images, frames, and other resources can load from. Strong explanations cover nonces, hashes, strict-dynamic, report-only rollout, and blocking inline script execution.",
    "example": "csp"
  },
  {
    "title": "CSRF vs XSS mitigation",
    "group": "Security, networking, and caching",
    "summary": "CSRF tricks an authenticated browser into sending unwanted state-changing requests; XSS executes attacker script in the trusted origin. CSRF is mitigated with SameSite, tokens, and origin checks; XSS is mitigated with output encoding, CSP, sanitization, and Trusted Types.",
    "example": "csrf-xss"
  },
  {
    "title": "SameSite cookie modes",
    "group": "Security, networking, and caching",
    "summary": "SameSite controls whether cookies are sent on cross-site requests. Lax is a pragmatic default, Strict is more protective but can break flows, and None requires Secure for third-party contexts.",
    "example": "same-site"
  },
  {
    "title": "CORS preflight",
    "group": "Security, networking, and caching",
    "summary": "A CORS preflight is an OPTIONS request the browser sends before non-simple cross-origin requests. The server must explicitly allow origin, methods, and headers; CORS is a browser boundary, not server-to-server auth.",
    "example": "cors"
  },
  {
    "title": "Preload vs Prefetch vs Preconnect",
    "group": "Security, networking, and caching",
    "summary": "Preload fetches a needed resource for the current navigation, prefetch gets likely future resources at lower priority, and preconnect warms DNS/TCP/TLS connections to an origin. Misuse can waste bandwidth or hurt priority scheduling.",
    "example": "resource-hints"
  },
  {
    "title": "Priority hints",
    "group": "Security, networking, and caching",
    "summary": "Priority hints communicate relative fetch importance to the browser. They are useful for hero images and noncritical assets, but should complement rather than replace correct resource discovery and markup order.",
    "example": "priority-hints"
  },
  {
    "title": "HTTP/3 and QUIC",
    "group": "Security, networking, and caching",
    "summary": "HTTP/3 runs HTTP semantics over QUIC instead of TCP. It reduces transport head-of-line blocking, integrates TLS 1.3, supports connection migration, and handles loss recovery per stream more gracefully than HTTP/2 over TCP.",
    "example": "quic-loss"
  },
  {
    "title": "ETag vs Cache-Control",
    "group": "Security, networking, and caching",
    "summary": "Cache-Control defines freshness and reuse rules; ETag is a validator for conditional revalidation. Effective caching uses both: freshness for fast reuse and validators for cheap correctness after stale entries.",
    "example": "etag-cache-control"
  },
  {
    "title": "Stale-while-revalidate",
    "group": "Security, networking, and caching",
    "summary": "Stale-while-revalidate serves a cached stale response immediately while refreshing in the background. It improves perceived latency but requires tolerance for temporary staleness and careful invalidation for user-specific data.",
    "example": "swr-cache"
  },
  {
    "title": "Cache invalidation strategies",
    "group": "Security, networking, and caching",
    "summary": "Cache invalidation is the policy for removing or superseding cached data when truth changes. Techniques include TTLs, versioned keys, surrogate keys, write-through updates, event-driven purges, and scoped cache busting.",
    "example": "cache-invalidation"
  },
  {
    "title": "Service Worker lifecycle traps",
    "group": "Security, networking, and caching",
    "summary": "Service Workers have install, waiting, activate, fetch, and update states that can keep old code alive. Traps include stale caches, uncontrolled clients, skipWaiting misuse, update races, and broken offline fallbacks.",
    "example": "service-worker"
  },
  {
    "title": "IndexedDB",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "IndexedDB is the browser's transactional object store for larger structured data. Good explanations mention version upgrades, object stores, indexes, transactions, async request APIs, quota, and offline-first storage.",
    "example": "indexeddb"
  },
  {
    "title": "MutationObserver cost",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "MutationObserver batches DOM mutation records, but broad subtree observation can be expensive. The cost comes from record volume, callback work, retained nodes, and accidental feedback loops that create more mutations.",
    "example": "mutation-observer"
  },
  {
    "title": "ResizeObserver loop limits",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "ResizeObserver reports element size changes, but writing size-affecting styles inside the callback can create loops. Browsers limit these loops, so callbacks should defer writes and avoid recursive layout changes.",
    "example": "resize-observer"
  },
  {
    "title": "IntersectionObserver internals",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "IntersectionObserver asynchronously reports visibility intersections between targets and a root. It avoids many scroll-handler costs, but callbacks are still approximate, threshold-based, and affected by root margins and layout changes.",
    "example": "intersection-observer"
  },
  {
    "title": "Subpixel rendering",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "Subpixel rendering occurs because layout uses fractional CSS pixels while screens use device pixels. Rounding can affect text, transforms, borders, canvas drawing, and alignment across devicePixelRatio values.",
    "example": "css-pipeline"
  },
  {
    "title": "CSS containment",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "CSS containment tells the browser that layout, paint, style, or size effects are isolated. It lets the engine skip broader invalidation and is especially useful for virtualized lists, cards, and independent widgets.",
    "example": "containment"
  },
  {
    "title": "GPU acceleration in CSS",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "GPU acceleration usually means moving compositable work such as transforms and opacity to compositor layers. It can improve animation smoothness but too many layers waste memory and can hurt performance.",
    "example": "css-pipeline"
  },
  {
    "title": "Paint vs composite vs layout",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "Layout computes geometry, paint rasterizes pixels, and composite assembles layers on screen. Performance work often means avoiding layout and paint when a transform or opacity-only composite will do.",
    "example": "css-pipeline"
  },
  {
    "title": "Browser compositing layers",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "Compositing layers are independently rasterized surfaces the compositor can move or blend. They are created by transforms, opacity, video, fixed elements, will-change, and browser heuristics, but each layer has memory and upload cost.",
    "example": "css-pipeline"
  },
  {
    "title": "WebAssembly integration",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "WebAssembly integration loads compiled modules into JavaScript for CPU-heavy, portable code. The real boundary is memory copying, async instantiation, imports/exports, streaming compilation, and choosing where JS remains simpler.",
    "example": "wasm"
  },
  {
    "title": "OffscreenCanvas",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "OffscreenCanvas allows canvas rendering off the main thread, often in a Worker. It is useful for charts, games, image processing, and avoiding main-thread paint pressure.",
    "example": "offscreen-canvas"
  },
  {
    "title": "Transferable objects",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Transferable objects move ownership of buffers or ports between threads without copying. After transfer, the original owner is detached, which improves performance but requires explicit lifetime handling.",
    "example": "transferable"
  },
  {
    "title": "SharedArrayBuffer",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "SharedArrayBuffer allows multiple threads to access the same memory with Atomics for coordination. In browsers it requires cross-origin isolation because of side-channel risk.",
    "example": "shared-array-buffer"
  },
  {
    "title": "Web Workers vs Service Workers",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Web Workers run background JavaScript for a page; Service Workers act as network/proxy lifecycle scripts for an origin scope. Workers help CPU isolation, while Service Workers intercept requests, cache, and enable offline behavior.",
    "example": "workers"
  },
  {
    "title": "Web Components interoperability",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Web Components interoperate through custom elements, attributes, properties, events, slots, and DOM APIs. Good boundaries avoid framework-specific assumptions and expose stable platform contracts.",
    "example": "web-components"
  },
  {
    "title": "Custom Elements lifecycle",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Custom Elements lifecycle callbacks handle construction, connection, disconnection, adoption, and observed attribute changes. Correct components defer DOM work until connected and clean up listeners, observers, and async work on disconnect.",
    "example": "custom-elements"
  },
  {
    "title": "Shadow DOM",
    "group": "Memory, streams, and advanced browser APIs",
    "summary": "Shadow DOM creates an encapsulated DOM subtree with scoped styling and slot-based composition. It improves component isolation but affects styling, event retargeting, accessibility names, and testing strategies.",
    "example": "shadow-dom"
  },
  {
    "title": "Module federation",
    "group": "Bundling, modules, and delivery",
    "summary": "Module federation loads code from independently deployed builds at runtime. It enables separate ownership and deployment but introduces version negotiation, shared dependency, fallback, security, and observability problems.",
    "example": "module-federation"
  },
  {
    "title": "Dynamic import chunking",
    "group": "Bundling, modules, and delivery",
    "summary": "Dynamic import creates async module boundaries that bundlers can split into separate chunks. It is useful for route-level, feature-level, and conditionally loaded code, but too many chunks create network overhead.",
    "example": "dynamic-import"
  },
  {
    "title": "Code splitting strategies",
    "group": "Bundling, modules, and delivery",
    "summary": "Code splitting decides which code ships together and which code loads later. Useful strategies include route splitting, component splitting, vendor splitting, permission-based loading, and interaction-triggered loading.",
    "example": "code-splitting"
  },
  {
    "title": "Tree shaking internals",
    "group": "Bundling, modules, and delivery",
    "summary": "Tree shaking removes unused exports by static analysis of ESM imports/exports. It works best with side-effect-free modules, direct imports, and package sideEffects metadata.",
    "example": "tree-shaking"
  },
  {
    "title": "Render blocking resources",
    "group": "Bundling, modules, and delivery",
    "summary": "Render-blocking resources delay first paint or meaningful rendering because the browser must fetch, parse, or execute them first. CSS, synchronous scripts, fonts, and late-discovered hero assets are common causes.",
    "example": "render-blocking"
  },
  {
    "title": "Critical rendering path",
    "group": "Bundling, modules, and delivery",
    "summary": "The critical rendering path is the sequence from HTML bytes to DOM, CSSOM, render tree, layout, paint, and composite. Optimizing it means reducing blocking resources and making important content discoverable early.",
    "example": "render-blocking"
  },
  {
    "title": "Layout thrashing",
    "group": "Observers, layout, paint, and CSS pipeline",
    "summary": "Layout thrashing alternates DOM reads that force layout with writes that invalidate layout. Batch reads before writes, use transforms for motion, and avoid measuring after each mutation.",
    "example": "layout-thrashing"
  },
  {
    "title": "Task starvation",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Task starvation happens when one class of work keeps the event loop from processing another. Infinite microtask chains, heavy sync loops, or too many high-priority tasks can starve input, timers, rendering, or I/O.",
    "example": "task-starvation"
  },
  {
    "title": "Event loop (macro vs microtasks)",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "The event loop runs synchronous code, then microtasks, then macrotasks and rendering opportunities. Promises and queueMicrotask run before timers, which can be good for consistency but dangerous when chains are unbounded.",
    "example": "event-loop"
  },
  {
    "title": "Stale closure problem",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "A stale closure uses values captured from an earlier render or state version. It appears in handlers, timers, promises, subscriptions, and memoized callbacks that outlive the data they closed over.",
    "example": "stale-closure"
  },
  {
    "title": "Memoization pitfalls",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Memoization can hide expensive work, but wrong keys, mutable inputs, unbounded caches, and referential churn can make it incorrect or slower. It is a trade-off between CPU, memory, invalidation, and complexity.",
    "example": "memoization"
  },
  {
    "title": "Referential equality",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Referential equality compares object identity rather than deep value. UI frameworks use it for memoization and update detection, so recreating objects or functions can trigger unnecessary work.",
    "example": "referential-equality"
  },
  {
    "title": "Immutable data patterns",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Immutable data patterns create new values instead of mutating existing state. They make change detection, undo, time travel, concurrency, and structural sharing easier.",
    "example": "immutable-data"
  },
  {
    "title": "Structural sharing",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Structural sharing reuses unchanged parts of immutable data structures. It reduces memory churn and lets referential equality identify which subtrees changed.",
    "example": "structural-sharing"
  },
  {
    "title": "Virtual DOM diffing complexity",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Virtual DOM diffing compares previous and next trees to compute DOM operations. Keys reduce expensive ambiguity in lists, while unstable keys or deep tree churn increase work and bugs.",
    "example": "vdom-diff"
  },
  {
    "title": "Fiber architecture",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Fiber architecture breaks rendering work into interruptible units. It enables prioritization, pausing, resuming, aborting, and committing work separately from rendering calculations.",
    "example": "fiber"
  },
  {
    "title": "Reconciliation algorithm",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Reconciliation decides how a framework maps a new UI description onto existing component or DOM instances. Keyed identity, component type, position, and state preservation rules are central.",
    "example": "reconciliation"
  },
  {
    "title": "Time slicing",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Time slicing breaks long rendering or computation into chunks so the event loop can process input and paint. It improves responsiveness but requires work to be restartable and side effects to be delayed.",
    "example": "time-slicing"
  },
  {
    "title": "Concurrent rendering",
    "group": "Event loop, data identity, and UI algorithms",
    "summary": "Concurrent rendering lets a framework prepare new UI without immediately committing it. It enables interruptible rendering and prioritization, but requires avoiding side effects during render and preventing tearing.",
    "example": "concurrent-rendering"
  },
  {
    "title": "Streaming SSR",
    "group": "Frontend architecture and rendering models",
    "summary": "Streaming SSR sends HTML progressively while data or components are still resolving. It improves time to first byte and progressive display, but requires boundary management, script ordering, and hydration coordination.",
    "example": "streaming-ssr"
  },
  {
    "title": "Islands architecture",
    "group": "Frontend architecture and rendering models",
    "summary": "Islands architecture renders mostly static HTML and hydrates isolated interactive components. It reduces client JavaScript and hydration cost, but boundaries and cross-island communication must be explicit.",
    "example": "islands"
  },
  {
    "title": "Partial hydration",
    "group": "Frontend architecture and rendering models",
    "summary": "Partial hydration hydrates only parts of a server-rendered page rather than the full tree. It is related to islands and resumability, and trades framework complexity for less startup JavaScript.",
    "example": "hydration"
  },
  {
    "title": "Hydration",
    "group": "Frontend architecture and rendering models",
    "summary": "Hydration attaches client behavior to server-rendered HTML. The hard parts are matching server/client output, event replay, async data consistency, and avoiding large startup work.",
    "example": "hydration"
  }
];
