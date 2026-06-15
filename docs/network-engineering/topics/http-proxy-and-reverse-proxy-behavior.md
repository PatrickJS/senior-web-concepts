# HTTP proxy and reverse proxy behavior

**Domain:** Network Engineering
**Group:** DNS, TLS, and edge delivery
**Role tags:** mid, network, backend
**Example environment:** node

## Summary

HTTP proxies and reverse proxies terminate, forward, rewrite, buffer, retry, and observe traffic between clients and services. Headers such as Host, X-Forwarded-For, and Forwarded become trust boundaries.

## Why it matters

Use this group to connect names, certificates, proxies, CDNs, caches, and edge routing to real production reachability.

## JavaScript example

```js
const forwardedHeaders = (request) => ({
  host: request.headers.host,
  originalFor: request.socket.remoteAddress,
  forwardedProto: 'https'
});

console.log(forwardedHeaders({ headers: { host: 'api.example.com' }, socket: { remoteAddress: '203.0.113.7' } }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
