# HTTP/2 multiplexing & HPACK

**Domain:** Backend
**Group:** Transport and protocol internals
**Example environment:** node

## Summary

HTTP/2 multiplexes many streams over one TCP connection and compresses headers with HPACK dynamic tables. It removes HTTP/1.1 request queueing but can still suffer TCP-level head-of-line blocking.

## Why it matters

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

## JavaScript example

```js
import http2 from 'node:http2';

const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({ ':status': 200, 'content-type': 'application/json' });
  stream.end(JSON.stringify({ path: headers[':path'] }));
});
server.listen(0);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
