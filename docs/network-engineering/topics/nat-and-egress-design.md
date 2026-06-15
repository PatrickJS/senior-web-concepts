# NAT and egress design

**Domain:** Network Engineering
**Group:** IP addressing and routing fundamentals
**Role tags:** mid, network, platform
**Example environment:** node

## Summary

NAT and egress design let private workloads initiate outbound traffic through shared public addresses. Designs must account for port exhaustion, source identity, logging, allowlists, and failure domains.

## Why it matters

Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.

## JavaScript example

```js
const natTable = new Map();

const allocateEgress = ({ privateIp, privatePort, publicIp }) => {
  const publicPort = 40_000 + natTable.size;
  natTable.set(publicPort, { privateIp, privatePort });
  return { publicIp, publicPort };
};

console.log(allocateEgress({ privateIp: '10.0.1.25', privatePort: 51320, publicIp: '203.0.113.10' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
