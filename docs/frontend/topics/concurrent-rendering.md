# Concurrent rendering

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

Concurrent rendering lets a framework prepare new UI without immediately committing it. It enables interruptible rendering and prioritization, but requires avoiding side effects during render and preventing tearing.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
let committed = { text: 'old' };
let draft = { ...committed, text: 'new' };

const commit = () => {
  committed = draft;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
