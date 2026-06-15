# TCP handshake and connection lifecycle

**Domain:** Network Engineering
**Group:** Transport protocols and performance
**Role tags:** jr, network, backend
**Example environment:** node

## Summary

The TCP handshake and connection lifecycle establish reliable ordered byte streams, then tear them down with FIN or RST behavior. Connection setup, reuse, idle timeouts, and keepalives affect latency and failure handling.

## Why it matters

Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.

## JavaScript example

```js
const handshake = ['SYN', 'SYN-ACK', 'ACK'];
const established = handshake.at(-1) === 'ACK';

console.log({ handshake, established });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
