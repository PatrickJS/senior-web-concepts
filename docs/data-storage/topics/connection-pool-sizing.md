# Connection pool sizing

**Domain:** Data & Storage Engineering
**Group:** Indexing and query performance
**Role tags:** mid, backend, data, platform
**Example environment:** node

## Summary

Connection pool sizing balances application concurrency against database capacity. Too few connections bottleneck callers; too many cause queueing, memory pressure, lock contention, and database overload.

## Why it matters

Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.

## JavaScript example

```js
const poolSize = ({ instances, dbMaxConnections, reserved = 10 }) => {
  return Math.floor((dbMaxConnections - reserved) / instances);
};

console.log(poolSize({ instances: 8, dbMaxConnections: 200 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
