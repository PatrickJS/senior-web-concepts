# Container runtime security (seccomp, AppArmor)

**Domain:** Backend
**Group:** Cloud, containers, and service topology
**Example environment:** node

## Summary

Container runtime security restricts what a process can do despite sharing the host kernel. seccomp filters syscalls, AppArmor/SELinux constrain access, and least-privilege settings reduce blast radius.

## Why it matters

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

## JavaScript example

```js
const containerPolicy = {
  readOnlyRootFilesystem: true,
  allowPrivilegeEscalation: false,
  capabilities: { drop: ['ALL'] },
  seccompProfile: { type: 'RuntimeDefault' }
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
