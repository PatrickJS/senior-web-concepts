# Memoization pitfalls

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

Memoization can hide expensive work, but wrong keys, mutable inputs, unbounded caches, and referential churn can make it incorrect or slower. It is a trade-off between CPU, memory, invalidation, and complexity.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const memoize = (fn) => {
  const cache = new Map();
  return (input) => {
    const key = JSON.stringify(input);
    if (!cache.has(key)) cache.set(key, fn(input));
    return cache.get(key);
  };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
