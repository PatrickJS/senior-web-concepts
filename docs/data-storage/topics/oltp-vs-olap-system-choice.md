# OLTP vs OLAP system choice

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** mid, backend, data
**Example environment:** node

## Summary

OLTP systems optimize transactional correctness and low-latency writes, while OLAP systems optimize analytical scans and aggregations. Mixing them without boundaries can hurt both product behavior and reporting.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const chooseStore = ({ queryType, writeLatencySensitive }) => {
  if (queryType === 'aggregate' && !writeLatencySensitive) return 'olap';
  return 'oltp';
};

console.log(chooseStore({ queryType: 'aggregate', writeLatencySensitive: false }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
