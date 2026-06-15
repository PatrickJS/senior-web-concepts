# Hot query and slow query triage

**Domain:** Data & Storage Engineering
**Group:** Indexing and query performance
**Role tags:** sr, backend, data, platform
**Example environment:** node

## Summary

Hot query triage identifies the queries that dominate database load by frequency, latency, rows scanned, lock wait, and memory use. Fixes can include index changes, query rewrites, caching, pagination, or product flow changes.

## Why it matters

Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.

## JavaScript example

```js
const queries = [
  { sql: 'select orders', calls: 1000, totalMs: 5000 },
  { sql: 'select users', calls: 100, totalMs: 2000 }
];

console.log(queries.toSorted((a, b) => b.totalMs - a.totalMs)[0]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
