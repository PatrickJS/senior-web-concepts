# CIDR subnet planning

**Domain:** Network Engineering
**Group:** IP addressing and routing fundamentals
**Role tags:** jr, network, platform
**Example environment:** node

## Summary

CIDR subnet planning divides address space into ranges sized for hosts, growth, routing, and isolation. A good plan leaves room for expansion, avoids overlapping ranges, and keeps route tables understandable.

## Why it matters

Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.

## JavaScript example

```js
const addressesInSubnet = (prefix) => 2 ** (32 - prefix);
const usableHosts = (prefix) => Math.max(0, addressesInSubnet(prefix) - 2);

console.log({ cidr: '10.0.8.0/21', usableHosts: usableHosts(21) });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
