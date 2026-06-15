# Virtual DOM diffing complexity

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Virtual DOM diffing compares previous and next trees to compute DOM operations. Keys reduce expensive ambiguity in lists, while unstable keys or deep tree churn increase work and bugs.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const diffByKey = (previous, next) => {
  const oldByKey = new Map(previous.map((node) => [node.key, node]));
  return next.map((node) => ({ before: oldByKey.get(node.key), after: node }));
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
