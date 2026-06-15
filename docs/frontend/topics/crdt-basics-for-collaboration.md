# CRDT basics for collaboration

**Domain:** Frontend
**Group:** Offline, collaboration, and data modeling
**Role tags:** sr, frontend
**Example environment:** node

## Summary

CRDTs are data types designed so replicas can update independently and merge without conflicts. A clear answer covers commutativity, associativity, idempotent merges, causal metadata, and trade-offs in metadata size.

## Why it matters

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

## JavaScript example

```js
const mergeGSet = (a, b) => new Set([...a, ...b]);

const tabA = new Set(['task:1']);
const tabB = new Set(['task:2']);
const merged = mergeGSet(tabA, tabB);

console.log([...merged]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
