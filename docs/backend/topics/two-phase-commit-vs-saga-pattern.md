# Two-phase commit vs Saga pattern

**Domain:** Backend
**Group:** Distributed systems and consistency
**Role tags:** sr, backend
**Example environment:** node

## Summary

Two-phase commit coordinates participants for atomic commit but can block and depends on a coordinator. Sagas split work into local transactions with compensating actions, trading atomicity for availability and explicit recovery.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const runSaga = async (steps) => {
  const completed = [];
  try {
    for (const step of steps) {
      await step.do();
      completed.push(step);
    }
  } catch (error) {
    for (const step of completed.reverse()) await step.undo?.();
    throw error;
  }
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
