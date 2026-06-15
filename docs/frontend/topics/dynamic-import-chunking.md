# Dynamic import chunking

**Domain:** Frontend
**Group:** Bundling, modules, and delivery
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Dynamic import creates async module boundaries that bundlers can split into separate chunks. It is useful for route-level, feature-level, and conditionally loaded code, but too many chunks create network overhead.

## Why it matters

Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.

## JavaScript example

```js
const routes = {
  '/settings': () => import('./routes/settings.js'),
  '/billing': () => import('./routes/billing.js')
};

const module = await routes[location.pathname]?.();
module?.render();
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
