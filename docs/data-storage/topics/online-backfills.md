# Online backfills

**Domain:** Data & Storage Engineering
**Group:** Transactions, migrations, and integrity
**Role tags:** sr, backend, data, platform
**Example environment:** node

## Summary

Online backfills update existing data while production traffic continues. Safe backfills use batches, checkpoints, idempotency, throttling, observability, and rollback or pause behavior.

## Why it matters

Use this group to protect correctness while schema, code, data volume, and concurrent writes change.

## JavaScript example

```js
const backfillBatch = async ({ rows, checkpoint, write }) => {
  const batch = rows.filter((row) => row.id > checkpoint).slice(0, 100);
  for (const row of batch) await write(row);
  return batch.at(-1)?.id ?? checkpoint;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
