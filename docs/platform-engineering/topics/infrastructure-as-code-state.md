# Infrastructure as Code state

**Domain:** Platform Engineering
**Group:** Infrastructure, environments, and cloud networking
**Role tags:** sr, platform
**Example environment:** node

## Summary

Infrastructure as Code state records the known deployed resources and their desired configuration. State must be locked, backed up, reviewed, and protected because it is a control surface for production.

## Why it matters

Use this group to model infrastructure state, environment promotion, DNS, certificates, load balancing, and network reachability.

## JavaScript example

```js
const stateLock = { holder: 'ci-run-123', expiresAt: Date.now() + 300_000 };
const canApply = (lock) => !lock || lock.expiresAt < Date.now();

console.log(canApply(stateLock));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
