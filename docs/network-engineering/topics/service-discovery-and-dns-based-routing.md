# Service discovery and DNS-based routing

**Domain:** Network Engineering
**Group:** Service networking and cloud topology
**Role tags:** mid, network, platform
**Example environment:** node

## Summary

Service discovery lets callers find healthy service instances or stable service names. DNS-based discovery is simple and portable, but TTLs, negative caching, health checks, and client caching shape failover behavior.

## Why it matters

Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.

## JavaScript example

```js
const records = [
  { name: 'api.service.local', target: '10.0.1.10', healthy: true },
  { name: 'api.service.local', target: '10.0.2.10', healthy: false }
];

console.log(records.filter((record) => record.healthy));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
