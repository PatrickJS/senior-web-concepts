# Optimistic UI rollback strategy

**Domain:** Frontend
**Group:** Offline, collaboration, and data modeling
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Optimistic UI applies a predicted result immediately, then confirms or rolls back after the server responds. A reliable strategy records previous state, pending operation IDs, failure rules, and reconciliation with server truth.

## Why it matters

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

## JavaScript example

```js
let state = { liked: false, count: 0 };

const optimisticLike = async (save) => {
  const previous = state;
  state = { liked: true, count: state.count + 1 };

  try {
    await save();
  } catch {
    state = previous;
  }
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
