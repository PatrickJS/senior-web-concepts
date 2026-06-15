# Structural sharing

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Structural sharing reuses unchanged parts of immutable data structures. It reduces memory churn and lets referential equality identify which subtrees changed.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const nextState = (state) => ({
  ...state,
  user: { ...state.user, name: 'Patrick' }
});

const state = { user: { name: 'Old' }, settings: { theme: 'dark' } };
const next = nextState(state);
console.log(state.settings === next.settings);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
