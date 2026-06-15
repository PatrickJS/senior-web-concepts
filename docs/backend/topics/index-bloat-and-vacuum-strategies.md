# Index bloat & vacuum strategies

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Role tags:** sr, backend
**Example environment:** node

## Summary

Index bloat is wasted index space from dead or outdated entries, common in MVCC systems. Vacuuming, autovacuum tuning, fillfactor choices, and periodic reindexing control space and planner quality.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const needsVacuum = ({ liveRows, deadRows }) => {
  const ratio = deadRows / Math.max(1, liveRows + deadRows);
  return ratio > 0.2;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
