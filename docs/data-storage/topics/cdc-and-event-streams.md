# CDC and event streams

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** sr, backend, data
**Example environment:** node

## Summary

Change data capture turns database changes into ordered event streams for replication, search indexing, analytics, or integration. It must handle ordering, deletes, schema evolution, backfills, and replay.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const toChangeEvent = ({ table, op, before, after, lsn }) => ({
  table,
  op,
  key: after?.id ?? before.id,
  after,
  lsn
});

console.log(toChangeEvent({ table: 'users', op: 'update', after: { id: 1 }, lsn: 42 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
