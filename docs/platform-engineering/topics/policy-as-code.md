# Policy as code

**Domain:** Platform Engineering
**Group:** Security, identity, and supply chain
**Role tags:** staff, platform, security
**Example environment:** node

## Summary

Policy as code evaluates infrastructure, deployment, or access rules automatically before changes land. It makes governance reviewable and testable instead of relying on manual memory.

## Why it matters

Use this group to control secrets, permissions, artifact trust, policy, and blast radius across the platform.

## JavaScript example

```js
const denyPrivileged = (spec) => {
  return spec.securityContext?.privileged === true ? ['privileged containers are denied'] : [];
};

console.log(denyPrivileged({ securityContext: { privileged: true } }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
