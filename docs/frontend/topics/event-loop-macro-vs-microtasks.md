# Event loop (macro vs microtasks)

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

The event loop runs synchronous code, then microtasks, then macrotasks and rendering opportunities. Promises and queueMicrotask run before timers, which can be good for consistency but dangerous when chains are unbounded.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
setTimeout(() => console.log('macrotask'), 0);
queueMicrotask(() => console.log('microtask'));
Promise.resolve().then(() => console.log('promise job'));
console.log('sync');
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
