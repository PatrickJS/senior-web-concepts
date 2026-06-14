# Tearing in concurrent UI

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Example environment:** node

## Summary

Tearing occurs when different parts of the UI observe different versions of shared state during concurrent rendering. Avoid it with consistent snapshots, subscription protocols, immutable commits, and framework-specific external-store APIs.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
let store = { count: 0, version: 1 };

const getSnapshot = () => store;

const render = () => {
  const snapshot = getSnapshot();
  return `${snapshot.count}:${snapshot.version}`;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
