# Deduplication and late-arriving data

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** sr, data
**Example environment:** node

## Summary

Deduplication and late-arriving data handling keep analytical results correct when events are retried, delayed, reordered, or replayed. Designs need stable IDs, watermarks, correction windows, and recomputation paths.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const acceptEvent = ({ eventTime, watermark }) => {
  if (eventTime < watermark) return 'late-correction';
  return 'on-time';
};

console.log(acceptEvent({ eventTime: 100, watermark: 120 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
