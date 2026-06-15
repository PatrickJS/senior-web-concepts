# Service mesh trade-offs

**Domain:** Platform Engineering
**Group:** Containers, orchestration, and runtime platforms
**Role tags:** staff, platform
**Example environment:** node

## Summary

Service meshes add traffic policy, mTLS, retries, telemetry, and routing at the sidecar or proxy layer. They also add operational complexity, resource cost, and debugging paths that teams must be ready to own.

## Why it matters

Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.

## JavaScript example

```js
const needsMesh = ({ services, mtlsRequired, trafficPolicyComplex }) => {
  return services > 20 && (mtlsRequired || trafficPolicyComplex);
};

console.log(needsMesh({ services: 30, mtlsRequired: true, trafficPolicyComplex: false }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
