# Multi-region failover routing

**Domain:** Network Engineering
**Group:** Service networking and cloud topology
**Role tags:** sr, network, system
**Example environment:** node

## Summary

Multi-region failover routing directs users away from unhealthy regions while balancing recovery time, data consistency, DNS or edge cache behavior, and traffic-drain safety. It must be tested before an incident.

## Why it matters

Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.

## JavaScript example

```js
const chooseRegion = (regions) => {
  return regions.find((region) => region.healthy && region.replicationLagSeconds < 30);
};

console.log(chooseRegion([{ name: 'us-east', healthy: false, replicationLagSeconds: 0 }, { name: 'us-west', healthy: true, replicationLagSeconds: 12 }]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
