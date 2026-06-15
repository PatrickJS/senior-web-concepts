# SharedArrayBuffer

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Role tags:** sr, frontend
**Example environment:** node

## Summary

SharedArrayBuffer allows multiple threads to access the same memory with Atomics for coordination. In browsers it requires cross-origin isolation because of side-channel risk.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const shared = new SharedArrayBuffer(4);
const view = new Int32Array(shared);

Atomics.store(view, 0, 41);
Atomics.add(view, 0, 1);
console.log(Atomics.load(view, 0));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
