# Deadlock detection & prevention

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Example environment:** node

## Summary

Deadlocks occur when transactions wait on each other in a cycle. Databases detect cycles in wait-for graphs or prevent them with lock ordering, timeouts, smaller transactions, and consistent access patterns.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const waitsFor = new Map([
  ['tx1', ['tx2']],
  ['tx2', ['tx1']]
]);

const hasCycle = (node, seen = new Set()) => {
  if (seen.has(node)) return true;
  seen.add(node);
  return (waitsFor.get(node) ?? []).some((next) => hasCycle(next, new Set(seen)));
};

console.log(hasCycle('tx1'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
