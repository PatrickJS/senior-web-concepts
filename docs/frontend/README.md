# Frontend concepts

88 topics mapped into summaries and JavaScript/Node.js examples.

## Input and accessibility

Use this group to reason about operability, assistive technology behavior, focus/input semantics, and whether UI changes are perceivable to more than just a visual mouse user.

- [Pointer events](topics/pointer-events.md) — sr, frontend
- [ARIA live regions internals](topics/aria-live-regions-internals.md) — sr, frontend
- [Accessibility tree](topics/accessibility-tree.md) — sr, frontend

## Rendering correctness and state

Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.

- [Idempotent UI actions](topics/idempotent-ui-actions.md) — sr, frontend
- [Deterministic rendering](topics/deterministic-rendering.md) — sr, frontend
- [Priority inversion in async code](topics/priority-inversion-in-async-code.md) — sr, frontend
- [Race conditions in UI state](topics/race-conditions-in-ui-state.md) — sr, frontend

## Performance and Web Vitals

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

- [Speculative prerendering](topics/speculative-prerendering.md) — sr, frontend
- [Largest Contentful Paint (LCP)](topics/largest-contentful-paint-lcp.md) — sr, frontend
- [Cumulative Layout Shift (CLS)](topics/cumulative-layout-shift-cls.md) — sr, frontend
- [Interaction to Next Paint (INP)](topics/interaction-to-next-paint-inp.md) — sr, frontend
- [First Input Delay (FID)](topics/first-input-delay-fid.md) — sr, frontend
- [Long tasks API](topics/long-tasks-api.md) — sr, frontend
- [PerformanceObserver API](topics/performanceobserver-api.md) — sr, frontend

## Memory, streams, and advanced browser APIs

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

- [Garbage collection timing](topics/garbage-collection-timing.md) — sr, frontend
- [Detached DOM nodes](topics/detached-dom-nodes.md) — sr, frontend
- [Browser memory leak detection](topics/browser-memory-leak-detection.md) — sr, frontend
- [Streaming fetch response handling](topics/streaming-fetch-response-handling.md) — sr, frontend
- [AbortController](topics/abortcontroller.md) — sr, frontend
- [Backpressure in streams API](topics/backpressure-in-streams-api.md) — sr, frontend
- [WebRTC](topics/webrtc.md) — sr, frontend
- [IndexedDB](topics/indexeddb.md) — sr, frontend
- [WebAssembly integration](topics/webassembly-integration.md) — sr, frontend
- [OffscreenCanvas](topics/offscreencanvas.md) — sr, frontend
- [Transferable objects](topics/transferable-objects.md) — sr, frontend
- [SharedArrayBuffer](topics/sharedarraybuffer.md) — sr, frontend
- [Web Workers vs Service Workers](topics/web-workers-vs-service-workers.md) — sr, frontend
- [Web Components interoperability](topics/web-components-interoperability.md) — sr, frontend
- [Custom Elements lifecycle](topics/custom-elements-lifecycle.md) — sr, frontend
- [Shadow DOM](topics/shadow-dom.md) — sr, frontend

## Offline, collaboration, and data modeling

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

- [CRDT basics for collaboration](topics/crdt-basics-for-collaboration.md) — sr, frontend
- [Offline conflict resolution](topics/offline-conflict-resolution.md) — sr, frontend
- [Optimistic UI rollback strategy](topics/optimistic-ui-rollback-strategy.md) — sr, frontend
- [Event sourcing in frontend](topics/event-sourcing-in-frontend.md) — sr, frontend
- [Finite state modeling](topics/finite-state-modeling.md) — sr, frontend

## Frontend architecture and rendering models

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

- [Micro-frontend orchestration](topics/micro-frontend-orchestration.md) — sr, frontend
- [Edge rendering](topics/edge-rendering.md) — sr, frontend
- [Server components](topics/server-components.md) — sr, frontend
- [Selective hydration](topics/selective-hydration.md) — sr, frontend
- [Suspense boundaries](topics/suspense-boundaries.md) — sr, frontend
- [Render waterfalls](topics/render-waterfalls.md) — sr, frontend
- [Scheduler priorities](topics/scheduler-priorities.md) — sr, frontend
- [Tearing in concurrent UI](topics/tearing-in-concurrent-ui.md) — sr, frontend
- [Streaming SSR](topics/streaming-ssr.md) — sr, frontend
- [Islands architecture](topics/islands-architecture.md) — sr, frontend
- [Partial hydration](topics/partial-hydration.md) — sr, frontend
- [Hydration](topics/hydration.md) — sr, frontend

## Security, networking, and caching

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

- [Prototype pollution](topics/prototype-pollution.md) — sr, frontend
- [DOM clobbering](topics/dom-clobbering.md) — sr, frontend
- [Trusted Types](topics/trusted-types.md) — sr, frontend
- [Content Security Policy (CSP)](topics/content-security-policy-csp.md) — sr, frontend
- [CSRF vs XSS mitigation](topics/csrf-vs-xss-mitigation.md) — sr, frontend
- [SameSite cookie modes](topics/samesite-cookie-modes.md) — sr, frontend
- [CORS preflight](topics/cors-preflight.md) — sr, frontend
- [Preload vs Prefetch vs Preconnect](topics/preload-vs-prefetch-vs-preconnect.md) — sr, frontend
- [Priority hints](topics/priority-hints.md) — sr, frontend
- [HTTP/3 and QUIC](topics/http-3-and-quic.md) — sr, frontend
- [ETag vs Cache-Control](topics/etag-vs-cache-control.md) — sr, frontend
- [Stale-while-revalidate](topics/stale-while-revalidate.md) — sr, frontend
- [Cache invalidation strategies](topics/cache-invalidation-strategies.md) — sr, frontend
- [Service Worker lifecycle traps](topics/service-worker-lifecycle-traps.md) — sr, frontend

## Observers, layout, paint, and CSS pipeline

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

- [MutationObserver cost](topics/mutationobserver-cost.md) — sr, frontend
- [ResizeObserver loop limits](topics/resizeobserver-loop-limits.md) — sr, frontend
- [IntersectionObserver internals](topics/intersectionobserver-internals.md) — sr, frontend
- [Subpixel rendering](topics/subpixel-rendering.md) — sr, frontend
- [CSS containment](topics/css-containment.md) — sr, frontend
- [GPU acceleration in CSS](topics/gpu-acceleration-in-css.md) — sr, frontend
- [Paint vs composite vs layout](topics/paint-vs-composite-vs-layout.md) — sr, frontend
- [Browser compositing layers](topics/browser-compositing-layers.md) — sr, frontend
- [Layout thrashing](topics/layout-thrashing.md) — sr, frontend

## Bundling, modules, and delivery

Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.

- [Module federation](topics/module-federation.md) — sr, frontend
- [Dynamic import chunking](topics/dynamic-import-chunking.md) — sr, frontend
- [Code splitting strategies](topics/code-splitting-strategies.md) — sr, frontend
- [Tree shaking internals](topics/tree-shaking-internals.md) — sr, frontend
- [Render blocking resources](topics/render-blocking-resources.md) — sr, frontend
- [Critical rendering path](topics/critical-rendering-path.md) — sr, frontend

## Event loop, data identity, and UI algorithms

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

- [Task starvation](topics/task-starvation.md) — sr, frontend
- [Event loop (macro vs microtasks)](topics/event-loop-macro-vs-microtasks.md) — sr, frontend
- [Stale closure problem](topics/stale-closure-problem.md) — sr, frontend
- [Memoization pitfalls](topics/memoization-pitfalls.md) — sr, frontend
- [Referential equality](topics/referential-equality.md) — sr, frontend
- [Immutable data patterns](topics/immutable-data-patterns.md) — sr, frontend
- [Structural sharing](topics/structural-sharing.md) — sr, frontend
- [Virtual DOM diffing complexity](topics/virtual-dom-diffing-complexity.md) — sr, frontend
- [Fiber architecture](topics/fiber-architecture.md) — sr, frontend
- [Reconciliation algorithm](topics/reconciliation-algorithm.md) — sr, frontend
- [Time slicing](topics/time-slicing.md) — sr, frontend
- [Concurrent rendering](topics/concurrent-rendering.md) — sr, frontend
