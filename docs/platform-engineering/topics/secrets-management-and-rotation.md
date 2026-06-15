# Secrets management and rotation

**Domain:** Platform Engineering
**Group:** Security, identity, and supply chain
**Role tags:** sr, platform, security
**Example environment:** node

## Summary

Secrets management controls how credentials are created, stored, injected, rotated, audited, and revoked. Rotation must be designed so old and new credentials can overlap safely.

## Why it matters

Use this group to control secrets, permissions, artifact trust, policy, and blast radius across the platform.

## JavaScript example

```js
const activeSecrets = [
  { id: 'old', expiresAt: 200 },
  { id: 'new', expiresAt: 400 }
];

console.log(activeSecrets.filter((secret) => secret.expiresAt > 250));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
