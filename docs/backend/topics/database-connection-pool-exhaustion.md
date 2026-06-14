# Database connection pool exhaustion

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Example environment:** node

## Summary

Pool exhaustion occurs when all DB connections are busy or leaked. Symptoms include request pileups, timeouts, and cascading latency; fixes include smaller transactions, timeouts, queue limits, and right-sized pools.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const withConnectionTimeout = (pool, ms) => Promise.race([
  pool.connect(),
  new Promise((_, reject) => setTimeout(() => reject(new Error('pool timeout')), ms))
]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
