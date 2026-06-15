# Schema migration expand-contract

**Domain:** Data & Storage Engineering
**Group:** Transactions, migrations, and integrity
**Role tags:** sr, backend, data, platform
**Example environment:** node

## Summary

Expand-contract migrations introduce schema changes in backward-compatible phases: expand, dual-read/write or backfill, cut over, then contract. This keeps old and new code safe during rolling deploys.

## Why it matters

Use this group to protect correctness while schema, code, data volume, and concurrent writes change.

## JavaScript example

```js
const migrationPlan = [
  'add nullable new column',
  'deploy dual writes',
  'backfill existing rows',
  'read from new column',
  'drop old column'
];

console.log(migrationPlan);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
