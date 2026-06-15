# Optimistic locking with version vectors

**Domain:** Backend
**Group:** Distributed systems and consistency
**Role tags:** sr, backend
**Example environment:** node

## Summary

Optimistic locking detects conflicts by comparing a version or vector before write commit. Version vectors track causal progress across replicas and can distinguish stale writes from concurrent writes.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const dominates = (a, b) => Object.keys({ ...a, ...b }).every((node) => (a[node] ?? 0) >= (b[node] ?? 0));

console.log(dominates({ a: 2, b: 1 }, { a: 1, b: 1 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
