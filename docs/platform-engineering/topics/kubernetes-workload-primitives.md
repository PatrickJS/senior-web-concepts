# Kubernetes workload primitives

**Domain:** Platform Engineering
**Group:** Containers, orchestration, and runtime platforms
**Role tags:** sr, platform
**Example environment:** node

## Summary

Kubernetes workload primitives such as Deployments, StatefulSets, Jobs, Services, ConfigMaps, Secrets, and Ingresses describe desired runtime state. Engineers should know what each primitive owns and does not own.

## Why it matters

Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.

## JavaScript example

```js
const deployment = {
  kind: 'Deployment',
  spec: { replicas: 3, selector: { matchLabels: { app: 'api' } } }
};

console.log(deployment);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
