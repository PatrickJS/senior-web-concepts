# Exactly-once processing guarantees

**Domain:** Backend
**Group:** Distributed systems and consistency
**Example environment:** node

## Summary

Exactly-once usually means effects are applied once through idempotency and transactions, not that messages are delivered once. Strong answers distinguish delivery, processing, side effects, offsets, and sink commits.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const processExactlyOnceEnough = async (db, event) => db.transaction(async (tx) => {
  if (await tx.processed.exists(event.id)) return;
  await tx.apply(event);
  await tx.processed.insert({ id: event.id });
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
