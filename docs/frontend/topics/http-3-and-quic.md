# HTTP/3 and QUIC

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** node

## Summary

HTTP/3 runs HTTP semantics over QUIC instead of TCP. It reduces transport head-of-line blocking, integrates TLS 1.3, supports connection migration, and handles loss recovery per stream more gracefully than HTTP/2 over TCP.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const packets = new Map([[1, 'sent'], [2, 'sent'], [3, 'sent']]);
const acked = new Set([1, 3]);

for (const packet of packets.keys()) {
  if (!acked.has(packet)) console.log('retransmit packet data from', packet);
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
