# Service mesh traffic shifting

**Domain:** Backend
**Group:** Cloud, containers, and service topology
**Example environment:** node

## Summary

Service mesh traffic shifting routes percentages of traffic between versions or services using proxy control planes. It supports canary, blue-green, retries, and mTLS, but adds latency, complexity, and debugging surface.

## Why it matters

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

## JavaScript example

```js
const chooseVersion = (random = Math.random()) => {
  if (random < 0.05) return 'canary';
  return 'stable';
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
