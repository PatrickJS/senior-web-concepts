# Partial hydration

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Partial hydration hydrates only parts of a server-rendered page rather than the full tree. It is related to islands and resumability, and trades framework complexity for less startup JavaScript.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
const state = JSON.parse(document.querySelector('#__STATE__').textContent);

for (const node of document.querySelectorAll('[data-hydrate]')) {
  const module = await import(node.dataset.hydrate);
  module.hydrate(node, state[node.id]);
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
