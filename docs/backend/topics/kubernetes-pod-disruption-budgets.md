# Kubernetes pod disruption budgets

**Domain:** Backend
**Group:** Cloud, containers, and service topology
**Role tags:** sr, backend
**Example environment:** node

## Summary

Pod disruption budgets limit voluntary disruptions so enough replicas remain available during drains, upgrades, or maintenance. They are useful only when paired with enough replicas, readiness probes, and capacity.

## Why it matters

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

## JavaScript example

```js
const podDisruptionBudget = {
  apiVersion: 'policy/v1',
  kind: 'PodDisruptionBudget',
  spec: { minAvailable: 2, selector: { matchLabels: { app: 'api' } } }
};

console.log(JSON.stringify(podDisruptionBudget, null, 2));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
