# ACID vs BASE trade-offs

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Role tags:** sr, backend
**Example environment:** node

## Summary

ACID emphasizes atomicity, consistency, isolation, and durability; BASE accepts softer consistency for availability and scalability. The real decision is which invariants must be immediately correct versus eventually reconciled.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const acidTransfer = async (db, from, to, amount) => db.transaction(async (tx) => {
  await tx.debit(from, amount);
  await tx.credit(to, amount);
});

const baseUpdate = async (events, event) => {
  events.publish(event);
  return { accepted: true, visibleAfterProjection: true };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
