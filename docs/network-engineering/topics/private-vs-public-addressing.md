# Private vs public addressing

**Domain:** Network Engineering
**Group:** IP addressing and routing fundamentals
**Role tags:** jr, network, platform
**Example environment:** node

## Summary

Private and public addressing define whether traffic can be routed on the public internet or must stay inside a private network boundary. Engineers should recognize RFC1918 ranges, loopback, link-local addresses, and the translation or proxy paths needed for egress.

## Why it matters

Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.

## JavaScript example

```js
const isPrivateV4 = (address) => {
  const [a, b] = address.split('.').map(Number);
  return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168);
};

console.log(isPrivateV4('10.12.4.9'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
