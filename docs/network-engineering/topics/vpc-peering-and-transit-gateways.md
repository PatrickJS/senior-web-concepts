# VPC peering and transit gateways

**Domain:** Network Engineering
**Group:** Service networking and cloud topology
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

VPC peering and transit gateways connect private networks with different scaling and routing properties. Topology choices affect blast radius, route propagation, inspection points, and ownership boundaries.

## Why it matters

Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.

## JavaScript example

```js
const topology = {
  hub: 'transit-gateway',
  spokes: ['prod-vpc', 'analytics-vpc', 'shared-services-vpc']
};

console.log(topology.spokes.includes('prod-vpc'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
