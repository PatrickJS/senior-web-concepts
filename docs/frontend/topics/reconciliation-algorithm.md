# Reconciliation algorithm

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

Reconciliation decides how a framework maps a new UI description onto existing component or DOM instances. Keyed identity, component type, position, and state preservation rules are central.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const reconcileChildren = (oldChildren, newChildren) => {
  const oldByKey = new Map(oldChildren.map((child) => [child.key, child]));
  return newChildren.map((child) => ({ ...child, previous: oldByKey.get(child.key) }));
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
