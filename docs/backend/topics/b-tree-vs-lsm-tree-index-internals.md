# B-tree vs LSM-tree index internals

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Role tags:** sr, backend
**Example environment:** node

## Summary

B-trees maintain ordered pages for efficient point and range reads, while LSM-trees buffer writes and compact sorted files later. The trade-off is read amplification versus write throughput and compaction cost.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const chooseIndexEngine = ({ writeHeavy, rangeQueries }) => {
  if (writeHeavy && !rangeQueries) return 'LSM tree: batch writes, compact later';
  return 'B-tree: ordered pages and predictable range scans';
};

console.log(chooseIndexEngine({ writeHeavy: true, rangeQueries: false }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
