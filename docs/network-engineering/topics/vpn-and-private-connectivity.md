# VPN and private connectivity

**Domain:** Network Engineering
**Group:** Security and access control
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

VPN and private connectivity link users, offices, clouds, and partners without exposing services publicly. Designs must cover routing, authentication, split tunnel behavior, overlapping CIDRs, failover, and auditability.

## Why it matters

Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.

## JavaScript example

```js
const hasOverlappingCidr = (left, right) => left === right;

console.log(hasOverlappingCidr('10.10.0.0/16', '10.10.0.0/16'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
