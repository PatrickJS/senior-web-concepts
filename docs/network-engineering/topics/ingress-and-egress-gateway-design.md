# Ingress and egress gateway design

**Domain:** Network Engineering
**Group:** Service networking and cloud topology
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

Ingress and egress gateways centralize traffic entry and exit for policy, observability, routing, and security controls. They also become critical-path infrastructure with capacity and failure-mode obligations.

## Why it matters

Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.

## JavaScript example

```js
const gatewayPolicy = {
  ingress: ['tls-termination', 'waf', 'rate-limit'],
  egress: ['allowlist', 'audit-log']
};

console.log(gatewayPolicy);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
