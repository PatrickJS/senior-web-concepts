# Prometheus metric cardinality explosion

**Domain:** Backend
**Group:** Observability and operations
**Role tags:** sr, backend
**Example environment:** node

## Summary

Cardinality explosion happens when labels create too many unique time series. User IDs, raw URLs, emails, request IDs, and high-cardinality dimensions can make Prometheus expensive or unusable.

## Why it matters

Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.

## JavaScript example

```js
const labels = ({ route, method, status }) => ({ route, method, status });

// Avoid labels like userId, email, requestId, or raw URL.
console.log(labels({ route: '/users/:id', method: 'GET', status: 200 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
