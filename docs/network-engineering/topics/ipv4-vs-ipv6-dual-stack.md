# IPv4 vs IPv6 dual-stack

**Domain:** Network Engineering
**Group:** Service networking and cloud topology
**Role tags:** mid, network, platform
**Example environment:** node

## Summary

IPv4 and IPv6 dual-stack systems support both address families across DNS, routing, firewalls, load balancers, clients, and observability. Partial dual-stack rollouts can produce asymmetric reachability failures.

## Why it matters

Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.

## JavaScript example

```js
const dnsAnswers = {
  A: ['203.0.113.10'],
  AAAA: ['2001:db8::10']
};

console.log(Object.keys(dnsAnswers));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
