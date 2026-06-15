# Statistics and cardinality estimation

**Domain:** Data & Storage Engineering
**Group:** Indexing and query performance
**Role tags:** sr, backend, data
**Example environment:** node

## Summary

Statistics and cardinality estimates let a planner compare possible execution paths. Bad estimates from skew, correlation, stale stats, or parameter sensitivity can make reasonable SQL run poorly.

## Why it matters

Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.

## JavaScript example

```js
const estimateRows = ({ totalRows, selectivity }) => totalRows * selectivity;

console.log(estimateRows({ totalRows: 2_000_000, selectivity: 0.001 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
