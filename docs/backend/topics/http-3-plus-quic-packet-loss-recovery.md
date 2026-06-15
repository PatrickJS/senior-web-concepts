# HTTP/3 + QUIC packet loss recovery

**Domain:** Backend
**Group:** Transport and protocol internals
**Role tags:** sr, backend
**Example environment:** node

## Summary

HTTP/3 uses QUIC over UDP, combining TLS 1.3, multiplexed streams, connection migration, and per-stream loss recovery. Packet loss no longer blocks unrelated streams the same way HTTP/2 over TCP can.

## Why it matters

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

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
