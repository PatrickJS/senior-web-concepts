# Autoscaling signal selection

**Domain:** Platform Engineering
**Group:** Containers, orchestration, and runtime platforms
**Role tags:** sr, platform
**Example environment:** node

## Summary

Autoscaling signal selection chooses metrics that indicate real demand, such as CPU, memory, queue depth, request concurrency, or custom service latency. Bad signals can scale too late, too far, or in the wrong direction.

## Why it matters

Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.

## JavaScript example

```js
const desiredReplicas = ({ queueDepth, targetDepthPerReplica }) => {
  return Math.max(1, Math.ceil(queueDepth / targetDepthPerReplica));
};

console.log(desiredReplicas({ queueDepth: 950, targetDepthPerReplica: 100 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
