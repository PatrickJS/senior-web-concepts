# Backpressure in streams API

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** node

## Summary

Backpressure is the signal that a consumer cannot keep up with a producer. Streams expose it through desiredSize, writer.ready, highWaterMark, drain-like behavior, and async pulls to avoid unbounded buffering.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
import { WritableStream } from 'node:stream/web';

const sink = new WritableStream({
  async write(chunk) {
    await new Promise((resolve) => setTimeout(resolve, 10));
    console.log('wrote', chunk);
  }
}, { highWaterMark: 1 });

const writer = sink.getWriter();
for (const chunk of ['a', 'b', 'c']) {
  await writer.ready;
  await writer.write(chunk);
}
await writer.close();
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
