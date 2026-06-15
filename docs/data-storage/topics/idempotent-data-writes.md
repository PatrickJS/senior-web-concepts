# Idempotent data writes

**Domain:** Data & Storage Engineering
**Group:** Transactions, migrations, and integrity
**Role tags:** sr, backend, data
**Example environment:** node

## Summary

Idempotent writes make retries safe by using stable operation IDs, uniqueness constraints, upserts, or processed-event tables. They are essential when clients, workers, or queues can repeat work.

## Why it matters

Use this group to protect correctness while schema, code, data volume, and concurrent writes change.

## JavaScript example

```js
const writes = new Map();

const writeOnce = (operationId, value) => {
  if (!writes.has(operationId)) writes.set(operationId, value);
  return writes.get(operationId);
};

console.log(writeOnce('op-1', { ok: true }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
