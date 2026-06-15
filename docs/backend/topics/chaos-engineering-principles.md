# Chaos engineering principles

**Domain:** Backend
**Group:** Observability and operations
**Role tags:** sr, backend
**Example environment:** node

## Summary

Chaos engineering tests resilience by injecting controlled failures into production-like systems. It should start with hypotheses, blast-radius limits, rollback, observability, and learning from the result.

## Why it matters

Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.

## JavaScript example

```js
const maybeFail = async (task, rate = 0.05) => {
  if (Math.random() < rate) throw new Error('injected failure');
  return task();
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
