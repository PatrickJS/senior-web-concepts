# TLS 1.3 handshake internals

**Domain:** Backend
**Group:** Transport and protocol internals
**Role tags:** sr, backend
**Example environment:** node

## Summary

TLS 1.3 reduces handshake round trips and encrypts more of the negotiation than TLS 1.2. Key concepts are ClientHello, key share, certificate verification, Finished messages, forward secrecy, and optional 0-RTT replay risk.

## Why it matters

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

## JavaScript example

```js
const tls13Handshake = [
  'ClientHello: supported versions, cipher suites, key share',
  'ServerHello: selected suite and key share',
  'EncryptedExtensions + Certificate + Finished',
  'Client Finished',
  'Application data with forward secrecy'
];

console.log(tls13Handshake);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
