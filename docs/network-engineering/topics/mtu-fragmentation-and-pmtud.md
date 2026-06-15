# MTU, fragmentation, and PMTUD

**Domain:** Network Engineering
**Group:** Transport protocols and performance
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

MTU limits the largest packet a path can carry without fragmentation. Path MTU discovery failures can produce confusing partial outages where small requests work and larger responses stall.

## Why it matters

Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.

## JavaScript example

```js
const fitsPathMtu = ({ payloadBytes, headersBytes, pathMtu }) => {
  return payloadBytes + headersBytes <= pathMtu;
};

console.log(fitsPathMtu({ payloadBytes: 1400, headersBytes: 60, pathMtu: 1500 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
