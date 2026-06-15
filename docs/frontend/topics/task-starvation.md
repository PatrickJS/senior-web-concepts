# Task starvation

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Task starvation happens when one class of work keeps the event loop from processing another. Infinite microtask chains, heavy sync loops, or too many high-priority tasks can starve input, timers, rendering, or I/O.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const yieldToLoop = () => new Promise((resolve) => setTimeout(resolve, 0));

for (let index = 0; index < 100000; index++) {
  if (index % 1000 === 0) await yieldToLoop();
  // process chunk
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
