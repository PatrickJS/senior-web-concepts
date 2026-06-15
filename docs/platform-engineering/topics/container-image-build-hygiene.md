# Container image build hygiene

**Domain:** Platform Engineering
**Group:** Containers, orchestration, and runtime platforms
**Role tags:** mid, platform, security
**Example environment:** node

## Summary

Container image hygiene reduces build drift, size, vulnerabilities, and runtime privilege. Good images pin bases, avoid secrets, run as non-root, minimize layers, and separate build tools from runtime.

## Why it matters

Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.

## JavaScript example

```js
const imagePolicy = {
  runAsNonRoot: true,
  readOnlyRootFilesystem: true,
  disallowLatestTag: true
};

console.log(imagePolicy);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
