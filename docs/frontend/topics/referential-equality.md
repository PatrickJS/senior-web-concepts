# Referential equality

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Referential equality compares object identity rather than deep value. UI frameworks use it for memoization and update detection, so recreating objects or functions can trigger unnecessary work.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const stableOptions = Object.freeze({ pageSize: 50 });

const shouldRerender = (previous, next) => previous.options !== next.options;
console.log(shouldRerender({ options: stableOptions }, { options: stableOptions }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
