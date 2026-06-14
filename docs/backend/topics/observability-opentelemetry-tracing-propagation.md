# Observability: OpenTelemetry tracing propagation

**Domain:** Backend
**Group:** Observability and operations
**Example environment:** node

## Summary

Tracing propagation carries trace and span context across service boundaries. OpenTelemetry standardizes context extraction/injection so logs, metrics, and spans can be correlated across distributed requests.

## Why it matters

Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.

## JavaScript example

```js
const parseTraceParent = (value) => {
  const [version, traceId, parentId, flags] = value.split('-');
  return { version, traceId, parentId, sampled: flags === '01' };
};

console.log(parseTraceParent('00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
