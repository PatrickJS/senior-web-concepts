# Immutable data patterns

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

Immutable data patterns create new values instead of mutating existing state. They make change detection, undo, time travel, concurrency, and structural sharing easier.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const updateTodo = (state, id, patch) => ({
  ...state,
  todos: state.todos.map((todo) => todo.id === id ? { ...todo, ...patch } : todo)
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
