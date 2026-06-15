# Data quality checks

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** mid, data
**Example environment:** node

## Summary

Data quality checks assert freshness, completeness, uniqueness, value ranges, referential integrity, and volume expectations. They catch broken ingestion or product instrumentation before decisions depend on bad data.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const checkFreshness = ({ lastLoadedAt, maxAgeMs, now = Date.now() }) => {
  return now - lastLoadedAt <= maxAgeMs;
};

console.log(checkFreshness({ lastLoadedAt: Date.now() - 1000, maxAgeMs: 5000 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
