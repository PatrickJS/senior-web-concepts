# Route tables and next hops

**Domain:** Network Engineering
**Group:** IP addressing and routing fundamentals
**Role tags:** mid, network, platform
**Example environment:** node

## Summary

Route tables choose the next hop for packets based on destination prefixes. Longest-prefix matching, default routes, blackhole routes, and asymmetric paths are core ideas for debugging reachability.

## Why it matters

Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.

## JavaScript example

```js
const routes = [
  { prefix: '10.0.0.0/8', nextHop: 'private-core' },
  { prefix: '10.20.0.0/16', nextHop: 'app-vpc' },
  { prefix: '0.0.0.0/0', nextHop: 'internet-gateway' }
];

console.log(routes.toSorted((a, b) => Number(b.prefix.split('/')[1]) - Number(a.prefix.split('/')[1]))[0]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
