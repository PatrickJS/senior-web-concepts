# Serverless operational constraints

**Domain:** Platform Engineering
**Group:** Containers, orchestration, and runtime platforms
**Role tags:** sr, platform, backend
**Example environment:** node

## Summary

Serverless platforms remove server management but introduce limits around cold starts, execution duration, concurrency, packaging, network access, and observability. The runtime shape must fit the workload.

## Why it matters

Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.

## JavaScript example

```js
const serverlessFit = ({ durationMs, coldStartSensitive, bursty }) => {
  return durationMs < 30_000 && !coldStartSensitive && bursty;
};

console.log(serverlessFit({ durationMs: 500, coldStartSensitive: false, bursty: true }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
