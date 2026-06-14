# Log aggregation with sampling

**Domain:** Backend
**Group:** Observability and operations
**Example environment:** node

## Summary

Log sampling reduces volume while preserving important signals. Good policies keep all errors/security events, sample noisy success paths, and attach trace IDs so sampled logs still join a request story.

## Why it matters

Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.

## JavaScript example

```js
const shouldLog = ({ level, rate = 0.01 }) => {
  if (level === 'error') return true;
  return Math.random() < rate;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
