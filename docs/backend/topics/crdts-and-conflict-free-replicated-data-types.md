# CRDTs & conflict-free replicated data types

**Domain:** Backend
**Group:** Distributed systems and consistency
**Example environment:** node

## Summary

CRDTs let replicas update independently and merge deterministically without coordination. Backend use cases include counters, sets, presence, collaborative state, and eventually consistent multi-region writes.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const mergeCounter = (a, b) => {
  const nodes = new Set([...Object.keys(a), ...Object.keys(b)]);
  return Object.fromEntries([...nodes].map((node) => [node, Math.max(a[node] ?? 0, b[node] ?? 0)]));
};

console.log(mergeCounter({ a: 2 }, { a: 1, b: 3 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
