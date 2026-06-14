# Hydration

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Example environment:** browser

## Summary

Hydration attaches client behavior to server-rendered HTML. The hard parts are matching server/client output, event replay, async data consistency, and avoiding large startup work.

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
