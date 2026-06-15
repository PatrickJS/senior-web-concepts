# UDP, QUIC, and connection migration

**Domain:** Network Engineering
**Group:** Transport protocols and performance
**Role tags:** sr, network, backend
**Example environment:** node

## Summary

UDP gives applications datagrams without TCP's built-in reliability, while QUIC builds encrypted streams, loss recovery, and connection migration over UDP. This changes how latency, packet loss, and client network changes are handled.

## Why it matters

Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.

## JavaScript example

```js
const session = { connectionId: 'cid-123', clientIp: '198.51.100.10' };
const migrated = { ...session, clientIp: '198.51.100.44' };

console.log(session.connectionId === migrated.connectionId);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
