# Supply chain provenance

**Domain:** Platform Engineering
**Group:** Security, identity, and supply chain
**Role tags:** sr, platform, security
**Example environment:** node

## Summary

Supply chain provenance records where artifacts came from, how they were built, and what source revision produced them. It supports auditability, tamper detection, and safer deployment policy.

## Why it matters

Use this group to control secrets, permissions, artifact trust, policy, and blast radius across the platform.

## JavaScript example

```js
const provenance = {
  sourceCommit: 'abc123',
  builder: 'github-actions',
  artifactDigest: 'sha256:deadbeef'
};

console.log(provenance);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
