# Query execution plan reading

**Domain:** Data & Storage Engineering
**Group:** Indexing and query performance
**Role tags:** sr, backend, data
**Example environment:** node

## Summary

Query plans show how the database intends to scan, join, sort, aggregate, and estimate row counts. Reading plans helps diagnose missing indexes, stale statistics, bad join order, and memory-heavy operations.

## Why it matters

Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.

## JavaScript example

```js
const plan = [
  { node: 'Index Scan', estimatedRows: 100, actualRows: 120 },
  { node: 'Nested Loop', estimatedRows: 100, actualRows: 5000 }
];

console.log(plan.filter((step) => step.actualRows > step.estimatedRows * 10));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
