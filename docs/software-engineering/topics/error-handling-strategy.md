# Error handling strategy

**Domain:** Software Engineering
**Group:** Modeling, APIs, and contracts
**Role tags:** mid, software
**Example environment:** node

## Summary

Error handling strategy decides which failures throw, which return typed outcomes, which retry, which are user-visible, and which are programmer bugs. A consistent strategy keeps failures inspectable instead of accidental.

## Why it matters

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

## JavaScript example

```js
const classifyError = (error) => {
  if (error.name === 'ValidationError') return 'show-user-message';
  if (error.retryable) return 'retry';
  return 'fail-fast';
};

console.log(classifyError({ name: 'ValidationError' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
