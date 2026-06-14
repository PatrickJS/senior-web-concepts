# gRPC streaming + flow control

**Domain:** Backend
**Group:** Transport and protocol internals
**Example environment:** node

## Summary

gRPC streaming sends multiple messages over HTTP/2 streams with flow control. A good explanation covers client/server/bidirectional streams, backpressure, message framing, deadlines, cancellation, and per-stream windows.

## Why it matters

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

## JavaScript example

```js
import { Readable } from 'node:stream';

const source = Readable.from(['a', 'b', 'c']);
source.on('data', (chunk) => {
  const ok = sendToClient(chunk);
  if (!ok) source.pause();
});

onClientDrain(() => source.resume());
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
