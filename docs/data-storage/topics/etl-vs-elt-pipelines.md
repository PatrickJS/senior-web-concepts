# ETL vs ELT pipelines

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** mid, data
**Example environment:** node

## Summary

ETL transforms before loading into the target system, while ELT loads raw data first and transforms inside the analytical store. The decision changes cost, lineage, debugging, privacy, and ownership.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const choosePipeline = ({ rawRetentionNeeded, warehouseCanTransform }) => {
  if (rawRetentionNeeded && warehouseCanTransform) return 'elt';
  return 'etl';
};

console.log(choosePipeline({ rawRetentionNeeded: true, warehouseCanTransform: true }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
