# Query planner & cost-based optimization

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Role tags:** sr, backend
**Example environment:** node

## Summary

A cost-based query planner estimates alternative execution plans using statistics, selectivity, join order, index availability, and I/O/CPU costs. Bad stats or parameter skew can produce poor plans.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const estimate = ({ rows, selectivity, randomIoCost }) => ({
  seqScan: rows,
  indexScan: rows * selectivity * randomIoCost
});

console.log(estimate({ rows: 1_000_000, selectivity: 0.001, randomIoCost: 4 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
