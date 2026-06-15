# Prepared statement caching

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Role tags:** sr, backend
**Example environment:** node

## Summary

Prepared statement caching reuses parsed/planned SQL statements to reduce overhead and improve safety. Pitfalls include unbounded caches, schema changes, connection-specific state, and bad generic plans.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const statements = new Map();

export const prepareCached = async (client, sql) => {
  if (!statements.has(sql)) statements.set(sql, await client.prepare(sql));
  return statements.get(sql);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
