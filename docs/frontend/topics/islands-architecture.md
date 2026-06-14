# Islands architecture

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Example environment:** browser

## Summary

Islands architecture renders mostly static HTML and hydrates isolated interactive components. It reduces client JavaScript and hydration cost, but boundaries and cross-island communication must be explicit.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
for (const island of document.querySelectorAll('[data-island]')) {
  if (island.matches('[data-eager]')) {
    const module = await import(island.dataset.island);
    module.hydrate(island);
  }
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
