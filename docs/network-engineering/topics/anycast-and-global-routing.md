# Anycast and global routing

**Domain:** Network Engineering
**Group:** IP addressing and routing fundamentals
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

Anycast advertises the same address from multiple locations so routing sends users to a nearby or preferred site. It improves global latency and resilience but requires careful health signaling and traffic-drain behavior.

## Why it matters

Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.

## JavaScript example

```js
const chooseAnycastSite = (measurements) => {
  return measurements.toSorted((a, b) => a.rttMs - b.rttMs)[0];
};

console.log(chooseAnycastSite([
  { site: 'iad', rttMs: 28 },
  { site: 'sfo', rttMs: 71 }
]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
