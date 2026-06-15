# Finite state modeling

**Domain:** Frontend
**Group:** Offline, collaboration, and data modeling
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Finite state modeling describes UI behavior as explicit states and allowed transitions. It prevents impossible states like loading and saved simultaneously, and makes retries, errors, and cancellation easier to test.

## Why it matters

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

## JavaScript example

```js
const transitions = {
  idle: { SUBMIT: 'saving' },
  saving: { RESOLVE: 'saved', REJECT: 'error' },
  error: { RETRY: 'saving' },
  saved: { EDIT: 'idle' }
};

const transition = (state, event) => transitions[state]?.[event] ?? state;
console.log(transition('saving', 'RESOLVE'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
