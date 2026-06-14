# Event sourcing in frontend

**Domain:** Frontend
**Group:** Offline, collaboration, and data modeling
**Example environment:** node

## Summary

Frontend event sourcing stores user/domain events and derives UI state from projections. It helps with undo/redo, offline queues, auditability, replay, optimistic updates, and deterministic debugging.

## Why it matters

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

## JavaScript example

```js
const events = [
  { type: 'todo.added', text: 'Ship docs' },
  { type: 'todo.completed', index: 0 }
];

const project = (state, event) => {
  if (event.type === 'todo.added') return { todos: [...state.todos, { text: event.text, done: false }] };
  if (event.type === 'todo.completed') return { todos: state.todos.map((todo, index) => index === event.index ? { ...todo, done: true } : todo) };
  return state;
};

console.log(events.reduce(project, { todos: [] }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
