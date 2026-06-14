# Frontend concepts

88 topics mapped into summaries and JavaScript/Node.js examples.

## Input and accessibility

Use this group to reason about operability, assistive technology behavior, focus/input semantics, and whether UI changes are perceivable to more than just a visual mouse user.

- [Pointer events](topics/pointer-events.md)
- [ARIA live regions internals](topics/aria-live-regions-internals.md)
- [Accessibility tree](topics/accessibility-tree.md)

## Rendering correctness and state

Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.

- [Idempotent UI actions](topics/idempotent-ui-actions.md)
- [Deterministic rendering](topics/deterministic-rendering.md)
- [Priority inversion in async code](topics/priority-inversion-in-async-code.md)
- [Race conditions in UI state](topics/race-conditions-in-ui-state.md)

## Performance and Web Vitals

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

- [Speculative prerendering](topics/speculative-prerendering.md)
- [Largest Contentful Paint (LCP)](topics/largest-contentful-paint-lcp.md)
- [Cumulative Layout Shift (CLS)](topics/cumulative-layout-shift-cls.md)
- [Interaction to Next Paint (INP)](topics/interaction-to-next-paint-inp.md)
- [First Input Delay (FID)](topics/first-input-delay-fid.md)
- [Long tasks API](topics/long-tasks-api.md)
- [PerformanceObserver API](topics/performanceobserver-api.md)

## Memory, streams, and advanced browser APIs

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

- [Garbage collection timing](topics/garbage-collection-timing.md)
- [Detached DOM nodes](topics/detached-dom-nodes.md)
- [Browser memory leak detection](topics/browser-memory-leak-detection.md)
- [Streaming fetch response handling](topics/streaming-fetch-response-handling.md)
- [AbortController](topics/abortcontroller.md)
- [Backpressure in streams API](topics/backpressure-in-streams-api.md)
- [WebRTC](topics/webrtc.md)
- [IndexedDB](topics/indexeddb.md)
- [WebAssembly integration](topics/webassembly-integration.md)
- [OffscreenCanvas](topics/offscreencanvas.md)
- [Transferable objects](topics/transferable-objects.md)
- [SharedArrayBuffer](topics/sharedarraybuffer.md)
- [Web Workers vs Service Workers](topics/web-workers-vs-service-workers.md)
- [Web Components interoperability](topics/web-components-interoperability.md)
- [Custom Elements lifecycle](topics/custom-elements-lifecycle.md)
- [Shadow DOM](topics/shadow-dom.md)

## Offline, collaboration, and data modeling

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

- [CRDT basics for collaboration](topics/crdt-basics-for-collaboration.md)
- [Offline conflict resolution](topics/offline-conflict-resolution.md)
- [Optimistic UI rollback strategy](topics/optimistic-ui-rollback-strategy.md)
- [Event sourcing in frontend](topics/event-sourcing-in-frontend.md)
- [Finite state modeling](topics/finite-state-modeling.md)

## Frontend architecture and rendering models

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

- [Micro-frontend orchestration](topics/micro-frontend-orchestration.md)
- [Edge rendering](topics/edge-rendering.md)
- [Server components](topics/server-components.md)
- [Selective hydration](topics/selective-hydration.md)
- [Suspense boundaries](topics/suspense-boundaries.md)
- [Render waterfalls](topics/render-waterfalls.md)
- [Scheduler priorities](topics/scheduler-priorities.md)
- [Tearing in concurrent UI](topics/tearing-in-concurrent-ui.md)
- [Streaming SSR](topics/streaming-ssr.md)
- [Islands architecture](topics/islands-architecture.md)
- [Partial hydration](topics/partial-hydration.md)
- [Hydration](topics/hydration.md)

## Security, networking, and caching

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

- [Prototype pollution](topics/prototype-pollution.md)
- [DOM clobbering](topics/dom-clobbering.md)
- [Trusted Types](topics/trusted-types.md)
- [Content Security Policy (CSP)](topics/content-security-policy-csp.md)
- [CSRF vs XSS mitigation](topics/csrf-vs-xss-mitigation.md)
- [SameSite cookie modes](topics/samesite-cookie-modes.md)
- [CORS preflight](topics/cors-preflight.md)
- [Preload vs Prefetch vs Preconnect](topics/preload-vs-prefetch-vs-preconnect.md)
- [Priority hints](topics/priority-hints.md)
- [HTTP/3 and QUIC](topics/http-3-and-quic.md)
- [ETag vs Cache-Control](topics/etag-vs-cache-control.md)
- [Stale-while-revalidate](topics/stale-while-revalidate.md)
- [Cache invalidation strategies](topics/cache-invalidation-strategies.md)
- [Service Worker lifecycle traps](topics/service-worker-lifecycle-traps.md)

## Observers, layout, paint, and CSS pipeline

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

- [MutationObserver cost](topics/mutationobserver-cost.md)
- [ResizeObserver loop limits](topics/resizeobserver-loop-limits.md)
- [IntersectionObserver internals](topics/intersectionobserver-internals.md)
- [Subpixel rendering](topics/subpixel-rendering.md)
- [CSS containment](topics/css-containment.md)
- [GPU acceleration in CSS](topics/gpu-acceleration-in-css.md)
- [Paint vs composite vs layout](topics/paint-vs-composite-vs-layout.md)
- [Browser compositing layers](topics/browser-compositing-layers.md)
- [Layout thrashing](topics/layout-thrashing.md)

## Bundling, modules, and delivery

Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.

- [Module federation](topics/module-federation.md)
- [Dynamic import chunking](topics/dynamic-import-chunking.md)
- [Code splitting strategies](topics/code-splitting-strategies.md)
- [Tree shaking internals](topics/tree-shaking-internals.md)
- [Render blocking resources](topics/render-blocking-resources.md)
- [Critical rendering path](topics/critical-rendering-path.md)

## Event loop, data identity, and UI algorithms

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

- [Task starvation](topics/task-starvation.md)
- [Event loop (macro vs microtasks)](topics/event-loop-macro-vs-microtasks.md)
- [Stale closure problem](topics/stale-closure-problem.md)
- [Memoization pitfalls](topics/memoization-pitfalls.md)
- [Referential equality](topics/referential-equality.md)
- [Immutable data patterns](topics/immutable-data-patterns.md)
- [Structural sharing](topics/structural-sharing.md)
- [Virtual DOM diffing complexity](topics/virtual-dom-diffing-complexity.md)
- [Fiber architecture](topics/fiber-architecture.md)
- [Reconciliation algorithm](topics/reconciliation-algorithm.md)
- [Time slicing](topics/time-slicing.md)
- [Concurrent rendering](topics/concurrent-rendering.md)
