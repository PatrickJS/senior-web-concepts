# Database transaction isolation levels (serializable vs snapshot)

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Role tags:** sr, backend
**Example environment:** node

## Summary

Isolation levels define which concurrent transaction anomalies are possible. Snapshot isolation gives each transaction a consistent view but can allow write skew; serializable aims to behave as if transactions ran one at a time.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const updateWithSnapshotCheck = async (db, id, expectedVersion, patch) => {
  const row = await db.get(id);
  if (row.version !== expectedVersion) throw new Error('serialization conflict');
  return db.save(id, { ...row, ...patch, version: row.version + 1 });
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
