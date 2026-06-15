# Sidecar pattern limitations

**Domain:** Backend
**Group:** Cloud, containers, and service topology
**Role tags:** sr, backend
**Example environment:** node

## Summary

Sidecars add colocated helper processes for proxying, logging, security, or config. Limitations include extra hops, resource overhead, lifecycle coupling, harder debugging, and duplicated functionality per pod.

## Why it matters

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

## JavaScript example

```js
const callThroughSidecar = async (request, sidecar) => {
  const start = performance.now();
  const response = await sidecar.forward(request);
  return { response, sidecarOverheadMs: performance.now() - start };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
