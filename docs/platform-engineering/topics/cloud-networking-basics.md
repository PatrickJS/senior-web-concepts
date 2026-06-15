# Cloud networking basics

**Domain:** Platform Engineering
**Group:** Infrastructure, environments, and cloud networking
**Role tags:** mid, platform
**Example environment:** node

## Summary

Cloud networking basics include VPCs, subnets, routing tables, NAT, firewalls, private endpoints, and service reachability. Platform engineers must reason about packets, identity, and policy together.

## Why it matters

Use this group to model infrastructure state, environment promotion, DNS, certificates, load balancing, and network reachability.

## JavaScript example

```js
const allow = ({ source, target, port }) => {
  return source === 'api' && target === 'database' && port === 5432;
};

console.log(allow({ source: 'api', target: 'database', port: 5432 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
