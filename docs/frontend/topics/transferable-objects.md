# Transferable objects

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Transferable objects move ownership of buffers or ports between threads without copying. After transfer, the original owner is detached, which improves performance but requires explicit lifetime handling.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
import { Worker } from 'node:worker_threads';

const worker = new Worker(new URL('./worker-receiver.js', import.meta.url));
const buffer = new ArrayBuffer(1024);
worker.postMessage(buffer, [buffer]);
console.log(buffer.byteLength); // 0 after transfer
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
